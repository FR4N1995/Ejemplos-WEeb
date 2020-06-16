import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA14lBII2VPZ7wY-8VhsQCDrVQNj0Rl9kw",
    authDomain: "proyecto-vue-639f8.firebaseapp.com",
    databaseURL: "https://proyecto-vue-639f8.firebaseio.com",
    projectId: "proyecto-vue-639f8",
    storageBucket: "proyecto-vue-639f8.appspot.com",
    messagingSenderId: "129665969104",
    appId: "1:129665969104:web:8ba86a3aa27fa507b527d5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export { db }