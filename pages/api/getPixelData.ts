import {
    NextApiResponse,
    NextApiRequest,
} from 'next/dist/shared/lib/utils';
import {FirebaseApp, initializeApp} from 'firebase/app';
import {Firestore, getFirestore, collection, getDocs, QueryDocumentSnapshot, DocumentData, QuerySnapshot} from 'firebase/firestore';



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
    const docQuerySnapshot : QuerySnapshot = await getDocs(collection(db, 'pixelData'));
    const documentSnapshotData : QueryDocumentSnapshot[] = docQuerySnapshot.docs;
    const documentObjectArray : DocumentData[]= Array.from(documentSnapshotData).map((doc) => {
        return doc.data();
    });

    return res.status(200).json(documentObjectArray);
};

export default handler;
