import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnMLWrdYTX3eaX0ob2MBsm0gdEjLWJMoE",
    authDomain: "eshop-163ec.firebaseapp.com",
    projectId: "eshop-163ec",
    storageBucket: "eshop-163ec.appspot.com",
    messagingSenderId: "260477837344",
    appId: "1:260477837344:web:f695e4aaa2a918a9f25c45",
    measurementId: "G-VXB5F4NH4Z"
  };

// Initialize services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };