import firebase from 'firebase'
import 'firebase/auth' 
import 'firebase/firestore'
import 'firebase/storage' 

const firebaseConfig = {
    apiKey: "AIzaSyBZE3U7Za4-YMqgodllMC-9JuCSYSgSzso",
    authDomain: "olx-clone-94ccb.firebaseapp.com",
    projectId: "olx-clone-94ccb",
    storageBucket: "olx-clone-94ccb.appspot.com",
    messagingSenderId: "92470351062",
    appId: "1:92470351062:web:aa7b8b2234cf0edc05a577",
    measurementId: "G-TN6T83LDB0"
};

export default firebase.initializeApp(firebaseConfig)
