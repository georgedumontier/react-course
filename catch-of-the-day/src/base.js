import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCk_T5_6fSVPzdC5aS5iVXYfCCFw8cO1oM",
  authDomain: "catch-of-the-day-c5b6a.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-c5b6a.firebaseio.com",
  projectId: "catch-of-the-day-c5b6a",
  storageBucket: "catch-of-the-day-c5b6a.appspot.com",
  messagingSenderId: "70806389047"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
