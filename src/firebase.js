// import {initializeApp} from "firebase/compat/app";

import {initializeApp}  from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

let firebaseConfig = {
    apiKey: "AIzaSyAD4yC6kAeesjnZri2TqZSBnqRxXd3E60M",
    authDomain: "new-satya.firebaseapp.com",
    projectId: "new-satya",
    storageBucket: "new-satya.appspot.com",
    messagingSenderId: "362179687252",
    appId: "1:362179687252:web:994ceac570775ab5884ec1",
    databaseURL:"https://console.firebase.google.com/project/new-satya/database/new-satya-default-rtdb/data/~2F"
};
 const appFirebase = initializeApp(firebaseConfig);

  export default appFirebase;