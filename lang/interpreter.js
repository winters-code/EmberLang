
export class Interpreter {
    constructor(nodedAst) {
        this.nodedAst = nodedAst
    }

    interpret() {
        this.nodedAst.operate();
    }
}