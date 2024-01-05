import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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
export const auth = getAuth();