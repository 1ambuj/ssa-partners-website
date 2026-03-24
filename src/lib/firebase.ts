import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJuoJry2hzn1Ptnqrvm63DgBfBJsDbA9E",
  authDomain: "sandeep-singla-associates.firebaseapp.com",
  projectId: "sandeep-singla-associates",
  storageBucket: "sandeep-singla-associates.appspot.com",
  messagingSenderId: "948125476321",
  appId: "1:948125476321:web:062e2c7828188ba1a09ea0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app);

export { serverTimestamp };

export default app;
