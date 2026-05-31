// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEMshvg3TvZnaBoqx9Av3S9L3z8wiplYw",  
  authDomain: "book-courier-eb447.firebaseapp.com",
  projectId: "book-courier-eb447",
  storageBucket: "book-courier-eb447.firebasestorage.app",
  messagingSenderId: "702729974051",
  appId: "1:702729974051:web:349b84a63b674561b91c96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);