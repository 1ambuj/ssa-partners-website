# Developer Quick Reference Guide

## Quick Code Examples

### 1. Using Authentication Hook

```tsx
import { useAuth } from "@/lib/AuthContext";

const MyComponent = () => {
  const { currentUser, isAdmin, login, logout } = useAuth();

  if (!currentUser) {
    return <div>Please login</div>;
  }

  return (
    <div>
      <p>Welcome, {currentUser.email}</p>
      {isAdmin && <p>You are an admin</p>}
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
```

### 2. Loading Blog Posts

```tsx
import BlogList from "@/components/blog/BlogList";

// Show all blogs
<BlogList />

// Show featured blogs only
<BlogList featured limit={3} />

// Show blogs by category
<BlogList category="Tutorial" />

// Show specific number of blogs
<BlogList limit={5} />

// Combine options
<BlogList featured category="News" limit={5} />
```

### 3. Using Blog Service Directly

```tsx
import { BlogService } from "@/lib/blogService";
import { useEffect, useState } from "react";

const MyBlogComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Get all blogs
    const loadBlogs = async () => {
      const allBlogs = await BlogService.getAllBlogs();
      setBlogs(allBlogs);
    };
    loadBlogs();

    // Or subscribe to real-time updates
    const unsubscribe = BlogService.subscribeToBlogs((blogs) => {
      setBlogs(blogs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.subtitle}</p>
        </div>
      ))}
    </div>
  );
};
```

### 4. Creating a Blog Post Programmatically

```tsx
import { BlogService } from "@/lib/blogService";

const result = await BlogService.createBlog({
  title: "My Blog Post",
  subtitle: "A great post",
  content: "<p>HTML content here</p>",
  category: "Tutorial",
  featured: true,
  publishDate: new Date(),
  createdAt: new Date(),
});

if (result.success) {
  console.log("Blog created:", result.data);
} else {
  console.error("Error:", result.error);
}
```

### 5. Using Feedback Service

```tsx
import { FeedbackService } from "@/lib/feedbackService";

const submitFeedback = async (feedbackData) => {
  const result = await FeedbackService.submitFeedback(feedbackData);
  
  if (result.success) {
    alert("Feedback submitted!");
  }
};

// Subscribe to feedback updates (admin only)
useEffect(() => {
  const unsubscribe = FeedbackService.subscribeToFeedback((feedback) => {
    console.log("New feedback:", feedback);
  });
  
  return () => unsubscribe();
}, []);
```

### 6. Protected Admin Component

```tsx
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const AdminPanel = () => {
  return (
    <ProtectedRoute requireAdmin={true}>
      <div>Admin content only</div>
    </ProtectedRoute>
  );
};
```

### 7. Display Featured Blogs in Homepage

```tsx
// In your homepage or about page
import BlogList from "@/components/blog/BlogList";

export default function HomePage() {
  return (
    <div>
      <h2>Latest Featured Blogs</h2>
      <BlogList featured limit={3} />
    </div>
  );
}
```

### 8. Custom Blog Display with Search

```tsx
"use client";

import { useEffect, useState } from "react";
import { BlogService } from "@/lib/blogService";
import { BlogPost } from "@/lib/types";

const BlogSearch = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const allBlogs = await BlogService.getAllBlogs();
      setBlogs(allBlogs);
    };
    loadBlogs();
  }, []);

  useEffect(() => {
    const results = blogs.filter(
      blog =>
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.content.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, blogs]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.subtitle}</p>
        </div>
      ))}
    </div>
  );
};
```

---

## Common Tasks

### Task: Add Blog Section to Navigation

```tsx
// In your Layout or Navigation component
<nav>
  <Link href="/">Home</Link>
  <Link href="/blog">Blog</Link>
  <Link href="/feedback">Feedback</Link>
  {isAdmin && <Link href="/admin/blog-dashboard">Admin Dashboard</Link>}
</nav>
```

### Task: Show Blog Count

```tsx
import { BlogService } from "@/lib/blogService";
import { useEffect, useState } from "react";

const BlogCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    BlogService.getAllBlogs().then(blogs => {
      setCount(blogs.length);
    });
  }, []);

  return <div>Total Blog Posts: {count}</div>;
};
```

### Task: Get Latest Blog

