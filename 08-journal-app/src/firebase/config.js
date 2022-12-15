// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgf78nxfcXuXNGF67ycXWAj-cEs_7um8c",
    authDomain: "stx-journal-app.firebaseapp.com",
    projectId: "stx-journal-app",
    storageBucket: "stx-journal-app.appspot.com",
    messagingSenderId: "103154426477",
    appId: "1:103154426477:web:80066bf6a0820903ce9564",
    measurementId: "G-137Q7WRRVH"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseCloudStore = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);