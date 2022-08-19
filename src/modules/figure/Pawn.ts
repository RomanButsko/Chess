import { Cell } from '../Cell';
import { Colors } from '../Colors';
import black from './../../assets/black-pawn.png';
import white from './../../assets/white-pawn.png';
import Figure, { FigureName } from './Figure';

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) { 
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FigureName.pawn
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        return true
    }
}

export default Pawn
