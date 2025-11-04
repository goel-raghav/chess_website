"use client"

import { useDroppable } from "@dnd-kit/core"
import { useState } from "react";

export default function Square(props: any){
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });

    const [over, setOver] =  useState(false)

    if (over != isOver) {
        setOver(!over)
    }

    
    const backgroundColor = props.isDark ? "bg-[#739552]" : "bg-[#EBECD0]"
    const border = over ? "border-6 border-white" : ""


    return (
        <div ref = {setNodeRef} className={ backgroundColor + " aspect-square " + border} >
            {props.children}
        </div>
    )
}
