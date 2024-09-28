// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// import firebase from "firebase";

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
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default db;

export { auth, provider };
