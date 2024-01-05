// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqgjImHgeFYUeeHqrRSakbRkHokWfSsw4",
  authDomain: "portfolio-baac8.firebaseapp.com",
  projectId: "portfolio-baac8",
  storageBucket: "portfolio-baac8.appspot.com",
  messagingSenderId: "833355462860",
  appId: "1:833355462860:web:452531554b5e64e19f6a69",
  measurementId: "G-4B3VDBSSDJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;
