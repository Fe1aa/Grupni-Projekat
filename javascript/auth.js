import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { auth, db } from "./firebase.js";

import {
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

export async function register(email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email,
    });

    console.log("User created", user.uid);

    return true;
  } catch (error) {
    alert("Something went wrong!");
    console.log(error.code);
    console.log(error.message);
    return false;
  }
}

export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    console.log("User signed in", user.uid);

    return true;
  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      alert("Wrong email or password was entered!");
    } else {
      alert("Something went wrong!");
      console.log(error.code);
      console.log(error.message);
    }

    return false;
  }
}

export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent!");

    return true;
  } catch (error) {
    alert("Something went wrong!");
    console.log(error.code);
    console.log(error.message);
    return false;
  }
}
