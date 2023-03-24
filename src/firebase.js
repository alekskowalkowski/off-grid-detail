// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: "realtor-clone-5c262.firebaseapp.com",
  projectId: "realtor-clone-5c262",
  storageBucket: "realtor-clone-5c262.appspot.com",
  messagingSenderId: "40989450840",
  appId: "1:40989450840:web:57100729e46f2159c8202d",
  measurementId: "G-WXB0EP7RS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);