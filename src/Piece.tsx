import "./Piece.css"
import wp from "./assets/white_pawn.png"
import { useDraggable } from "@dnd-kit/core"

function Piece(props: any) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

    return (
        <div className = "piece" ref={setNodeRef} style={style} {...listeners} {...attributes}></div>
    
    )
}

export default Piece