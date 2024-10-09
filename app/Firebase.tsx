import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoc7iuqyGSSaqWlR3F1-P3KV4y9_KPJnU",
  authDomain: "portfolio-cca2b.firebaseapp.com",
  projectId: "portfolio-cca2b",
  storageBucket: "portfolio-cca2b.appspot.com",
  messagingSenderId: "14774951516",
  appId: "1:14774951516:web:bce0380de49092abf5d099",
  measurementId: "G-FBMZHXG3MJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);