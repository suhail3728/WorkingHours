// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYRga-LYy5Sdd5TrQp3xfldLl2huZxjdU",
    authDomain: "workinghours-58937.firebaseapp.com",
    projectId: "workinghours-58937",
    storageBucket: "workinghours-58937.appspot.com",
    messagingSenderId: "225862172834",
    appId: "1:225862172834:web:99c727588d10a984c0d7fb",
    measurementId: "G-Z679KXH343"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
const analytics = getAnalytics(app);

export{app, auth}