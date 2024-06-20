import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC5d2ECwJDfx5zdJK7gwQUGs2DEGKsU61o",
    authDomain: "hritik-veg-food.firebaseapp.com",
    projectId: "hritik-veg-food",
    storageBucket: "hritik-veg-food.appspot.com",
    messagingSenderId: "407604261788",
    appId: "1:407604261788:web:e3beadfdef292d00034e59",
    measurementId: "G-80NEJRV04V"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export {db, storage, auth, googleProvider}