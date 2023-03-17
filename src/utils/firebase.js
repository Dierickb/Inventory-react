import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyDyJDz6Jc4tQ9bit4eOKADSBfW4OoUGKMw",
    authDomain: "spare-management-ce92a.firebaseapp.com",
    projectId: "spare-management-ce92a",
    storageBucket: "spare-management-ce92a.appspot.com",
    messagingSenderId: "933101436022",
    appId: "1:933101436022:web:76ef863811a778e695f357",
    measurementId: "G-7GDCXHJDCZ"
};
export const initFirebase = initializeApp(firebaseConfig)

export const firestore = getFirestore(initFirebase)