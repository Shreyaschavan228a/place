import canvasHelper from "../lib/canvasHelper";
import { useRef, useEffect } from "react";

interface propType {
    curColor : string,
}


const PlaceCanvas = (props : propType) => {
    const {curColor} = props;
    const canvasRef = useRef(null);

    useEffect(() => {
        fetch('/api/getPixelData')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            canvasHelper.initCanvas(canvasRef.current!, 750, 750, result);
            return result;
        })
        .finally(()=>{
            console.log(process.env.FIREBASE_API_KEY);
        })
    }, []);

    return (
        <div>
            <canvas width="750px" height="750px" ref={canvasRef} className="m-6" onClick={(e) => canvasHelper.colorBlock(e, curColor)}></canvas>
        </div>
    )
}

export default PlaceCanvas;