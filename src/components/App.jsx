import React from 'react'
import Confetti from 'react-confetti'
import Text from './Text'
import Dice from './Dice'
import Roll from './Roll'
import Scores from './Scores'

export default function App() {
    const [gameWon, setGameWon] = React.useState(false)
    const [currentScore, setCurrentScore] = React.useState(0)

    function generateDice() {
        return Array.from({ length: 10 }, (item, index) => {
            return {
                value: Math.floor(Math.random() * 6 + 1),
                isHeld: false,
                id: index,
            }
        })
    }

    const [dice, setDice] = React.useState(generateDice())

    function changeState(id) {
        setDice((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, isHeld: !item.isHeld } : item
            )
        )
    }

    function regenerate() {
        if (gameWon) {
            setGameWon(false)
            setDice(generateDice())
            setCurrentScore(0)
        } else {
            setDice((prev) =>
                prev.map((item) =>
                    item.isHeld
                        ? item
                        : { ...item, value: Math.floor(Math.random() * 6 + 1) }
                )
            )
            setCurrentScore((prev) => ++prev)
        }
    }

    React.useEffect(() => {
        if (dice.every((item) => item.isHeld && item.value === dice[0].value)) {
            setGameWon(true)
            if (currentScore < parseInt(localStorage.getItem('bestScore')))
                localStorage.setItem('bestScore', currentScore)
        }
    }, [dice])

    return (
        <>
            <main>
                <Text />
                <Dice dice={dice} changeState={changeState} />
                <Roll gameWon={gameWon} regenerate={regenerate} />
                <Scores current={currentScore} />
                {gameWon && (
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                )}
            </main>
        </>
    )
}
