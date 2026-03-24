# Firebase & Blog System Integration Guide

## Overview
This guide explains how to use the newly integrated Firebase authentication, dynamic blog management, and feedback form system in the SSA main-file Next.js project.

## Features Implemented

### 1. **Firebase Authentication**
- Admin login with email/password
- Real-time user state management
- Client authentication support via Firestore
- Protected routes for admin access

### 2. **Dynamic Blog Management**
- Create, read, update, delete (CRUD) blog posts
- Rich text editor with React Quill
- Category and featured blog filtering
- Real-time Firestore synchronization
- Dynamic blog detail pages with slug-based routing

### 3. **Client Feedback Form**
- Multi-field feedback collection
- 5-star rating system for various metrics
- Email notification to admin
- Automatic confirmation emails to clients
- Validation and error handling

### 4. **Contact Form API**
- Enhanced contact form API with email notifications
- Admin and client confirmation emails
- SMTP configuration support

---

## Setup Instructions

### Prerequisites
- Node.js 16+ installed
- A Firebase project created
- Gmail account (for email notifications)

### Step 1: Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or use existing
3. Enable the following services:
   - **Authentication** → Sign-in method → Email/Password
   - **Firestore Database** → Create database in production mode
   - **Storage** (optional, for future image uploads)

4. Get your Firebase config:
   - Click Project Settings (gear icon)
   - Copy the web app config

### Step 2: Environment Variables

Create or update `.env.local` in the main-file root:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Admin Configuration
NEXT_PUBLIC_ADMIN_EMAIL=admin@example.com

