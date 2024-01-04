// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTGMnC9V7vOyflm2XiDeH0s_I0r5ubBlA",
  authDomain: "netflixgpt-e5c88.firebaseapp.com",
  projectId: "netflixgpt-e5c88",
  storageBucket: "netflixgpt-e5c88.appspot.com",
  messagingSenderId: "11826489038",
  appId: "1:11826489038:web:ed0e4b6ea31b511267129f",
  measurementId: "G-S8H7P0L0BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);