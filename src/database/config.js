import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDHlGPFrzqUltPs4DQ9-bXT0h7W9F8cyAs",
    authDomain: "photowall-7ce5f.firebaseapp.com",
    databaseURL: "https://photowall-7ce5f-default-rtdb.firebaseio.com",
    projectId: "photowall-7ce5f",
    storageBucket: "photowall-7ce5f.appspot.com",
    messagingSenderId: "201505911522",
    appId: "1:201505911522:web:525ccc247e798a902224bb"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { database }