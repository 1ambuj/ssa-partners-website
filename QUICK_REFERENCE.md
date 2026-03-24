# Quick Reference Card

## 🚀 Getting Started

### 1. Install & Configure (5 minutes)
```bash
npm install                              # Install dependencies
cp .env.local.example .env.local        # Create env file
# Edit .env.local with Firebase credentials
```

### 2. Setup Firebase (10 minutes)
- Go to [Firebase Console](console.firebase.google.com)
- Create/select project
- Enable Authentication → Email/Password
- Create Firestore Database
- Get credentials → paste in `.env.local`

### 3. Setup Email (5 minutes)
- Enable 2FA on Gmail
- Generate App Password
- Add to `.env.local` as EMAIL_PASSWORD

### 4. Start Development
```bash
npm run dev          # Start dev server
```

---

## 📍 Public URLs

| URL | Purpose | Description |
|-----|---------|-------------|
| `/blog` | Blog Listing | View all published blog posts |
| `/blog/[slug]` | Blog Detail | Read full blog post |
| `/feedback` | Feedback Form | Submit client feedback |

---

## 🔐 Admin URLs

| URL | Purpose | Access |
|-----|---------|--------|
| `/admin/login` | Admin Login | Public (login required) |
| `/admin/blog-dashboard` | Blog Management | Admin only |

---

## 📋 Default Admin Access
**Email**: Use value from `NEXT_PUBLIC_ADMIN_EMAIL` in `.env.local`  
**Password**: Set in Firebase Auth Console

---

## 📁 Important Files

### Configuration
- `.env.local` - Environment variables ⚠️ Keep secret!
- `FIREBASE_BLOG_SETUP.md` - Full setup guide
- `DEVELOPER_GUIDE.md` - Code examples

### Core Library Files
- `src/lib/firebase.ts` - Firebase setup
- `src/lib/AuthContext.tsx` - Authentication
- `src/lib/blogService.ts` - Blog operations
- `src/lib/feedbackService.ts` - Feedback operations

### Components
- `src/components/auth/Login.tsx` - Login form
- `src/components/blog/BlogDashboard.tsx` - Admin panel
- `src/components/blog/BlogList.tsx` - Blog display
- `src/components/blog/BlogModal.tsx` - Blog editor
- `src/components/feedback/FeedbackForm.tsx` - Feedback form

### Pages
- `src/pages/blog/index.tsx` - Blog listing
- `src/pages/blog/[slug].tsx` - Blog detail
- `src/pages/feedback.tsx` - Feedback page
- `src/pages/admin/login.tsx` - Admin login
- `src/pages/admin/blog-dashboard.tsx` - Admin dashboard
- `src/pages/api/blog.ts` - Blog API
- `src/pages/api/feedback.ts` - Feedback API

---

## 🔧 Common Tasks

### Create First Blog Post
1. Go to `/admin/login`
2. Enter admin email & password
3. Click "New Blog Post"
4. Fill in title, content, category
5. Click "Save Blog Post"

### Test Feedback Form
1. Go to `/feedback`
2. Fill in the form
3. Click "Submit Feedback"
4. Check email for notification

### Add Featured Blog
1. In blog editor, check "Mark as Featured"
2. Save post
3. Shows in featured sections

### Customize Category Filter
Edit `src/components/blog/BlogModal.tsx`:
```tsx
<option value="Your Category">Your Category</option>
```

---

## 📊 Firestore Collections

```
Firestore Database
├── blogs/
│   ├── title
│   ├── subtitle
│   ├── slug
│   ├── content (HTML)
│   ├── category
│   ├── featured
│   ├── publishDate
│   └── createdAt
│
├── feedback/
│   ├── clientName
│   ├── email
│   ├── overallRating
│   ├── (more rating fields)
│   ├── comments
│   └── createdAt
│
└── users/
    ├── email
    ├── phone
    ├── company
    └── role
```

---

## 🛡️ Security Checklist

- [ ] `.env.local` in `.gitignore`
- [ ] Set `NEXT_PUBLIC_ADMIN_EMAIL` to your email
- [ ] Create admin user in Firebase Auth
- [ ] Configure Firestore Security Rules
- [ ] Use Gmail App Password (not regular password)
- [ ] Enable 2FA on Gmail account
- [ ] Test that only admin can create blogs
- [ ] Verify email notifications are working

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Blog not saving | Check Firestore permissions, verify Firebase config |
| Email not sending | Verify `EMAIL_PASSWORD` is Gmail App Password, not regular password |
| Login not working | Verify admin email matches `NEXT_PUBLIC_ADMIN_EMAIL` |
| Blog content showing HTML | Ensure Quill CSS imported, content uses `dangerouslySetInnerHTML` |
| Images not loading | Upload to Firebase Storage, use signed URLs |

---

## 📞 Quick Support

- Firestore not connected? → See FIREBASE_BLOG_SETUP.md
- Code examples needed? → See DEVELOPER_GUIDE.md
- Integration help? → Check component patterns in `/src/components`

---

## 🎯 Feature Checklist

**Core Features** (✅ Implemented)
- [x] Firebase Authentication
- [x] Blog CRUD operations
- [x] Rich text editor (Quill)
- [x] Category filtering
- [x] Featured posts
- [x] Client feedback form
- [x] Email notifications
- [x] Real-time updates

**Protected Access**
- [x] Admin-only blog creation
- [x] Protected routes
- [x] Auth context provider

**Public Facing**
- [x] Blog listing page
- [x] Blog detail pages
- [x] Feedback form page
- [x] Category filtering

---

## 📈 Next Steps

**Immediate (Required)**
1. Setup Firebase project
2. Configure environment variables
3. Create Firestore collections
4. Test admin login & blog creation

**Soon (Nice to Have)**
1. Add blog search
2. Add comments section
3. Setup backup/export
4. Add analytics tracking

**Future (Optional)**
1. Image upload to Firebase Storage
2. Advanced admin dashboard
3. Email template management
4. API documentation

---

## 📚 Key Resources

- [Firebase Docs](https://firebase.google.com/docs) - Official Firebase documentation
- [React Quill](https://quilljs.com/) - Rich text editor docs
- [Next.js Docs](https://nextjs.org/docs) - Next.js documentation
- [Bootstrap Docs](https://getbootstrap.com/) - Component styling

---

**Last Updated**: March 2026  
**Status**: Ready for Production  
**All Features**: Implemented ✅

---

Print this card for quick reference during setup and development!
