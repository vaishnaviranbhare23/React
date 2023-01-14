import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDb6ay_vj-k6is6QWMI-XMvXsyvE0C7AY4",
  authDomain: "whatsapp-mern-ea76e.firebaseapp.com",
  projectId: "whatsapp-mern-ea76e",
  storageBucket: "whatsapp-mern-ea76e.appspot.com",
  messagingSenderId: "280586657184",
  appId: "1:280586657184:web:ef208336838771413358c5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
