import {
    NextApiResponse,
    NextApiRequest,
} from 'next/dist/shared/lib/utils';
import {FirebaseApp, initializeApp} from 'firebase/app';
import {Firestore, getFirestore, collection, getDocs, QueryDocumentSnapshot, DocumentData} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJ_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURE_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let docObjectArray : DocumentData[];
    getDocs(collection(db, 'pixelData')).then((querySnapshot) => {
        const d : QueryDocumentSnapshot[] = querySnapshot.docs; 
        return d;
    })
    .then((docArray) => {
        docObjectArray = Array.from(docArray).map((doc)=>{
            return doc.data();
        });
    })
    .finally(()=>{
        res.status(200).json(docObjectArray);
    });
};

export default handler;
