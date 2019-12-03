import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBHmCtbYlaLTp_bjijsqSkj20iRRCOuvXk",
    authDomain: "macclothingdb.firebaseapp.com",
    databaseURL: "https://macclothingdb.firebaseio.com",
    projectId: "macclothingdb",
    storageBucket: "macclothingdb.appspot.com",
    messagingSenderId: "580392226114",
    appId: "1:580392226114:web:7373f0720ceb9615764cdb",
    measurementId: "G-KF3LM6R1M4"
  };

  firebase.initializeApp(config);
  

  export const auth = firebase.auth();
  export const firestotre = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase; 