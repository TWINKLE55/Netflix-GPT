// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdvr43hKsC4Ve2kC_4p25CxXJ-HIpXEgo",
  authDomain: "netflix-gpt-52d12.firebaseapp.com",
  projectId: "netflix-gpt-52d12",
  storageBucket: "netflix-gpt-52d12.appspot.com",
  messagingSenderId: "949115013955",
  appId: "1:949115013955:web:545edfc8d9339b5ab87df6",
  measurementId: "G-X2CJ7HD597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);