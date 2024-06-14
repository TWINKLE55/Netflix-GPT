// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWHehp0Pc-uQZT8RdfyvGEuDlu-cyvDU8",
  authDomain: "netflixgpt-890bf.firebaseapp.com",
  projectId: "netflixgpt-890bf",
  storageBucket: "netflixgpt-890bf.appspot.com",
  messagingSenderId: "106852660251",
  appId: "1:106852660251:web:975ee7d22860cc988874be",
  measurementId: "G-JDQT1BDCJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
