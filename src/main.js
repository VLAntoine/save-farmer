import {createApp} from "vue";
import { initializeApp } from "firebase/app";
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

initializeApp(firebaseConfig);


createApp(App).mount("#app")
