import firebase from 'firebase/app';
import "firebase/database";

let config = {
    apiKey: "AIzaSyD5K2xO2MrMrQUKo4Yqd2rjDGELPSenAlA",
    authDomain: "proyecto-c8722.firebaseapp.com",
    projectId: "proyecto-c8722",
    storageBucket: "proyecto-c8722.appspot.com",
    messagingSenderId: "685745405902",
    appId: "1:685745405902:web:7948dddcdadcf2d40c359f",
    measurementId: "G-Z6HR4NQ9EB"
};

firebase.initializeApp(config);

export default firebase.database();

