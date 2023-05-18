// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLrYu9dkZ7HACCaN-7sjG14fGRxC1sEII",
  authDomain: "auth-c24c7.firebaseapp.com",
  projectId: "auth-c24c7",
  storageBucket: "auth-c24c7.appspot.com",
  messagingSenderId: "493035248982",
  appId: "1:493035248982:web:5b7cfc8e79f6c8ba15caf7",
  measurementId: "G-CH7L6R8HQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;