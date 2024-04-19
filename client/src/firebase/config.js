// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGOYSZ9gEXzcaZ1FDIQx_eT19d_7m2Psw",
  authDomain: "note-app-graphql-9c54c.firebaseapp.com",
  projectId: "note-app-graphql-9c54c",
  storageBucket: "note-app-graphql-9c54c.appspot.com",
  messagingSenderId: "399941060902",
  appId: "1:399941060902:web:540b03f4be96058952d9e7",
  measurementId: "G-H8LKN3W3FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);