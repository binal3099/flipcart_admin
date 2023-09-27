// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7j2i2x4Wr7G3ai-EW0E7HR2-7fqOvU98",
  authDomain: "flipkart-product.firebaseapp.com",
  projectId: "flipkart-product",
  storageBucket: "flipkart-product.appspot.com",
  messagingSenderId: "163161151227",
  appId: "1:163161151227:web:debeea13b30008c9b8025e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default auth;