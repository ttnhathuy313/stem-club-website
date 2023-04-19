
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNJMjzWnRkPu7GJM9gb6n2wYPTvf2DcO4",
  authDomain: "stem-club-website.firebaseapp.com",
  projectId: "stem-club-website",
  storageBucket: "stem-club-website.appspot.com",
  messagingSenderId: "407530742701",
  appId: "1:407530742701:web:c35284240e57341aa97724",
  measurementId: "G-7JXSBSK2W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}