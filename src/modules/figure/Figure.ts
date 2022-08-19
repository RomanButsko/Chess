import { Cell } from '../Cell'
import { Colors } from '../Colors'
import logo from './../../assets/black-bishop.png'

export enum FigureName {
    bishop,
    king,
    knight,
    pawn,
    queen,
    rook,
}

export class Figure  {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureName;
    id: number

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.name = FigureName.bishop;
        this.logo = logo;
        this.id = Math.random()
        
    }


    canMove(target: Cell): boolean {
        if (target.figure?.name === FigureName.king) return false;
        if (target.figure?.color === this.color) return false;
        return true;
    }

    moveFigure(target: Cell) {
         
    }
}


export default Figure