```tsx
const LatestBlog = () => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    BlogService.getAllBlogs().then(blogs => {
      if (blogs.length > 0) {
        setBlog(blogs[0]); // First is latest due to orderBy
      }
    });
  }, []);

  return blog ? <h3>{blog.title}</h3> : <p>No blogs yet</p>;
};
```

### Task: Email Validation in Forms

```tsx
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10;
};
```

### Task: Format Date for Display

```tsx
const formatBlogDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

// Usage
<p>Published: {formatBlogDate(blog.publishDate)}</p>
```

---

## Type Definitions Reference

### BlogPost
```tsx
interface BlogPost {
  id?: string;
  title: string;
  subtitle: string;
  slug?: string;
  content: string; // HTML content
  category: string;
  featured: boolean;
  author?: string;
  publishDate: string | Date;
  createdAt: string | Date;
  updatedAt?: string | Date;
  thumbnail?: string;
}
```

### FeedbackForm
```tsx
interface FeedbackForm {
  id?: string;
  clientName: string;
  email: string;
  phone: string;
  company?: string;
  overallRating: number; // 1-5
  serviceQuality: number; // 1-5
  communication: number; // 1-5
  timeliness: number; // 1-5
  costValue: number; // 1-5
  wouldRecommend: number; // 1-5
  serviceSpecific?: string;
  serviceRating?: number; // 1-5
  comments: string;
  service?: string;
  createdAt: string | Date;
}
```

### ApiResponse
```tsx
interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
```

---

## Hook Reference

### useAuth()
Returns authentication state and methods:
```tsx
{
  currentUser: User | null;        // Firebase User object
  userData: UserData | null;       // Additional user data
  loading: boolean;                 // Auth state loading
  login: (email, password) => void; // Login method
  logout: () => void;               // Logout method
  isAdmin: boolean;                 // Admin status
}
```

---

## Environment Variables Reference

```bash
# Firebase (required)
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID

# Admin (required)
NEXT_PUBLIC_ADMIN_EMAIL

# Email (required for notifications)
EMAIL_USER
EMAIL_PASSWORD
NEXT_PUBLIC_EMAIL_TO
```

---

## Debugging Tips

### Enable Console Logging
```tsx
// In development, add to firebase.ts
if (process.env.NODE_ENV === "development") {
  console.log("Firebase initialized:", firebaseConfig);
}
```

### Check Firestore Rules
- Go to Firebase Console
- Firestore Database → Rules
- Test rules with your email

### Monitor Real-time Updates
```tsx
BlogService.subscribeToBlogs((blogs) => {
  console.log("Blogs updated:", blogs);
});
```

### Test Email Sending
```tsx
// In /api/feedback endpoint, check:
// 1. EMAIL_USER exists
// 2. EMAIL_PASSWORD is valid app password
// 3. NEXT_PUBLIC_ADMIN_EMAIL is set
// 4. Error logs in Next.js console
```

---

## Performance Tips

1. **Lazy Load Blog Content**
   ```tsx
   import dynamic from "next/dynamic";
   const BlogList = dynamic(() => import("@/components/blog/BlogList"));
   ```

2. **Limit Blog Queries**
   ```tsx
   <BlogList featured limit={5} /> // Instead of loading all
   ```

3. **Cache Blog Data**
   ```tsx
   const [cachedBlogs, setCachedBlogs] = useState([]);
   // Reuse instead of fetching every render
   ```

4. **Use Real-time Subscriptions Wisely**
   ```tsx
   // Unsubscribe when component unmounts
   useEffect(() => {
     const unsubscribe = BlogService.subscribeToBlogs(...);
     return () => unsubscribe();
   }, []);
   ```

---

## Migration from SSA Website

Features already migrated from ssa-website:
- ✅ Firebase Authentication
- ✅ Dynamic Blog Creation
- ✅ React Quill Text Editor
- ✅ Email Notifications
- ✅ Feedback Form
- ✅ Contact Form API

To extend:
1. Copy the same patterns for new features
2. Use Firestore collections like: `testimonials`, `case-studies`, `team`
3. Add more API endpoints as needed
4. Remember to update Firestore rules

---

**Last Updated**: March 2026
**For**: SSA Main File (Next.js)
