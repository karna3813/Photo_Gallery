import firebase from "firebase";
import "firebase/auth";


const app = firebase.initializeApp( {
  apiKey: "AIzaSyDiJl3Xr3x4YPhrOsGlXSI9xRl8sbWSyzk",
  authDomain: "login-signup-cf920.firebaseapp.com",
  projectId: "login-signup-cf920",
  storageBucket: "login-signup-cf920.appspot.com",
  messagingSenderId: "457320331209",
  appId: "1:457320331209:web:e6eba5e58c4054263e1a18",
  measurementId: "G-76PM2SK3E9"
});

export default app  