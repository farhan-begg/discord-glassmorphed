import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3aQcsGZyV818TWFcqjbgywFdFSbIszWI",
    authDomain: "discord-651cd.firebaseapp.com",
    projectId: "discord-651cd",
    storageBucket: "discord-651cd.appspot.com",
    messagingSenderId: "1082402231093",
    appId: "1:1082402231093:web:acf9364f8e61693960b27c",
    measurementId: "G-S23D95G6GP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;