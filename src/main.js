import {createApp} from "vue";
import { initializeApp } from "firebase/app";
import {getDatabase, connectDatabaseEmulator} from "firebase/database";
import {getAuth, connectAuthEmulator} from "firebase/auth"
import {getFunctions, connectFunctionsEmulator} from "firebase/functions"
import App from "@/App";

const firebaseConfig = {
    apiKey: "AIzaSyAW1qSUt4WfHRJjRp_RpqkbRo10h-oRRgA",
    authDomain: "save-farmer-64703.firebaseapp.com",
    databaseURL: "https://save-farmer-64703-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "save-farmer-64703",
    storageBucket: "save-farmer-64703.appspot.com",
    messagingSenderId: "1093027516486",
    appId: "1:1093027516486:web:084bd87e4c2846519d7a47",
    measurementId: "G-G30HVVYYEH"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);
const functions = getFunctions(app);

connectDatabaseEmulator(db, "localhost", 9000);
connectAuthEmulator(auth, "localhost");
connectFunctionsEmulator(functions, "localhost", 5001);

createApp(App).mount("#app")
