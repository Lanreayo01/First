// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCihAVl2H-SS4rtx9L01X_tJX7F_t1aEiM",
  authDomain: "mamaput-41ee6.firebaseapp.com",
  projectId: "mamaput-41ee6",
  storageBucket: "mamaput-41ee6.firebasestorage.app",
  messagingSenderId: "760532705028",
  appId: "1:760532705028:web:f65687886a6f7240ea3a51",
  measurementId: "G-CMLDY52JRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// const analytics = getAnalytics(app);