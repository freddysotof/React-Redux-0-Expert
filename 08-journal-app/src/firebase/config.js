// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_PROJECTID,
  VITE_MEASUREMENTID
} = getEnvironments();
// const firebaseConfig = {
//     apiKey: "AIzaSyCgf78nxfcXuXNGF67ycXWAj-cEs_7um8c",
//     authDomain: "stx-journal-app.firebaseapp.com",
//     projectId: "stx-journal-app",
//     storageBucket: "stx-journal-app.appspot.com",
//     messagingSenderId: "103154426477",
//     appId: "1:103154426477:web:80066bf6a0820903ce9564",
//     measurementId: "G-137Q7WRRVH"
// };

const firebaseConfig = {
    apiKey:VITE_APIKEY,
    authDomain:VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID ,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
    measurementId: VITE_MEASUREMENTID
  };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseCloudStore = getFirestore(FirebaseApp);
// const analytics = getAnalytics(FirebaseApp);