import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { toJsDate } from "./blogDateUtils";
import { BlogPost, ApiResponse } from "./types";

export const BlogService = {
  // Create a new blog post
  async createBlog(post: BlogPost): Promise<ApiResponse> {
    try {
      const slug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      const publishDate = toJsDate(post.publishDate);

      const docRef = await addDoc(collection(db, "blogs"), {
        ...post,
        slug,
        publishDate: Number.isNaN(publishDate.getTime())
          ? Timestamp.now()
          : Timestamp.fromDate(publishDate),
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });

      return {
        success: true,
        message: "Blog post created successfully",
        data: { id: docRef.id },
      };
    } catch (error: any) {
      console.error("Error creating blog:", error);
      return {
        success: false,
        message: "Failed to create blog post",
        error: error.message,
      };
    }
  },

  // Update a blog post
  async updateBlog(id: string, post: Partial<BlogPost>): Promise<ApiResponse> {
    try {
      const docRef = doc(db, "blogs", id);
      const slug = post.title
        ? post.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")
        : undefined;
      const publishDate = toJsDate(post.publishDate);

      await updateDoc(docRef, {
        ...(typeof post.title === "string" ? { title: post.title } : {}),
        ...(typeof post.subtitle === "string" ? { subtitle: post.subtitle } : {}),
        ...(typeof post.content === "string" ? { content: post.content } : {}),
        ...(typeof post.category === "string" ? { category: post.category } : {}),
        ...(typeof post.author === "string" ? { author: post.author } : {}),
        ...(typeof post.featured === "boolean" ? { featured: post.featured } : {}),
        ...(slug ? { slug } : {}),
        ...(!Number.isNaN(publishDate.getTime())
          ? { publishDate: Timestamp.fromDate(publishDate) }
          : {}),
        updatedAt: Timestamp.now(),
      });

      return {
        success: true,
        message: "Blog post updated successfully",
      };
    } catch (error: any) {
      console.error("Error updating blog:", error);
      return {
        success: false,
        message: "Failed to update blog post",
        error: error.message,
      };
    }
  },

  // Delete a blog post
  async deleteBlog(id: string): Promise<ApiResponse> {
    try {
      await deleteDoc(doc(db, "blogs", id));
      return {
        success: true,
        message: "Blog post deleted successfully",
      };
    } catch (error: any) {
      console.error("Error deleting blog:", error);
      return {
        success: false,
        message: "Failed to delete blog post",
        error: error.message,
      };
    }
  },

  // Get all blog posts
  async getAllBlogs(): Promise<BlogPost[]> {
    try {
      const q = query(
        collection(db, "blogs"),
        orderBy("publishDate", "desc")
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as BlogPost));
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  },

  // Get a single blog post by ID
  async getBlogById(id: string): Promise<BlogPost | null> {
    try {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        } as BlogPost;
      }
      return null;
    } catch (error) {
      console.error("Error fetching blog:", error);
      return null;
    }
  },

  // Get blog by slug
  async getBlogBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const q = query(collection(db, "blogs"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length > 0) {
        const doc = querySnapshot.docs[0];
        return {
          id: doc.id,
          ...doc.data(),
        } as BlogPost;
      }
      return null;
    } catch (error) {
      console.error("Error fetching blog by slug:", error);
      return null;
    }
  },

  // Get featured blogs
  async getFeaturedBlogs(limit: number = 3): Promise<BlogPost[]> {
    try {
      const q = query(
        collection(db, "blogs"),
        where("featured", "==", true),
        orderBy("publishDate", "desc")
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs
        .slice(0, limit)
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        } as BlogPost));
    } catch (error) {
      console.error("Error fetching featured blogs:", error);
      return [];
    }
  },

  // Get blogs by category
  async getBlogsByCategory(category: string): Promise<BlogPost[]> {
    try {
      const q = query(
        collection(db, "blogs"),
        where("category", "==", category),
        orderBy("publishDate", "desc")
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as BlogPost));
    } catch (error) {
      console.error("Error fetching blogs by category:", error);
      return [];
    }
  },

  // Subscribe to real-time blog updates
  subscribeToBlogs(callback: (blogs: BlogPost[]) => void) {
    try {
      const q = query(collection(db, "blogs"), orderBy("publishDate", "desc"));
      return onSnapshot(q, (querySnapshot) => {
        const blogs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        } as BlogPost));
        callback(blogs);
      });
    } catch (error) {
      console.error("Error subscribing to blogs:", error);
      return () => {};
    }
  },
};
