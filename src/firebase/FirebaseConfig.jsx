// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBirRzm0KzV-C_HmfdjOCxpU0fvGQIHKBA",
  authDomain: "myecom-b6453.firebaseapp.com",
  projectId: "myecom-b6453",
  storageBucket: "myecom-b6453.appspot.com",
  messagingSenderId: "579320367610",
  appId: "1:579320367610:web:1018bca5811f8771ba3c43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
