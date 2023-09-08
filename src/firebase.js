import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL3Wn19tLZJO7Fokjiq4Ie_tUryaOriro",
  authDomain: "proyecto-react-8c758.firebaseapp.com",
  projectId: "proyecto-react-8c758",
  storageBucket: "proyecto-react-8c758.appspot.com",
  messagingSenderId: "1029817803923",
  appId: "1:1029817803923:web:1d17101a82c38813489966"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);