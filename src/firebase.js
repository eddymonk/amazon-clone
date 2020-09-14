import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDofZCsxZG5OmbAgfe9FDuMt9KJW4a4RE0",
  authDomain: "fir-68a22.firebaseapp.com",
  databaseURL: "https://fir-68a22.firebaseio.com",
  projectId: "fir-68a22",
  storageBucket: "fir-68a22.appspot.com",
  messagingSenderId: "686612264883",
  appId: "1:686612264883:web:43353db59e1558ce5d7dc6",
  measurementId: "G-L2LMXVTS0Y"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};