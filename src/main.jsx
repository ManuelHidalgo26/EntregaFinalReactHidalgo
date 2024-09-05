import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAj-RCEqBqKw6wM_9Nx5NjHrjqjhi6roh0",
  authDomain: "gran-burga.firebaseapp.com",
  projectId: "gran-burga",
  storageBucket: "gran-burga.appspot.com",
  messagingSenderId: "986487301719",
  appId: "1:986487301719:web:ed1493c55f41e4357ea512"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