# Email Configuration (Gmail SMTP)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
NEXT_PUBLIC_EMAIL_TO=admin@example.com
```

### Step 3: Gmail App Password Setup

If using Gmail for email notifications:

1. Enable 2-Factor Authentication on your Google account
2. Go to [Google Account Security](https://myaccount.google.com/security)
3. Find "App passwords" (appears only if 2FA is enabled)
4. Select "Mail" and "Windows Computer"
5. Copy the generated 16-character password
6. Use this as `EMAIL_PASSWORD` in `.env.local`

### Step 4: Install Dependencies

```bash
cd main-file
npm install
```

The following packages were added:
- `firebase` - Firebase SDK
- `react-quill` - Rich text editor
- `@types/react-quill` - TypeScript definitions

### Step 5: Firestore Database Setup

Create the following collections in Firestore:

#### Collection: `blogs`
Document structure:
```json
{
  "title": "Blog Title",
  "subtitle": "Blog Subtitle",
  "slug": "blog-title",
  "content": "<p>HTML content from Quill</p>",
  "category": "General",
  "featured": true,
  "author": "Author Name",
  "publishDate": Timestamp,
  "createdAt": Timestamp,
  "updatedAt": Timestamp
}
```

#### Collection: `feedback`
Document structure:
```json
{
  "clientName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Company Name",
  "overallRating": 5,
  "serviceQuality": 5,
  "communication": 5,
  "timeliness": 5,
  "costValue": 5,
  "wouldRecommend": 5,
  "comments": "Great service!",
  "service": "Audit",
  "serviceRating": 5,
  "createdAt": Timestamp
}
```

#### Collection: `users` (for client auth)
Document structure:
```json
{
  "email": "client@example.com",
  "phone": "+1234567890",
  "password": "hashed_password",
  "company": "Company Name",
  "role": "client"
}
```

---

## Usage Guide

### Admin - Blog Management

#### Access Blog Dashboard
1. Navigate to `/admin/login`
2. Login with admin email (configured in `NEXT_PUBLIC_ADMIN_EMAIL`)
3. Go to `/admin/blog-dashboard`

#### Create a New Blog Post
1. Click "New Blog Post" button
2. Fill in:
   - Title (auto-generates slug)
   - Subtitle
   - Category
   - Publish Date
   - Mark as Featured (optional)
3. Use the Rich Text Editor for content
4. Click "Save Blog Post"

#### Edit / Delete Blog
- Click "Edit" to modify existing posts
- Click "Delete" to remove posts (with confirmation)

### Client - Feedback Form

#### Access Feedback Form
1. Navigate to `/feedback`
2. Fill in personal information
3. Select service used
4. Rate experience (1-5 stars for each metric)
5. Provide comments
6. Submit

#### Feedback Notification
- Admin receives email with full feedback details
- Client receives confirmation email
- Feedback stored in Firestore for records

### Public - Blog Viewing

#### Browse Blogs
- Navigate to `/blog`
- Filter by category using buttons
- Click "Read More" to view full post

#### View Blog Post
- Click on blog card to view full content
- Full HTML rendering of blog content
- Back navigation to blog list

---

## File Structure

```
src/
├── lib/
│   ├── firebase.ts           # Firebase initialization
│   ├── AuthContext.tsx       # Auth state management
│   ├── blogService.ts        # Blog CRUD operations
│   ├── feedbackService.ts    # Feedback operations
│   └── types.ts              # TypeScript interfaces
├── components/
│   ├── auth/
│   │   ├── Login.tsx         # Login form
│   │   └── ProtectedRoute.tsx # Route protection
│   ├── blog/
│   │   ├── BlogDashboard.tsx # Admin dashboard
│   │   ├── BlogModal.tsx     # Blog editor modal
│   │   └── BlogList.tsx      # Blog listing component
│   └── feedback/
│       └── FeedbackForm.tsx  # Client feedback form
├── pages/
│   ├── admin/
│   │   ├── login.tsx         # Admin login page
│   │   └── blog-dashboard.tsx # Blog management
│   ├── blog/
│   │   ├── index.tsx         # Blog list page
│   │   └── [slug].tsx        # Blog detail page
│   ├── feedback.tsx          # Feedback form page
│   ├── api/
│   │   ├── blog.ts           # Blog API endpoint
│   │   └── feedback.ts       # Feedback API & email
│   ├── _app.tsx              # App provider
│   └── _document.tsx
└── styles/
```

---

## API Endpoints

### Blog API
**POST** `/api/blog`
- Validates blog data
- Action: "validate" for data validation

**GET** `/api/blog`
- Returns API status

### Feedback API
**POST** `/api/feedback`
- Submits feedback
- Sends email notifications
- Validates email and phone

**GET** `/api/feedback`
- Returns API status

---

## Security Considerations

### Admin Access
- Email-based admin identification
- Firebase Auth with password protection
- Protected routes with authentication checks

### Data Protection
- Only admins can create/edit/delete blogs
- Firestore security rules (to be configured):

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Blog write access - admin only
    match /blogs/{document=**} {
      allow read: if true;
      allow create, update, delete: if request.auth.token.email == 'admin@example.com';
    }
    
    // Feedback read - admin only
    match /feedback/{document=**} {
      allow create: if true;
      allow read, update, delete: if request.auth.token.email == 'admin@example.com';
    }
    
    // Users collection
    match /users/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Email Security
- Use App Passwords for Gmail
- Never commit `.env.local` to git
- Add `.env.local` to `.gitignore`

---

## Customization Guide

### Change Blog Categories
Edit [BlogModal.tsx](src/components/blog/BlogModal.tsx):
```tsx
<option value="General">General</option>
<option value="News">News</option>
<option value="Tutorial">Tutorial</option>
// Add more categories here
```

### Change Feedback Rating Fields
Edit [FeedbackForm.tsx](src/components/feedback/FeedbackForm.tsx) and [types.ts](src/lib/types.ts)

### Customize Email Templates
Edit email HTML in:
- [feedback.ts](src/pages/api/feedback.ts) - Feedback email
- [contact.ts](src/pages/api/contact.ts) - Contact email

### Integrate with Existing Theme
- All components use Bootstrap classes for compatibility
- Quill editor uses "snow" theme
- Styling aligns with your existing SCSS structure
- Add custom CSS in your theme files

---

## Troubleshooting

### Blog not saving
- Check Firestore Rules (allow writes for admin)
- Verify Firebase config is correct
- Check browser console for errors

### Email not sending
- Verify EMAIL_USER and EMAIL_PASSWORD are correct
- Check Gmail App Password setup
- Enable "Less secure app access" if needed
- Verify NEXT_PUBLIC_ADMIN_EMAIL is set

### Login not working
- Verify admin email matches NEXT_PUBLIC_ADMIN_EMAIL
- Check Firebase Auth is enabled
- Clear browser cache and try again

### Blog content not rendering
- Quill saves HTML - Firestore stores correctly
- React Quill CSS must be imported
- Check dangerouslySetInnerHTML is using correct content

---

## Next Steps

1. ✅ Set up Firebase project and env variables
2. ✅ Configure Firestore database
3. ✅ Set up email notifications
4. ✅ Create admin user in Firebase Auth
5. ✅ Create first blog post
6. ✅ Test feedback form
7. 🔄 Customize styling to match theme
8. 🔄 Add more blog categories
9. 🔄 Implement backup/export functionality
10. 🔄 Add blog search functionality

---

## Support Reference

- [Firebase Docs](https://firebase.google.com/docs)
- [React Quill Docs](https://quilljs.com/)
- [Next.js Docs](https://nextjs.org/docs)
- [Bootstrap Docs](https://getbootstrap.com/docs)

---

**Last Updated**: March 2026
**Version**: 1.0
