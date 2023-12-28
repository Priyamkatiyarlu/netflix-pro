// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3npo9k7D9G3YzFHMbE5GN06D_9c-M48Q",
  authDomain: "netflix-pro-7.firebaseapp.com",
  projectId: "netflix-pro-7",
  storageBucket: "netflix-pro-7.appspot.com",
  messagingSenderId: "985179363764",
  appId: "1:985179363764:web:f067149f47da4619467ae1",
  measurementId: "G-0LHNHV6D83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();