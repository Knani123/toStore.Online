import firebase from "firebase";

var firebaseConfig = {
     apiKey: "AIzaSyCsuMtrMP94YZthOlmzXY56S833B9wRwZc",
     authDomain: "tostore-beba5.firebaseapp.com",
     projectId: "tostore-beba5",
     storageBucket: "tostore-beba5.appspot.com",
     messagingSenderId: "727856367381",
     appId: "1:727856367381:web:868f09960ed903004d0b1c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
