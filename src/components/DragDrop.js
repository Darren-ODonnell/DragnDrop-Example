import React, {useState} from 'react';
import Picture from "./Picture";
import {useDrop} from "react-dnd";

const PictureList = [
    {
        id: 1,
        url : "https://cdn.maikoapp.com/3d4b/4quqa/150.jpg"
    },
    {
        id: 2,
        url : "https://cdn.maikoapp.com/3d4b/4r2dg/180h.jpg"
    },
    {
        id: 3,
        url : "https://cdn.maikoapp.com/3d4b/4qtwb/200x150.png"
    },
]

function DragDrop() {

    const [board, setBoard] = useState([
        {
            id: 3,
            url : "https://cdn.maikoapp.com/3d4b/4qtwb/200x150.png"
        }
    ]);

    const [{isOver}, drop] = useDrop(() => ({
        accept:"image",
        drop: (item) => addImageToBoard(item.id),
        collect: ( monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        console.log(id)
    }
    return (
        <>
            <div className="Pictures">
                { PictureList.map((picture) => {
                    return <Picture url={picture.url} id={picture.id}/>;
                })}
            </div>
            <div className="Board">
                {board.map((picture)=>{
                    return <Picture url={picture.url} id={picture.id}/>;
                })}

            </div>
        </>
    )

}
export default DragDrop;