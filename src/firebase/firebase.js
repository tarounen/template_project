import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyD6YDe3birheJqEhdjCy8tXdJTSNl-dGPQ",
	authDomain: "template-23.firebaseapp.com",
	databaseURL: "https://template-23.firebaseio.com",
	projectId: "template-23",
	storageBucket: "template-23.appspot.com",
	messagingSenderId: "971245400466",
	appId: "1:971245400466:web:1405300286d7d5db58514b"
};

var firebaseapp = firebase.initializeApp(config)

export default firebaseapp;