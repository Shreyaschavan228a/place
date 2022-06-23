const ColorPicker = (props) => {
    const {curColor, setColor} = props;
    const pxlColors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

    return (
        <div className="w-fit flex flex-col justify-around rounded gap-3 border-slate-700 border-2 grow-0 h-max p-1 bg-slate-300">
            {
                pxlColors?.map((elem, index) => {
                    const classStr = elem === curColor ? `bg-${elem}-600 w-10 h-10 rounded-3xl hover:scale-110 border-2 border-black` : `bg-${elem}-600 w-10 h-10 rounded-3xl hover:scale-110`;
                    return <div className={classStr} key={index} onClick={()=>{setColor(elem)}}></div>
                })
            }
            {/*
                tailwind doesnt support dynamic class names all colors have to be included using the following div 
            */}
            <div className="bg-violet-600 bg-indigo-600 bg-blue-600 bg-green-600 bg-yellow-600 bg-orange-600 bg-red-600 w-0 h-0 absolute hidden"></div>
        </div>
    )
}

export default ColorPicker;