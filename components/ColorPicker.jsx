const ColorPicker = (props) => {
    const {curColor, setColor} = props;
    const pxlColors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

    return (
        <div className="w-fit flex flex-row justify-around rounded gap-3 border-slate-700 border-2 grow-0 h-max p-1 absolute bottom-2">
            <div className={`w-10 h-10 rounded-3xl bg-${curColor}-600 border-3 border-black`}></div>
            <div className="w-1 h-10 bg-black p-0"></div>
            {
                pxlColors?.map((elem, index) => {
                    return <div className={`bg-${elem}-600 w-10 h-10 rounded-3xl hover:scale-110`} key={index} onClick={()=>{setColor(elem)}}></div>
                })
            } 
        </div>
    )
}

export default ColorPicker;