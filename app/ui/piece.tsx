"use client"

import {useDraggable} from "@dnd-kit/core"

const PIECE_SRC = {
    "bp": "/bP.svg",
    "bb": "/bB.svg",
    "bn": "/bN.svg",
    "bk": "/bK.svg",
    "bq": "/bQ.svg",
    "br": "/bR.svg",
    "wp": "/wP.svg",
    "wb": "/wB.svg",
    "wn": "/wN.svg",
    "wk": "/wK.svg",
    "wq": "/wQ.svg",
    "wr": "/wR.svg"
    }


    interface PieceProps {
        square: string
        piece: string
    }

export default function Piece({square, piece}: PieceProps){
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
    id: square + piece,
    });

    const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    const cursor = isDragging ? "cursor-grabbing": ""

    return (
        <div 
            className={"bg-contain bg-center bg-no-repeat w-full h-full hover:cursor-grab " + cursor}
            ref={setNodeRef} {...listeners} {...attributes} 
            style={{...style, backgroundImage: `url(${PIECE_SRC[piece]})`}}/>
    )
}
