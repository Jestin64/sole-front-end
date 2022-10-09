// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY8c-4o1ImosMLJo69LWYLhys4sEqaxaI",
  authDomain: "sole-e734b.firebaseapp.com",
  databaseURL: "https://sole-e734b-default-rtdb.firebaseio.com",
  projectId: "sole-e734b",
  storageBucket: "sole-e734b.appspot.com",
  messagingSenderId: "810116537597",
  appId: "1:810116537597:web:bbdef48498c4871cd93294",
  measurementId: "G-TRXZCTKH9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {app , analytics , storage} ;