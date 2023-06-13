import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tienda-vinoteca.firebaseapp.com",
  projectId: "tienda-vinoteca",
  storageBucket: "tienda-vinoteca.appspot.com",
  messagingSenderId: "541337623315",
  appId: "1:541337623315:web:736120e5e7150c9b0518e6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);