import { NextApiRequest, NextApiResponse} from "next";
import { initializeApp } from "firebase/app";
import { getDatabase, update, ref} from "firebase/database";
import firebaseConfig from "../../firebaseConfig";


const app = initializeApp(firebaseConfig, 'db-post');
const db = getDatabase(app);


const handler = async (req : NextApiRequest, res : NextApiResponse) => {
    /*
        req.body = {
            x: number,
            y: number,
            curColor: string
        }
    */
    const index = req.body.y * 30 + req.body.x;
    const updates = {};
    updates['/pixelData/' + index] = req.body.curColor;
    update(ref(db), updates).finally(() => {
        console.log(`color updated at pixel ${index}`);
    });
    return res.status(200).send(`color updated at pixel ${index}`);
}

export default handler;