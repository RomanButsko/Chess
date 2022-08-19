import { Bishop } from './figure/Bishop';
import { Cell } from './Cell';
import { Colors } from './Colors';
import Pawn from './figure/Pawn';
import Knight from './figure/Knight';
import King from './figure/King';
import Queen from './figure/Queen';
import Rook from './figure/Rook';

export class Board {
    cells: Cell[][] = [];


    public initialState() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let k = 0; k < 8; k++) {
                if ((i + k) % 2 !== 0) {
                    row.push(new Cell(this, k, i, null, Colors.BLACK));
                } else {
                    row.push(new Cell(this, k, i, null, Colors.WHITE)); 
                }
            }
            this.cells.push(row);
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells
        return newBoard
    }
    public highlightCell(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i]
            for (let k = 0; k < this.cells.length; k++) {
                const target = row[k]
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }
    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }

    private addBishop() {
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.WHITE, this.getCell(5, 7))
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
    }
    private addKnight() {
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.WHITE, this.getCell(6, 7))
        new Knight(Colors.BLACK, this.getCell(6, 0))
    }
    private addKing() {
        new King(Colors.WHITE, this.getCell(4, 7))
        new King(Colors.BLACK, this.getCell(4, 0))
    }
    private addPawn() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.WHITE, this.getCell(i, 6))
            new Pawn(Colors.BLACK, this.getCell(i, 1))
        }
    }
    private addQueen() {
        new Queen(Colors.WHITE, this.getCell(3, 7))
        new Queen(Colors.BLACK, this.getCell(3, 0))

    }
    private addRook() {
        new Rook(Colors.WHITE, this.getCell(0, 7))
        new Rook(Colors.WHITE, this.getCell(7, 7))
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.BLACK, this.getCell(7, 0))
    }


    public addFigure() {
        this.addBishop();
        this.addKing();
        this.addKnight();
        this.addPawn();
        this.addQueen();
        this.addRook();
    }
}