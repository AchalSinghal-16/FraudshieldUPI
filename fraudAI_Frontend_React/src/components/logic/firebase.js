// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your specific Firebase keys (DO NOT use process.env here for now)
const firebaseConfig = {
  apiKey: "AIzaSyCtFesddSbgSf8SexRcKUYIJpk9EKAL694",
  authDomain: "fraudshieldupi.firebaseapp.com",
  projectId: "fraudshieldupi",
  storageBucket: "fraudshieldupi.firebasestorage.app",
  messagingSenderId: "1091854097945",
  appId: "1:1091854097945:web:3a7d3bf2a215ee4d0c9488",
  measurementId: "G-ESP8R3VFQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export these for use in Login and Dashboard components
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;