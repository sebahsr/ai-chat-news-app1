import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGN7hcd4U84yN_b1cm1I6RDh8tI31fdHU",
    authDomain: "ai-news-dddc5.firebaseapp.com",
    projectId: "ai-news-dddc5",
    storageBucket: "ai-news-dddc5.firebasestorage.app",
    messagingSenderId: "338447238232",
    appId: "1:338447238232:web:a0a8184f4a66ca27d6362d",
    measurementId: "G-BJBRTTK2T5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
