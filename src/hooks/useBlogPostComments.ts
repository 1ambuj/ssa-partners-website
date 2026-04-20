"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { BlogCommentService, type StoredBlogComment } from "@/lib/blogCommentService";
import { useAuth } from "@/lib/AuthContext";

function commentsStorageKey(legacySlug: string) {
  return `ssa_blog_comments:${legacySlug}`;
}

function readLocalComments(legacySlug: string): StoredBlogComment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(commentsStorageKey(legacySlug));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed as StoredBlogComment[];
  } catch {
    return [];
  }
}

function writeLocalComments(legacySlug: string, list: StoredBlogComment[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(commentsStorageKey(legacySlug), JSON.stringify(list));
  } catch {
    // ignore
  }
}

export function useBlogPostComments(postKey: string, legacySlug: string) {
  const { isAdmin, currentUser } = useAuth();
  const [comments, setComments] = useState<StoredBlogComment[]>([]);
  const migrationDoneRef = useRef(false);
  const migrationLockRef = useRef(false);
  const localModeRef = useRef(false);

  useEffect(() => {
    migrationDoneRef.current = false;
    migrationLockRef.current = false;
    localModeRef.current = false;
  }, [postKey, legacySlug]);

  useEffect(() => {
    if (!postKey || !legacySlug) return;

    let unsub: (() => void) | undefined;
    try {
      unsub = BlogCommentService.subscribe(postKey, (list, meta) => {
        if (meta?.firestoreError) {
          localModeRef.current = true;
          migrationDoneRef.current = true;
          setComments(readLocalComments(legacySlug));
          return;
        }

        setComments(list);

        if (migrationDoneRef.current) return;

        if (list.length > 0) {
          migrationDoneRef.current = true;
          return;
        }

        if (migrationLockRef.current) return;
        if (typeof window === "undefined") {
          migrationDoneRef.current = true;
          return;
        }

        const raw = window.localStorage.getItem(commentsStorageKey(legacySlug));
        if (!raw) {
          migrationDoneRef.current = true;
          return;
        }

        let parsed: unknown;
        try {
          parsed = JSON.parse(raw);
        } catch {
          migrationDoneRef.current = true;
          return;
        }
        if (!Array.isArray(parsed) || parsed.length === 0) {
          migrationDoneRef.current = true;
          return;
        }

        migrationLockRef.current = true;
        migrationDoneRef.current = true;

        void (async () => {
          try {
            await BlogCommentService.migrateFromLocal(postKey, parsed as StoredBlogComment[]);
            window.localStorage.removeItem(commentsStorageKey(legacySlug));
          } catch (e) {
            console.error("Blog comment migration failed", e);
            localModeRef.current = true;
            setComments(readLocalComments(legacySlug));
          }
        })();
      });
    } catch (e) {
      console.error("Blog comment subscribe setup failed", e);
      localModeRef.current = true;
      migrationDoneRef.current = true;
      setComments(readLocalComments(legacySlug));
    }

    return () => {
      if (typeof unsub === "function") unsub();
    };
  }, [postKey, legacySlug]);

  const addComment = useCallback(
    async (data: { name: string; email: string; website?: string; message: string }) => {
      if (localModeRef.current) {
        const item: StoredBlogComment = {
          id: `${Date.now()}`,
          name: data.name,
          email: data.email,
          website: data.website?.trim() || undefined,
          message: data.message,
          createdAt: new Date().toISOString(),
        };
        const next = [item, ...readLocalComments(legacySlug)];
        writeLocalComments(legacySlug, next);
        setComments(next);
        return { success: true as const };
      }
      return BlogCommentService.addComment({ postKey, ...data });
    },
    [postKey, legacySlug],
  );

  const removeComment = useCallback(
    async (id: string) => {
      if (localModeRef.current) {
        const next = readLocalComments(legacySlug).filter((c) => c.id !== id);
        writeLocalComments(legacySlug, next);
        setComments(next);
        return { success: true as const };
      }
      return BlogCommentService.deleteComment(id);
    },
    [legacySlug],
  );

  const canModerate = Boolean(isAdmin && currentUser);

  return { comments, addComment, removeComment, canModerate };
}
