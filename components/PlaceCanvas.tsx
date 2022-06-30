import canvasHelper from "../lib/canvasHelper";
import { useRef, useEffect } from "react";
import firebaseHelper from "../lib/firebaseHelper"
interface propType {
    curColor : string,
}


const PlaceCanvas = (props : propType) => {
    const {curColor} = props;
    const canvasRef = useRef(null);

    useEffect(() => {
        firebaseHelper.getData(initializeCanvas);
    }, []);

    const  initializeCanvas = (pixelData) => {
        canvasHelper.initCanvas(canvasRef.current!, 750, 750, pixelData);
    }

    return (
        <div>
            <canvas width="750px" height="750px" ref={canvasRef} className="m-6" onClick={(e) => canvasHelper.colorBlock(e, curColor)}></canvas>
        </div>
    )
}

export default PlaceCanvas;