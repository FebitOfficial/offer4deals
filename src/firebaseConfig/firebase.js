// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoEZAj7kQhuRCSU0bCXCQKqG0gQ95pDz4",
  authDomain: "offer-4-d.firebaseapp.com",
  projectId: "offer-4-d",
  storageBucket: "offer-4-d.appspot.com",
  messagingSenderId: "518707532292",
  appId: "1:518707532292:web:a5cde1ce845aa1f94a1b51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const db = getDatabase();
export const getProducts = () => {
  const productRef = ref(db, "products");
  return new Promise((resolve, reject) => {
    onValue(
      productRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
