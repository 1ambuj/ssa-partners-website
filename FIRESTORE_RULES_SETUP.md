# Firestore Rules Setup – Fix Jobs & Careers

## Why jobs don't show on the Careers page

If jobs you create in Firebase are not appearing on the Careers page, it is usually because Firestore security rules are blocking reads.

The Careers page loads jobs from the `jobs` collection. If rules require authentication, visitors cannot see them.

## Deploy Firestore rules

1. Install the Firebase CLI (if needed):
   ```bash
   npm install -g firebase-tools
   ```

2. Log in to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project (if not done):
   ```bash
   cd main-file
   firebase init firestore
   ```
   - Choose your project: `sandeep-singla-associates`
   - When asked for `firestore.rules`, use the existing file
   - When asked for `firestore.indexes`, you can skip or create a default

4. Deploy the rules:
   ```bash
   firebase deploy --only firestore:rules
   ```

5. In Firebase Console → Firestore → Rules, confirm that your rules match the contents of `firestore.rules` in this project.

## Required rules

- **`jobs`**: `allow read: if true` so the Careers page can load jobs without login.
- **`job_applications`**: `allow create: if true` so anyone can submit an application.
- Other collections (blogs, feedback, etc.) should follow the same pattern: public read where needed, admin-only write.

## Create Firestore index (if needed)

If you see errors like “The query requires an index”, open the link in the error message to create the index in Firebase Console, or add it to `firestore.indexes.json`:

```json
{
  "indexes": [
    {
      "collectionGroup": "jobs",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "active", "order": "ASCENDING" },
        { "fieldPath": "createdAt", "order": "DESCENDING" }
      ]
    }
  ]
}
```

For `orderBy("createdAt", "desc")` on `jobs`, a simple single-field index is usually enough. Create it from the error link if Firebase asks for it.

## Checklist

- [ ] Deploy `firestore.rules` with `firebase deploy --only firestore:rules`
- [ ] Confirm `jobs` allows public read
- [ ] Ensure new jobs are marked `active: true` in the admin dashboard
- [ ] Create any required composite indexes if Firebase shows an error
