// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw9MVKOhbZ-8QeLUpX13osRbnVeqre4u0",
  authDomain: "disney-clone-5a283.firebaseapp.com",
  projectId: "disney-clone-5a283",
  storageBucket: "disney-clone-5a283.appspot.com",
  messagingSenderId: "430484016252",
  appId: "1:430484016252:web:e7c6cfb327dbb9bcf5cdf9",
  measurementId: "G-GWNMPSY8D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const authentication = getAuth(app);
const provider = new GoogleAuthProvider(app);
const storage = getStorage(app);

export { authentication, provider, storage };
export default database;
