import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDW2mKZntzrDJ5LjVuOYEGcX2-8h2jIgiw",
    authDomain: "react-node-mysql.firebaseapp.com",
    databaseURL: "https://react-node-mysql.firebaseio.com",
    projectId: "react-node-mysql",
    storageBucket: "react-node-mysql.appspot.com",
    messagingSenderId: "786987374545",
    appId: "1:786987374545:web:d471b11e58b73571cff2f0"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;