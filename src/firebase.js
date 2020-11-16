import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyARZ0Q1G6NmUj7qrcFbUpV7iofaZxwa-JA",
    authDomain: "clone-35704.firebaseapp.com",
    databaseURL: "https://clone-35704.firebaseio.com",
    projectId: "clone-35704",
    storageBucket: "clone-35704.appspot.com",
    messagingSenderId: "1045188486677",
    appId: "1:1045188486677:web:f03a8198f8386c49ea901c",
    measurementId: "G-JQZJBXTXXN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db,auth };