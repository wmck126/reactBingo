// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBRj0S4zhU7mersGkenCJi810bMgEBPZV8",
  authDomain: "react-bingo-64fb9.firebaseapp.com",
  projectId: "react-bingo-64fb9",
  storageBucket: "react-bingo-64fb9.appspot.com",
  messagingSenderId: "344111800950",
  appId: "1:344111800950:web:91f024e6c8ea089fa3b557",
  measurementId: "G-G9TP8METDH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize Firebase Auth
export const auth = getAuth(app)
export default app