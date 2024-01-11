
export class Position {
    constructor(row, column, file="<stdin>") {
        this.row = row;
        this.column = column;
        this.file = file;
    }

    toString() {
        return "Position(r: " + toString(this.row) + ", c: " + toString(this.column) + ", f: " + toString(this.file) + ")";
    }
}