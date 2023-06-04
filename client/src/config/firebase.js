// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEHthGYp4Lhi-SCUJpwJkfOOvYxnnITyc",
  authDomain: "abhyass-a6792.firebaseapp.com",
  projectId: "abhyass-a6792",
  storageBucket: "abhyass-a6792.appspot.com",
  messagingSenderId: "710079958031",
  appId: "1:710079958031:web:e6da1b7e2975554c5d277a",
  measurementId: "G-V50F20J3V4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);