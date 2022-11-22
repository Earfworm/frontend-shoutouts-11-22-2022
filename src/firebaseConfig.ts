import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA4k33JFNKdYF295xIUsK2Z0W51oTlRN8I",
  authDomain: "shoutouts-5a7d1.firebaseapp.com",
  projectId: "shoutouts-5a7d1",
  storageBucket: "shoutouts-5a7d1.appspot.com",
  messagingSenderId: "755867114999",
  appId: "1:755867114999:web:b77ac0afce0389bf5ae2f2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
export const storage = getStorage(app);
