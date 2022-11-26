
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import{ getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAD6s0lVp8N7iqTqQIrHlmIEndj6S5efck",
  authDomain: "aula15-2cd4d.firebaseapp.com",
  projectId: "aula15-2cd4d",
  storageBucket: "aula15-2cd4d.appspot.com",
  messagingSenderId: "693611484097",
  appId: "1:693611484097:web:34b91b1f0313e3ad381540",
  measurementId: "G-9ZD1YDM5GP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export{provider, database};