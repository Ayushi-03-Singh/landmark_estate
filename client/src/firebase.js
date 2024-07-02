// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-113d7.firebaseapp.com",
  projectId: "mern-estate-113d7",
  storageBucket: "mern-estate-113d7.appspot.com",
  messagingSenderId: "554247784685",
  appId: "1:554247784685:web:4e6af4a88b89defc2ce4e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);