import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBaS5G2ubcGLxmuBzj3ihr8TTIIQT-f7N8",
    authDomain: "drive-clone-259a1.firebaseapp.com",
    projectId: "drive-clone-259a1",
    storageBucket: "drive-clone-259a1.appspot.com",
    messagingSenderId: "1002690445174",
    appId: "1:1002690445174:web:de8ae6bc6b140673e74457"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export { auth, provider, db, storage}
