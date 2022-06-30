interface propType {
    curColor : string,
    setColor : React.Dispatch<React.SetStateAction<string>>
}

const ColorPicker = (props : propType) => {
    const {curColor, setColor} = props;
    const pxlColors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'black', 'white'];

    return (
        <div className="w-fit flex flex-col justify-around rounded gap-3 border-slate-700 border-2 grow-0 h-max p-1 bg-slate-600">
            {
                pxlColors?.map((elem, index) => {
                    let classStr : string;
                    if(elem == 'black'){
                        classStr = elem === curColor ? `bg-black w-10 h-10 rounded-3xl hover:scale-110 border-2 border-white` : `bg-black w-10 h-10 rounded-3xl hover:scale-110`;
                    }
                    else if(elem == 'white'){
                        classStr = elem === curColor ? `bg-white w-10 h-10 rounded-3xl hover:scale-110 border-2 border-black` : `bg-white w-10 h-10 rounded-3xl hover:scale-110`;
                    }
                    else{
                        classStr = elem === curColor ? `bg-${elem}-600 w-10 h-10 rounded-3xl hover:scale-110 border-2 border-black` : `bg-${elem}-600 w-10 h-10 rounded-3xl hover:scale-110`;
                    }
                    return <div className={classStr} key={index} onClick={()=>{setColor(elem)}}></div>
                })
            }
            {/*
                tailwind doesnt support dynamic class names all colors have to be included using the following div 
            */}
            <div className="bg-violet-600 bg-indigo-600 bg-blue-600 bg-green-600 bg-yellow-600 bg-orange-600 bg-red-600 bg-black border-black border-white w-0 h-0 absolute hidden"></div>
        </div>
    )
}

export default ColorPicker;