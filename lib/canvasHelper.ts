interface coordinate {
    x: number,
    y: number
}

const CanvasHelper = () => {
    const _pixelSize = 25;
    let _canvasContext : CanvasRenderingContext2D;
    let _pixelData : string[][];
    let _canvasElem : HTMLCanvasElement;
    const _colors = {
            violet : "#7c3aed",
            indigo : "#4f46ef",
            blue : "#2563eb",
            green : "#16a34a",
            yellow : "#ca8a04",
            orange : "#ea580c",
            red : "#dc2626",
            black : "#000000",
            white : "#ffffff"
    }

    const _getMousePos = (clickEvent : React.MouseEvent) : coordinate => {
        const rect = _canvasElem.getBoundingClientRect();
        return {
            x: clickEvent.clientX - rect.left,
            y: clickEvent.clientY - rect.top
        }
    }

    const drawNewCanvas = (fetchedData : string[]) => {
        fetchedData.forEach((pixelObj, index) => {
        //index = 30*y+x
            const [y, x] = [Math.floor(index/30), index%30];
            if(pixelObj !== _pixelData[y][x]){
                _canvasContext.fillStyle = _colors[pixelObj];
                _canvasContext.fillRect(x*_pixelSize, y*_pixelSize, _pixelSize, _pixelSize);
                _pixelData[y][x] = pixelObj;
            }
        });
    }
    const initCanvas = (canvasElemRef : HTMLCanvasElement, width : number, height : number) => {
        _canvasContext = canvasElemRef.getContext("2d")!;
        _canvasContext.fillStyle = "#000";
        _canvasContext.fillRect(0, 0, width, height);
        _canvasElem = canvasElemRef;
        
        _pixelData = new Array(height/_pixelSize);
        for(let i = 0; i < _pixelData.length; i++){
            let tmpArr = new Array(width/_pixelSize).fill('black');
            _pixelData[i] = tmpArr;
        }


    }

    const colorBlock = (clickEvent : React.MouseEvent, colorName : string) => {
        let {x, y} = _getMousePos(clickEvent);
        [x,y] = [Math.floor(x/_pixelSize)*_pixelSize, Math.floor(y/_pixelSize)*_pixelSize];
        _canvasContext.fillStyle = _colors[colorName];
        _canvasContext.fillRect(x, y, _pixelSize, _pixelSize);

        _pixelData[x/_pixelSize][y/_pixelSize] = colorName;
    }

    return {initCanvas, colorBlock, drawNewCanvas};
}

const canvasHelper = CanvasHelper();

export default canvasHelper; 