// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXAPsn4XrnwMKxX_5ZrxPH8ZhUpnGOFRU",
  authDomain: "zadsudan-a5f51.firebaseapp.com",
  projectId: "zadsudan-a5f51",
  storageBucket: "zadsudan-a5f51.firebasestorage.app",
  messagingSenderId: "467660611579",
  appId: "1:467660611579:web:c38c7d526ccffc6fcef55e",
  measurementId: "G-D9M8QF1TRP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);