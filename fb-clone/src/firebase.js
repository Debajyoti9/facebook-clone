import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCwD2rTifOUZ1KfkijcQzk6sN7r6zmTO2Q",
    authDomain: "facebook-clone-62db3.firebaseapp.com",
    databaseURL: "https://facebook-clone-62db3.firebaseio.com",
    projectId: "facebook-clone-62db3",
    storageBucket: "facebook-clone-62db3.appspot.com",
    messagingSenderId: "337792646384",
    appId: "1:337792646384:web:f9b5ed8e206323d86dd635",
    measurementId: "G-EDKJ08BVN0"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);//connect to the backend
  const db = firebaseApp.firestore();//access to the database
  const auth = firebase.auth();//it allow us to user authentication like login in sign in 
  const provider = new firebase.auth.GoogleAuthProvider();//It tell firebase thet wewant google login kind of stuff
  
  export { auth, provider };//explicit export
  export default db;
