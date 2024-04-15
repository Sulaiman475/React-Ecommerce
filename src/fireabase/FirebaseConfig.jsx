
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXSoX2Hzel3GUvuakG_aAfK__AVu2pmhw",
  authDomain: "ecommerce-react-b3ab6.firebaseapp.com",
  projectId: "ecommerce-react-b3ab6",
  storageBucket: "ecommerce-react-b3ab6.appspot.com",
  messagingSenderId: "932237099956",
  appId: "1:932237099956:web:d6ad4146dba92830d7e8e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
