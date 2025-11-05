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
    const circle = <div className="w-1/3 h-1/3 border rounded-full bg-black opacity-25"></div>
    


    return (
        <div ref = {setNodeRef} className={`${backgroundColor} ${border} justify-center items-center flex`}>
            {props.isMoveable ? circle: undefined}
            {props.children}
        </div>
    )
}
