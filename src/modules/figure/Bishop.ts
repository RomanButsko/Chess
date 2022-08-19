import { Cell } from '../Cell';
import { Colors } from '../Colors';
import black from './../../assets/black-bishop.png';
import white from './../../assets/white-bishop.png';
import Figure, { FigureName } from './Figure';

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) { 
        super(color, cell);
        this.logo = color === Colors.BLACK ? black : white;
        this.name = FigureName.bishop
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        if (this.cell.isEmptyVerical(target)) return true;
        return false;
    }
}

export default Bishop
