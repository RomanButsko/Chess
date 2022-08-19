import { Cell } from '../Cell';
import { Colors } from '../Colors';
import black from './../../assets/black-knight.png';
import white from './../../assets/white-knight.png';
import Figure, { FigureName } from './Figure';

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) { 
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FigureName.knight
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        return true
    }
}

export default Knight
