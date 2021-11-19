import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const REACT_APP_API_KEY = "AIzaSyCJIBVEb0CFLiAZvhfdTC_f01lV-e1AXv4";
const REACT_APP_AUTH_DOMAIN = "projectiroom.firebaseapp.com";
const REACT_APP_PROJECT_ID = "projectiroom";
const REACT_APP_STORAGE_BUCKET = "projectiroom.appspot.com";
const REACT_APP_MESSAGIN_ID = "604502600838";
const REACT_APP_APP_ID = "1:604502600838:web:f32400cf308443bbbbf507";
const REACT_APP_MEASUR_ID = "G-XLFX34N8KT";

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGIN_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUR_ID,
};

initializeApp(firebaseConfig);

export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();
