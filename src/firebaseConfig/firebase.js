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

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyCDJpmx9D6-Vd0TVQThbWNyte4u-FPotPk",
  authDomain: "offer4deals-737a2.firebaseapp.com",
  projectId: "offer4deals-737a2",
  storageBucket: "offer4deals-737a2.appspot.com",
  messagingSenderId: "255405339197",
  appId: "1:255405339197:web:094011135337c070a27054",
  databaseURL:
    "https://offer4deals-737a2-default-rtdb.asia-southeast1.firebasedatabase.app",
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
export const getImages = () => {
  const imagesRef = ref(db, "images");
  return new Promise((resolve, reject) => {
    onValue(
      imagesRef,
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
