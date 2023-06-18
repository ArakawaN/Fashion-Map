import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getApps, FirebaseApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// サーバーサイドでレンダリングするときにエラーが起きないようにするための記述

const app = initializeApp(firebaseConfig);

// initializeFirestore(app, {
//   ignoreUndefinedProperties: true,
// });
// const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { db, provider };