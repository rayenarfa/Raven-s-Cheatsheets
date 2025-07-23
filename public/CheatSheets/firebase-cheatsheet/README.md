# 🔥 Firebase Cheatsheet

A comprehensive reference guide for Firebase services, including authentication, Firestore, and real-time features.

## 🚀 Getting Started

### Installation & Setup

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase project
firebase init

# Select services:
# - Firestore
# - Authentication
# - Hosting
# - Functions
# - Storage
```

### Project Configuration

```javascript
// firebase.json
{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  "functions": {
    "source": "functions"
  },
  "storage": {
    "rules": "storage.rules"
  }
}
```

## 🔐 Authentication

### Web SDK Setup

```javascript
// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
```

### Authentication Methods

```javascript
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

// Email/Password Authentication
const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User created:', user);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed in:', user);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Google Authentication
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Google sign-in successful:', user);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Sign Out
const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Auth State Observer
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in:', user);
  } else {
    console.log('User is signed out');
  }
});
```

### User Management

```javascript
import { 
  updateProfile,
  sendPasswordResetEmail,
  updatePassword,
  deleteUser
} from 'firebase/auth';

// Update user profile
const updateUserProfile = async (displayName, photoURL) => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL
    });
    console.log('Profile updated');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Send password reset email
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Password reset email sent');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Update password
const changePassword = async (newPassword) => {
  try {
    await updatePassword(auth.currentUser, newPassword);
    console.log('Password updated');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Delete user account
const deleteUserAccount = async () => {
  try {
    await deleteUser(auth.currentUser);
    console.log('User account deleted');
  } catch (error) {
    console.error('Error:', error.message);
  }
};
```

## 📊 Firestore Database

### Setup & Configuration

```javascript
import { getFirestore, collection, doc, setDoc, getDoc, getDocs } from 'firebase/firestore';

const db = getFirestore(app);
```

### Basic CRUD Operations

```javascript
// Create document
const createDocument = async (collectionName, documentId, data) => {
  try {
    await setDoc(doc(db, collectionName, documentId), data);
    console.log('Document created');
  } catch (error) {
    console.error('Error:', error);
  }
};

// Read document
const getDocument = async (collectionName, documentId) => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Read all documents in collection
const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    return documents;
  } catch (error) {
    console.error('Error:', error);
  }
};

// Update document
const updateDocument = async (collectionName, documentId, data) => {
  try {
    await updateDoc(doc(db, collectionName, documentId), data);
    console.log('Document updated');
  } catch (error) {
    console.error('Error:', error);
  }
};

// Delete document
const deleteDocument = async (collectionName, documentId) => {
  try {
    await deleteDoc(doc(db, collectionName, documentId));
    console.log('Document deleted');
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Queries

```javascript
import { 
  query, 
  where, 
  orderBy, 
  limit, 
  startAfter,
  endBefore 
} from 'firebase/firestore';

// Simple query
const getUsersByAge = async (age) => {
  const q = query(collection(db, "users"), where("age", "==", age));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Complex query
const getActiveUsers = async () => {
  const q = query(
    collection(db, "users"),
    where("status", "==", "active"),
    where("age", ">=", 18),
    orderBy("age", "desc"),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Pagination
const getPaginatedUsers = async (lastDoc, pageSize = 10) => {
  let q = query(
    collection(db, "users"),
    orderBy("createdAt", "desc"),
    limit(pageSize)
  );
  
  if (lastDoc) {
    q = query(q, startAfter(lastDoc));
  }
  
  const querySnapshot = await getDocs(q);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  
  return {
    users: querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })),
    lastDoc: lastVisible
  };
};
```

### Real-time Listeners

```javascript
import { onSnapshot } from 'firebase/firestore';

// Listen to document changes
const listenToDocument = (collectionName, documentId, callback) => {
  const unsubscribe = onSnapshot(doc(db, collectionName, documentId), (doc) => {
    if (doc.exists()) {
      callback({ id: doc.id, ...doc.data() });
    } else {
      callback(null);
    }
  });
  
  return unsubscribe; // Return unsubscribe function
};

// Listen to collection changes
const listenToCollection = (collectionName, callback) => {
  const unsubscribe = onSnapshot(collection(db, collectionName), (snapshot) => {
    const documents = [];
    snapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    callback(documents);
  });
  
  return unsubscribe;
};

// Listen to query changes
const listenToQuery = (queryRef, callback) => {
  const unsubscribe = onSnapshot(queryRef, (snapshot) => {
    const documents = [];
    snapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    callback(documents);
  });
  
  return unsubscribe;
};
```

### Batch Operations

```javascript
import { writeBatch } from 'firebase/firestore';

// Batch write
const batchWrite = async () => {
  const batch = writeBatch(db);
  
  // Add operations to batch
  batch.set(doc(db, "users", "user1"), { name: "John", age: 25 });
  batch.update(doc(db, "users", "user2"), { age: 26 });
  batch.delete(doc(db, "users", "user3"));
  
  // Commit batch
  try {
    await batch.commit();
    console.log('Batch write successful');
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## ☁️ Cloud Functions

### Setup

```bash
# Initialize Functions
firebase init functions

# Deploy functions
firebase deploy --only functions

# Deploy specific function
firebase deploy --only functions:functionName
```

### HTTP Functions

```javascript
// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// HTTP function
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.json({ message: "Hello from Firebase Functions!" });
});

