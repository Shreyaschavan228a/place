import canvasHelper from "../lib/canvasHelper";
import React, { useRef, useEffect } from "react";
import firebaseHelper from "../lib/firebaseHelper"
interface propType {
    curColor : string,
}


const PlaceCanvas = (props : propType) => {
    const {curColor} = props;
    const canvasRef = useRef(null);

    useEffect(() => {
        canvasHelper.initCanvas(canvasRef.current!, 750, 750);
        firebaseHelper.getData(canvasHelper.drawNewCanvas);
    }, []);

    const handleClick = (e : React.MouseEvent) => {
        canvasHelper.colorBlock(e, curColor);
        const {x, y} = canvasHelper.getPixelCoordinates(e);
        fetch('/api/addPixelData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({x, y, curColor}),
        }).then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
    }

    return (
        <div>
            <canvas width="750px" height="750px" ref={canvasRef} className="m-6" onClick={(e) => {handleClick(e)}}></canvas>
        </div>
    )
}

export default PlaceCanvas;