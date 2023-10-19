// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAw_rHNVVA6eMqX2AJI2v9jf4z_IohRpWU",
  authDomain: "hospitalapp-e33b6.firebaseapp.com",
  projectId: "hospitalapp-e33b6",
  storageBucket: "hospitalapp-e33b6.appspot.com",
  messagingSenderId: "700320952001",
  appId: "1:700320952001:web:a73f498ec9369a654cae40",
  measurementId: "G-DQJR4VKPHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth= getAuth(app); 