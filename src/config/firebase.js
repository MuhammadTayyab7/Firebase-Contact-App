// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQn9Jim_KqED0T7AJeUtUjw3GdHR7IlCM",
  authDomain: "vite-contact-108ae.firebaseapp.com",
  projectId: "vite-contact-108ae",
  storageBucket: "vite-contact-108ae.appspot.com",
  messagingSenderId: "273737433188",
  appId: "1:273737433188:web:bc380f9fca02f5ffafdf71",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
