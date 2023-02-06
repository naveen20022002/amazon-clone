// import { firebase } from 'firebase';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// import firebase from "firebase";
// // In new firebase version, these two new imports are also necessary
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBadHLjqcDfBzeMD9KZTGnVuvyvgP9I1c",
    authDomain: "clone-31e8f.firebaseapp.com",
    projectId: "clone-31e8f",
    storageBucket: "clone-31e8f.appspot.com",
    messagingSenderId: "317241241362",
    appId: "1:317241241362:web:4ed56b6b16395199340dcb",
    measurementId: "G-6ZSQ6VG14R"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig)
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app)

  export {db, auth};