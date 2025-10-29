import "./Chess.css"

function Chess() {

    let squares = []

    for (let row = 0; row < 8; row++){
        for (let col = 0; col < 8; col++){
            const key = row * 8 + col
            const dark = (row + col) % 2 === 1
            const className = "square " + (dark ? "dark": "light")
            console.log(className)
            squares.push(
                <div key={key} className={className}></div>
            )
        }
    }

    return (
        <>
            <div className="board">
                {squares}
            </div>
        </>
    )
}
export default Chess