// Callable function
exports.getUserData = functions.https.onCall(async (data, context) => {
  // Check if user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  
  const userId = context.auth.uid;
  const userDoc = await admin.firestore().collection('users').doc(userId).get();
  
  return { userData: userDoc.data() };
});
```

### Firestore Triggers

```javascript
// Firestore trigger
exports.onUserCreated = functions.firestore
  .document('users/{userId}')
  .onCreate(async (snap, context) => {
    const userData = snap.data();
    const userId = context.params.userId;
    
    // Send welcome email
    await sendWelcomeEmail(userData.email);
    
    // Create user profile
    await admin.firestore().collection('profiles').doc(userId).set({
      userId: userId,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      email: userData.email
    });
  });

// Update trigger
exports.onUserUpdated = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change, context) => {
    const newData = change.after.data();
    const previousData = change.before.data();
    
    if (newData.email !== previousData.email) {
      // Email changed, update profile
      await admin.firestore().collection('profiles').doc(context.params.userId).update({
        email: newData.email,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
    }
  });

// Delete trigger
exports.onUserDeleted = functions.firestore
  .document('users/{userId}')
  .onDelete(async (snap, context) => {
    const userId = context.params.userId;
    
    // Clean up related data
    await admin.firestore().collection('profiles').doc(userId).delete();
    await admin.firestore().collection('posts').where('authorId', '==', userId).get()
      .then(snapshot => {
        const batch = admin.firestore().batch();
        snapshot.docs.forEach(doc => batch.delete(doc.ref));
        return batch.commit();
      });
  });
```

## 📁 Cloud Storage

### Setup

```javascript
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = getStorage(app);
```

### File Operations

```javascript
// Upload file
const uploadFile = async (file, path) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('File uploaded:', downloadURL);
    return downloadURL;
  } catch (error) {
    console.error('Error:', error);
  }
};

// Download file
const downloadFile = async (path) => {
  try {
    const storageRef = ref(storage, path);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error:', error);
  }
};

// Delete file
const deleteFile = async (path) => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
    console.log('File deleted');
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 🔔 Cloud Messaging

### Setup

```javascript
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const messaging = getMessaging(app);
```

### Push Notifications

```javascript
// Request permission and get token
const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'your-vapid-key'
      });
      console.log('Token:', token);
      return token;
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Handle foreground messages
onMessage(messaging, (payload) => {
  console.log('Message received:', payload);
  // Show notification
  new Notification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
```

## 🔒 Security Rules

### Firestore Rules

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write if user is authenticated
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow read for all, write for authenticated users
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Allow read/write for admin users
    match /admin/{document=**} {
      allow read, write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

### Storage Rules

```javascript
// storage.rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow users to upload their own files
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow public read access to images
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 📊 Analytics

### Setup

```javascript
import { getAnalytics, logEvent } from 'firebase/analytics';

const analytics = getAnalytics(app);
```

### Event Tracking

```javascript
// Track custom events
const trackEvent = (eventName, parameters) => {
  logEvent(analytics, eventName, parameters);
};

// Track page views
const trackPageView = (pageName) => {
  logEvent(analytics, 'page_view', {
    page_name: pageName
  });
};

// Track user actions
const trackUserAction = (action, value) => {
  logEvent(analytics, 'user_action', {
    action: action,
    value: value
  });
};
```

## 🔗 Useful Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)
- [Firebase CLI](https://firebase.google.com/docs/cli)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)

---

**Happy building! 🔥** 