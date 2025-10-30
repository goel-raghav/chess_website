import "./ChessBoard.css"
import { Chess } from "chess.js"
import Piece from "./Piece.tsx"
import { DndContext } from "@dnd-kit/core"
import Square from "./Square.tsx"
import { useDroppable } from "@dnd-kit/core"

function ChessBoard() {

    let squares = []
    

    for (let row = 0; row < 8; row++){
        for (let col = 0; col < 8; col++){
            const key = row * 8 + col
            const dark = (row + col) % 2 === 1
            const className = "square " + (dark ? "dark": "light")
            squares.push(
                <Square key={key} className={className}><Piece id={key}></Piece></Square>
            )
        }
    }

    return (
        <DndContext>
            <div className="board">
                {squares}
            </div>
        </DndContext>
    )
}
export default ChessBoard