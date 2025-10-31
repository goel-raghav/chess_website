"use client"

import {useDraggable} from "@dnd-kit/core"

export default function Piece(props:any){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
    });

    const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

    const className = "bg-[url(/black_bishop.png)] bg-contain bg-center bg-no-repeat w-full h-full"

    return (
        <div className={className} ref={setNodeRef} {...listeners} {...attributes} style={style}></div>
    )
}
