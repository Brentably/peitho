// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe4Q9gSkRPZhNAZdy5secgdMev5AL3bFk",
  authDomain: "peitho-adee3.firebaseapp.com",
  projectId: "peitho-adee3",
  storageBucket: "peitho-adee3.appspot.com",
  messagingSenderId: "342054203967",
  appId: "1:342054203967:web:277b0cdb11e6ce70d3fe8a",
  measurementId: "G-S6SSZ48B5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app