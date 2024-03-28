
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAaQjyqvLlnBAOQRfvQ3CB8aumxGAYyYgk",
  authDomain: "home-46c6e.firebaseapp.com",
  projectId: "home-46c6e",
  storageBucket: "home-46c6e.appspot.com",
  messagingSenderId: "951131190061",
  appId: "1:951131190061:web:866c997e9198e8fb4919a4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

export const ml=getFirestore(app)