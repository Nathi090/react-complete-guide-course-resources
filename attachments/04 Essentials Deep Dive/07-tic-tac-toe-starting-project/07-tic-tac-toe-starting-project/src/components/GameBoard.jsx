import { useState } from "react"

const initialGameBoard= [//outside the component function because is not a state or realted
[null, null, null],
[null, null, null],
[null, null, null],
]


export default function GameBoard() { 
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            // prevGameBoard[rowIndex][colIndex] = 'X';
            // return prevGameBoard;
            //If I do it like this, I would update it in memory before the schedule state was executed in React. 
            //We are dealing with memory locations
            
            
            const updatedBoard = [...prevGameBoard.map(innerArray => [... innerArray])]//contains all elements from the prev
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
            //Using this approach we are updateing the state in an inmutable way
        } );
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex )=> 
                    <li key={colIndex}>                
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}    
        </ol>
}