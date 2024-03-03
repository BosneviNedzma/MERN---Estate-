import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b61ca.firebaseapp.com",
  projectId: "mern-estate-b61ca",
  storageBucket: "mern-estate-b61ca.appspot.com",
  messagingSenderId: "272557306833",
  appId: "1:272557306833:web:7029327e5b9ab45e32e6f0"
};

export const app = initializeApp(firebaseConfig);