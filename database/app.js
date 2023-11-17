import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBwuDHc3ux8yfeeZ3p1twn-TNPHVKn4arc",
    authDomain: "my-todo-list-7555f.firebaseapp.com",
    projectId: "my-todo-list-7555f",
    storageBucket: "my-todo-list-7555f.appspot.com",
    messagingSenderId: "157602220126",
    appId: "1:157602220126:web:d28dca601b982cf7a28ccf",
    databaseURL: "https://my-todo-list-7555f-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
