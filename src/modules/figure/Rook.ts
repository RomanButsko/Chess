import { Cell } from '../Cell';
import { Colors } from '../Colors';
import black from './../../assets/black-rook.png';
import white from './../../assets/white-rook.png';
import Figure, { FigureName } from './Figure';

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) { 
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FigureName.rook
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        return true
    }
}

export default Rook
