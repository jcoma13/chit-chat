import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chit-chat-cb989.firebaseapp.com",
  projectId: "chit-chat-cb989",
  storageBucket: "chit-chat-cb989.appspot.com",
  messagingSenderId: "801808575817",
  appId: "1:801808575817:web:249b5145794a221413fe98"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()