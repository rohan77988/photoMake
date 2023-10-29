// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvg2QXfpLor7FK4im-RHaARTpNnEQKK-Y",
  authDomain: "react-food-db-57662.firebaseapp.com",
  projectId: "react-food-db-57662",
  storageBucket: "react-food-db-57662.appspot.com",
  messagingSenderId: "990912501849",
  appId: "1:990912501849:web:b7e98baceba4be58ec3948"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};