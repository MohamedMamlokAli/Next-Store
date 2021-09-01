// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB861Hsg-leSTbIaEmuMEthXnD8nuNbevo',
  authDomain: 'nextstore-86ca2.firebaseapp.com',
  projectId: 'nextstore-86ca2',
  storageBucket: 'nextstore-86ca2.appspot.com',
  messagingSenderId: '815648902369',
  appId: '1:815648902369:web:34bbb38067d080bfe6fba0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();
export const testSignUp = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((UserCredential) => {
      console.log('created and signed in');
      console.log(UserCredential.user);
    })
    .catch((err) => console.log(err.message));
export const testSignOut = () =>
  signOut(auth).then(() => console.log('user Signed out'));

export const testSignIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
