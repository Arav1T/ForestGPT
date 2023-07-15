// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import  {getFireStore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPXsvSDmkE3N00ULy0_lKrML8HBwoRgvU",
  authDomain: "reactresoluteai.firebaseapp.com",
  databaseURL: "https://reactresoluteai-default-rtdb.firebaseio.com",
  projectId: "reactresoluteai",
  storageBucket: "reactresoluteai.appspot.com",
  messagingSenderId: "1013305785788",
  appId: "1:1013305785788:web:6f7895aec4a839b8b87fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth();
// const bd=getFireStore(app)
export {app,auth}