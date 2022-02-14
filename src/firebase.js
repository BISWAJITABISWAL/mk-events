import { initializeApp , getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCLz6hBhLmTl_gfF41z9JkDp5Fkvx5mrKs",
  authDomain: "mk-events.firebaseapp.com",
  projectId: "mk-events",
  storageBucket: "mk-events.appspot.com",
  messagingSenderId: "896742282736",
  appId: "1:896742282736:web:d87919d34a05f5f416f935",
  measurementId: "G-BXH5467HFL",
};

var app;
if(!getApps.length) {
  app = initializeApp(firebaseConfig); 
}
const db = getFirestore(app);

export default db;