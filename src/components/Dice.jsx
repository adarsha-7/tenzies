import React from 'react'

export default function Dice(props) {
    return (
        <div className="grid grid-cols-5 grid-rows-2 gap-10">
            {Array.from({ length: 10 }, (item, index) => (
                <button
                    className={
                        props.dice[index].isHeld
                            ? 'die bg-green-400'
                            : 'die white'
                    }
                    key={props.dice[index].id}
                    id={props.dice[index].id}
                    onClick={() => props.changeState(props.dice[index].id)}
                >
                    {props.dice[index].value}
                </button>
            ))}
        </div>
    )
}
