import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA31FsDoIsBL5uuQDkxu4TTj5tt10ncbaU",
  authDomain: "digilocker-blockchain.firebaseapp.com",
  projectId: "digilocker-blockchain",
  storageBucket: "digilocker-blockchain.appspot.com",
  messagingSenderId: "344088498537",
  appId: "1:344088498537:web:587bf98438a897cb57edf8",
  measurementId: "G-LVL9EK4R9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);