export default function Roll(props) {
    return (
        <>
            <button className="roll" onClick={() => props.regenerate()}>
                {props.gameWon ? 'New Game' : 'Roll'}
            </button>
        </>
    )
}
