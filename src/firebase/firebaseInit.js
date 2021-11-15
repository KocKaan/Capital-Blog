import firebase from "firebase/app";
import "firebase/firestore";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAArQp2Bt9VMQcrRh4bGtR2SyB_HVKJUhc",
  authDomain: "capitalblog-8d6a7.firebaseapp.com",
  projectId: "capitalblog-8d6a7",
  storageBucket: "capitalblog-8d6a7.appspot.com",
  messagingSenderId: "610176721913",
  appId: "1:610176721913:web:a7037fa45daa8ab1bdd328"
};


const firebaseApp= firebase.initializeApp(firebaseConfig); 
const timestamp= firebase.firestore.FieldValue.serverTimestamp;

//front end backend connection to firebase 
export{timestamp};
export default firebaseApp.firestore();
 