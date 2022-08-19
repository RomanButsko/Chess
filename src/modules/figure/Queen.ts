import { Cell } from '../Cell';
import { Colors } from '../Colors';
import black from './../../assets/black-queen.png';
import white from './../../assets/white-queen.png';
import Figure, { FigureName } from './Figure';

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) { 
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FigureName.queen
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        return true
    }
}

export default Queen
