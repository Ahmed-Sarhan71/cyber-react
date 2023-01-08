// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDRoE1XrTIZ-uRjj_JROLtqQJQ81MWgvws",

  authDomain: "auth-development-6aef5.firebaseapp.com",

  projectId: "auth-development-6aef5",

  storageBucket: "auth-development-6aef5.appspot.com",

  messagingSenderId: "138760468738",

  appId: "1:138760468738:web:abfee973156aff224b2a1b"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

