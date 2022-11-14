// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore'
import { collection, query, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2dmebmshpzSMe5WtcY3s3WYA_VJx0Hgo",
  authDomain: "shumble-d1120.firebaseapp.com",
  projectId: "shumble-d1120",
  storageBucket: "shumble-d1120.appspot.com",
  messagingSenderId: "281765498798",
  appId: "1:281765498798:web:0834c8ffd22bfe0606423f",
  measurementId: "G-K6KK1RVVHV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
export { firestore }