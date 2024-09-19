import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import dotenv from "dotenv";
dotenv.config();

if (
  !process.env.API_KEY ||
  !process.env.AUTH_DOMAIN ||
  !process.env.PROJECT_ID ||
  !process.env.STORAGE_BUCKET ||
  !process.env.MESSAGING_SENDER_ID ||
  !process.env.APP_ID
) {
  console.error("Could not find .env vars for firebase config");
}

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
