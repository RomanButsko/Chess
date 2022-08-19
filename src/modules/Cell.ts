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

    isEmpty() {
        return this.figure === null;
    }

    isEmptyVerical(target: Cell): boolean {
        if (target.x !== this.x) return false

        const max = Math.max(this.y, target.y)
        const min = Math.min(this.y, target.y)
        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCell(this.x, y).isEmpty()) {
                return false
            }
        }
        return true
    }
    isEmptyHorizontal(target: Cell): boolean {
        return true;
    }
    isEmptyDiagonal(target: Cell): boolean{
        return true;
    }

    setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.cell = this;
    }
    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target)
            target.setFigure(this.figure);
            this.figure = null;
        }

    }
}