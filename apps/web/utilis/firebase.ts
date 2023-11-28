// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeJfMirM2FX67cdwacCyycltF6trbT6Qs",
  authDomain: "menz-wear-2d224.firebaseapp.com",
  projectId: "menz-wear-2d224",
  storageBucket: "menz-wear-2d224.appspot.com",
  messagingSenderId: "706869094611",
  appId: "1:706869094611:web:383a2be3295a4175be0c26",
  measurementId: "G-BXSJTP9F9R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);