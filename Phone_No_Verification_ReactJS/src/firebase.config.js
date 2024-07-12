import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkczvubLEAGxSQmnHQMIe-BpTM4yDQtmM",
  authDomain: "phone-no-verification-e5edf.firebaseapp.com",
  projectId: "phone-no-verification-e5edf",
  storageBucket: "phone-no-verification-e5edf.appspot.com",
  messagingSenderId: "895757225686",
  appId: "1:895757225686:web:c08229fd9b3716a8960377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
