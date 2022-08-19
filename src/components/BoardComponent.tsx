import React, { FC, useEffect } from 'react'
import { useState } from 'react'
import { Board } from '../modules/Board'
import { Cell } from '../modules/Cell'
import CellComponent from './CellComponent'

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const clickSelect = (cell: Cell) => {
        if (selectedCell && selectedCell.figure?.canMove(cell) && selectedCell !== cell) {
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
        } else {
            setSelectedCell(cell)
        }
        }

    useEffect(() => {
        highlightCells();
    }, [selectedCell])

    const highlightCells = () => {
        board.highlightCell(selectedCell);
        updateBoard();
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard();
        setBoard (newBoard)
    }

    return (
        <div className='board'>
            {board.cells.map((item, index) => 
                <React.Fragment key={index}>
                    {item.map(cell => 
                        <CellComponent cell={cell} key={cell.id} selected={cell.x === selectedCell?.x && cell.y === selectedCell.y} click={clickSelect} />)}
                    </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent
