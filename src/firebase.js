// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDhi6VXCaAhflLGAxFjSPIiiBUe6SvCJFY",
  authDomain: "skyr-studios.firebaseapp.com",
  databaseURL:
    "https://skyr-studios-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skyr-studios",
  storageBucket: "skyr-studios.appspot.com",
  messagingSenderId: "529255948971",
  appId: "1:529255948971:web:74c3f934062a0e9900cdee",
  measurementId: "G-6E5JYXQG7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default firebaseConfig;
