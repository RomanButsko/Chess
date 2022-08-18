import { Cell } from './Cell';
import { Colors } from './Colors';

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
}