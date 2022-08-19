import { Cell } from '../Cell';
import { Colors } from '../Colors';
import black from './../../assets/black-king.png';
import white from './../../assets/white-king.png';
import Figure, { FigureName } from './Figure';

export class King extends Figure {
    constructor(color: Colors, cell: Cell) { 
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FigureName.king
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        return true
    }
}

export default King
