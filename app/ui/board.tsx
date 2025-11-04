"use client"

import Piece from "./piece";
import Square from "./square";
import { DndContext } from "@dnd-kit/core";
import { Chess } from "chess.js"
import { useState } from "react";

export default function Board() {

  const [board, setBoard] = useState(new Chess())

  let squares = []
  const alpha = ["a", "b", "c", "d", "e", "f", "g", "h"]

  let boardObj = board.board()
  for (let row = 0; row < 8; row ++){
    for (let col = 0; col < 8; col++){
      const square = alpha[col] + ((8 - row))
      let piece = undefined
      const pieceInfo = boardObj[row][col]
      if (pieceInfo !== null) {
        const pieceType = pieceInfo["color"] + pieceInfo["type"]
        piece = <Piece square = {square} piece = {pieceType}></Piece>
      }


      squares.push(
        <Square key = {square} id = {square} isDark={(row + col) % 2 === 1}>
          {piece}
        </Square>
      )
    }
  }
  
  return (
      <DndContext id={"board"} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-8 grid-rows-8 overflow-hidden w-[800px] h-[800px]">
          {squares}
        </div>
      </DndContext>

  );

  function handleDragEnd(e: any){

    const {over, active} = e;
    
    const pieceSquare = active.id.slice(0, 2) // piece id is square + piece
    const squareOver = over.id

    const moves = board.moves({square: pieceSquare, verbose: true})

    console.log(moves)
    console.log(pieceSquare)
    console.log(squareOver)

    for (const move of moves){
      if (move.to === squareOver){
        board.move({from: pieceSquare, to: squareOver})
        setBoard(new Chess(board.fen()))
      }
    }
  }
}

