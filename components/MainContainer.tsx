import { useState } from "react";
import PlaceCanvas from "./PlaceCanvas";
import ColorPicker from "./ColorPicker";

const MainContainer = () => {
    const [color, setColor] = useState('red')

    return (
        <div className="w-full grow bg-slate-50 flex flex-row items-center justify-center">
            <PlaceCanvas curColor={color}/>
            <ColorPicker curColor={color} setColor={setColor}/>
        </div>
    )
}

export default MainContainer;