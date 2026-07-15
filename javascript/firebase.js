import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2L65klEl5beQorTrOBCZQYS1vSVBPshI",
  authDomain: "grupni-projekat.firebaseapp.com",
  projectId: "grupni-projekat",
  storageBucket: "grupni-projekat.firebasestorage.app",
  messagingSenderId: "440450649614",
  appId: "1:440450649614:web:d4bc4db1b5ad7b5f42765f",
  measurementId: "G-N8TBMEBZZ3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
