
import { useDroppable } from "@dnd-kit/core"

function Square(props: any){

    const {isOver, setNodeRef} = useDroppable({id: props.key})
    const style = {
        border: isOver ? '8px solid white;' : undefined,
    }


    return (
        <div key={props.key} className={props.className} style={style} ref={setNodeRef}>
            {props.children}
        </div>
    )
}

export default Square