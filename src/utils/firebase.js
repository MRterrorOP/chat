// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmwF8vD-ll6TCD535lU9ONESp91d8J9-0",
  authDomain: "firstproject-b7783.firebaseapp.com",
  projectId: "firstproject-b7783",
  storageBucket: "firstproject-b7783.appspot.com",
  messagingSenderId: "818727816660",
  appId: "1:818727816660:web:2a5b3bfe6f94bd9bd31a41",
  databaseURL: "https://firstproject-b7783-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, app };
