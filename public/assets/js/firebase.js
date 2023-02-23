// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxpfAxh5byWflqy5VXvV5oO9RNAZD0Gu0",
  authDomain: "rd-portfolio.firebaseapp.com",
  projectId: "rd-portfolio",
  storageBucket: "rd-portfolio.appspot.com",
  messagingSenderId: "978243707643",
  appId: "1:978243707643:web:ace4f70bce0ee1f55d865e",
  measurementId: "G-HR00K0GG9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);