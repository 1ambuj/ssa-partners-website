import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  where,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";

import { db } from "./firebase";

const COLLECTION = "blog_comments";

export type StoredBlogComment = {
  id: string;
  name: string;
  email: string;
  website?: string;
  message: string;
  createdAt: string;
};

/** Second argument to subscribe callback when the Firestore listener fails (e.g. rules not deployed). */
export type BlogCommentsSubscribeMeta = {
  firestoreError?: boolean;
};

function mapDoc(d: QueryDocumentSnapshot<DocumentData>): StoredBlogComment {
  const data = d.data();
  const raw = data.createdAt;
  let createdAt = "";
  if (raw instanceof Timestamp) {
    createdAt = raw.toDate().toISOString();
  } else if (typeof raw === "string") {
    createdAt = raw;
  }
  return {
    id: d.id,
    name: String(data.name ?? ""),
    email: String(data.email ?? ""),
    website: data.website ? String(data.website) : undefined,
    message: String(data.message ?? ""),
    createdAt,
  };
}

export const BlogCommentService = {
  subscribe(
    postKey: string,
    onComments: (comments: StoredBlogComment[], meta?: BlogCommentsSubscribeMeta) => void,
  ) {
    const q = query(
      collection(db, COLLECTION),
      where("postKey", "==", postKey),
      orderBy("createdAt", "desc"),
    );
    return onSnapshot(
      q,
      (snap) => {
        onComments(snap.docs.map(mapDoc));
      },
      (err) => {
        console.error("blog_comments subscribe error", err);
        onComments([], { firestoreError: true });
      },
    );
  },

  async addComment(params: {
    postKey: string;
    name: string;
    email: string;
    website?: string;
    message: string;
  }): Promise<{ success: boolean; message?: string }> {
    try {
      await addDoc(collection(db, COLLECTION), {
        postKey: params.postKey,
        name: params.name,
        email: params.email,
        website: params.website?.trim() || null,
        message: params.message,
        createdAt: Timestamp.now(),
      });
      return { success: true };
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: e instanceof Error ? e.message : "Failed to post comment",
      };
    }
  },

  async deleteComment(id: string): Promise<{ success: boolean; message?: string }> {
    try {
      await deleteDoc(doc(db, COLLECTION, id));
      return { success: true };
    } catch (e) {
      return {
        success: false,
        message: e instanceof Error ? e.message : "Failed to delete comment",
      };
    }
  },

  async migrateFromLocal(postKey: string, items: StoredBlogComment[]): Promise<void> {
    for (const c of items) {
      const d = new Date(c.createdAt);
      await addDoc(collection(db, COLLECTION), {
        postKey,
        name: c.name,
        email: c.email,
        website: c.website?.trim() || null,
        message: c.message,
        createdAt: Number.isNaN(d.getTime()) ? Timestamp.now() : Timestamp.fromDate(d),
      });
    }
  },
};
