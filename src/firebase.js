// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Combined imports
import { getFirestore } from "firebase/firestore"; // Full Firestore import

const firebaseConfig = {
  apiKey: "AIzaSyAL0ob71jYe4JMs_5nwt6TCw6vXW_pRVo4",
  authDomain: "discord-clone-778de.firebaseapp.com",
  projectId: "discord-clone-778de",
  storageBucket: "discord-clone-778de.appspot.com",
  messagingSenderId: "1044269725362",
  appId: "1:1044269725362:web:536eb15026d4b1a0d6fbab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

// Initialize Google Auth Provider
const provider = new GoogleAuthProvider();

// Exporting for use in other parts of the app
export default db;
export { auth, provider };
