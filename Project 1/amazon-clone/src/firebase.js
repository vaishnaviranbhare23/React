import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBOOQsPWmmwEG_pTobyMgPIGTUVJME27eo",
  authDomain: "challenge-a98d4.firebaseapp.com",
  projectId: "challenge-a98d4",
  storageBucket: "challenge-a98d4.appspot.com",
  messagingSenderId: "919044025721",
  appId: "1:919044025721:web:b64f72956274a169f053a8",
  measurementId: "G-EF0V92FC03",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
