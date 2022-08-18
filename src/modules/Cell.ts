import { Board } from './Board';
import { Colors } from './Colors'
import Figure from './figure/Figure'

export class Cell {
    readonly x: number
    readonly y: number
    readonly color: Colors
    figure: Figure | null
    board: Board
    available: boolean
    id: number

    constructor(board: Board, x: number, y: number, figure: Figure | null, color: Colors) {
        this.board = board;
        this.available = false
        this.color = color
        this.figure = figure
        this.x = x
        this.y = y
        this.id = Math.random()
    }
}