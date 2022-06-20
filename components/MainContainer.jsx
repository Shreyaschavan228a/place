import { useState } from "react";

import ColorPicker from "./ColorPicker";

const MainContainer = () => {
    const [color, setColor] = useState('red')

    return (
        <div className="w-full grow bg-slate-50 flex justify-around align-center">
            <ColorPicker curColor={color} setColor={setColor}/>
        </div>
    )
}

export default MainContainer;