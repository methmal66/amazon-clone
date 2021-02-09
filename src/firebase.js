import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQkGmbm_m07OJ2XZYyEN2mWVFHkDWWjTQ",
  authDomain: "clone-86e2a.firebaseapp.com",
  projectId: "clone-86e2a",
  storageBucket: "clone-86e2a.appspot.com",
  messagingSenderId: "54398161289",
  appId: "1:54398161289:web:7d53de430ab1d480a79158",
  measurementId: "G-EJ003TBC13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage, auth };
