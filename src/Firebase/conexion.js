 // Initialize Firebase
 import {initializeApp  } from "firebase";
 const app = initializeApp ({
    apiKey: "AIzaSyCt3mRnncuAu3A0hi2yxxyGEFwX7hBioZ4",
    authDomain: "redsocialv2.firebaseapp.com",
    databaseURL: "https://redsocialv2.firebaseio.com",
    projectId: "redsocialv2",
    storageBucket: "redsocialv2.appspot.com",
    messagingSenderId: "318300408911"
  });

  export const db = app.database();
  export const namesRef = db.ref('names');
  