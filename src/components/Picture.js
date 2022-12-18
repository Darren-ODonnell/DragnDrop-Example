import React from "react";
import {useDrag} from "react-dnd";


function Picture({id, url}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type:"image",
        item: {id: id},
        collect: ( monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <img ref={drag}
            src={url} id={id} width="150px" height="200px"  alt="Cannot display"
        style={{border: isDragging ? "5px solid pink" : "0px"}}/>
    )
}
export default Picture;

