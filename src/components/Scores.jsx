export default function Scores(props) {
    return (
        <>
            <p className="absolute right-10 bottom-7 m-4 text-xl font-bold text-gray-600">
                Current Score: {props.current}
            </p>
            <p className="absolute right-10 bottom-0 m-4 text-xl font-bold text-gray-600">
                Best Score: {localStorage.getItem('bestScore')}
            </p>
        </>
    )
}
