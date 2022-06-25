const CanvasHelper = () => {
    let _canvasContext = null;
    const _pixelSize = 25;
    let _pixelData = null;

    const _colors = {
        violet : "#7c3aed",
        indigo : "#4f46ef",
        blue : "#2563eb",
        green : "#16a34a",
        yellow : "#ca8a04",
        orange : "#ea580c",
        red : "#dc2626"
    }
    let _canvasElem = null;
    const _getMousePos = (clickEvent) => {
        const rect = _canvasElem.getBoundingClientRect();
        return {
            x: clickEvent.clientX - rect.left,
            y: clickEvent.clientY - rect.top
        }
    }

    const initCanvas = (canvasElemRef, width, height) => {
        _canvasContext = canvasElemRef.getContext('2d');
        _canvasContext.fillStyle = "#000";
        _canvasContext.fillRect(0, 0, width, height);
        _canvasElem = canvasElemRef;

        _pixelData = new Array(height/_pixelSize);
        for(let i = 0; i < _pixelData.length; i++){
            let tmpArr = new Array(width/_pixelSize).fill(0);
            _pixelData[i] = tmpArr;
        }
    }

    const colorBlock = (clickEvent, colorName) => {
        const {x, y} = _getMousePos(clickEvent);
        [x,y] = [Math.floor(x/_pixelSize)*_pixelSize, Math.floor(y/_pixelSize)*_pixelSize];
        _canvasContext.fillStyle = _colors[colorName];
        _canvasContext.fillRect(x, y, _pixelSize, _pixelSize);

        _pixelData[x/_pixelSize][y/_pixelSize] = colorName;
    }

    return {initCanvas, colorBlock};
}

const canvasHelper = CanvasHelper();

export default canvasHelper;