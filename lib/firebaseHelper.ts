import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, DatabaseReference, getDatabase, onValue, ref } from "firebase/database"
import React, { SetStateAction } from "react";
import firebaseConfig from "../firebaseConfig.js";


const FirebaseHelper = () => {

    const _app : FirebaseApp = initializeApp(firebaseConfig, 'db-test');
    const _database : Database = getDatabase(_app);
    const _pixelDataRef : DatabaseReference= ref(_database, 'pixelData/')

    const getData = async (callback : Function) => {
        onValue(_pixelDataRef, (snap) => {
            const data = snap.val();
            callback(data);
        });
    }

    return {getData};
}

const firebaseHelper = FirebaseHelper();

export default firebaseHelper;