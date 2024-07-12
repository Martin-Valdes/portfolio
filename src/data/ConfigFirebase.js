import { initializeApp } from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBHez1EU5sxAtwIb6bQLUlpEb0Kvm8Vnv0",
  authDomain: "portfolio-47d85.firebaseapp.com",
  projectId: "portfolio-47d85",
  storageBucket: "portfolio-47d85.appspot.com",
  messagingSenderId: "1015465476877",
  appId: "1:1015465476877:web:40cf66a3fbdfa7b431a644",
  
};


const appFirebase = initializeApp(firebaseConfig);

export default appFirebase

