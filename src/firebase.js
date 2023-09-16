import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7asUQZj22LcNBAzLr-7iESPapTsycBGE",
  authDomain: "proyecto-react-2.firebaseapp.com",
  projectId: "proyecto-react-2",
  storageBucket: "proyecto-react-2.appspot.com",
  messagingSenderId: "73416492659",
  appId: "1:73416492659:web:160747a906f1b79af34c06"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


