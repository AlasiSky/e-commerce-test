import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBXJNmMXZNtjZgKUj4r9hkBTSZxAILrVw",
    authDomain: "e-commerce-26027.firebaseapp.com",
    databaseURL: "https://e-commerce-26027.firebaseio.com",
    projectId: "e-commerce-26027",
    storageBucket: "e-commerce-26027.appspot.com",
    messagingSenderId: "386097412451",
    appId: "1:386097412451:web:70ac4bacaa6dfc23473b56",
    measurementId: "G-15MQG1LFHB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;