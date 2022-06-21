import canvasHelper from "../lib/canvasHelper";
import { useRef, useEffect } from "react";

const PlaceCanvas = (props) => {
    const {curColor} = props;
    const canvasRef = useRef(null);

    useEffect(() => {
        canvasHelper.initCanvas(canvasRef.current, 750, 750);
    }, []);
    return (
        <div>
            <canvas width="750px" height="750px" ref={canvasRef} className="m-6" onClick={(e) => canvasHelper.colorBlock(e, curColor)}></canvas>
        </div>
    )
}

export default PlaceCanvas;