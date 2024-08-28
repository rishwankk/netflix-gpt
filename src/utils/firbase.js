// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvzPfmCyyiDASRC_muqGw4vK2QyGznIuM",
  authDomain: "netflix-gpt-a4bb4.firebaseapp.com",
  projectId: "netflix-gpt-a4bb4",
  storageBucket: "netflix-gpt-a4bb4.appspot.com",
  messagingSenderId: "449323715985",
  appId: "1:449323715985:web:a6071b5eef3a0f2b6b9e30",
  measurementId: "G-JLCB0L2F6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);