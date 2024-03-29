
export class AST {
    constructor(tokens, tokenIndex, parent=null) {
        this.tokens = tokens;
        this.tokenIndex = tokenIndex || 0;
        this.children = [];
        this.parent = parent;
        this.token = this.tokens[this.tokenIndex];
        this.expects = 0;
    }

    expect(type, func) {
        if (this.tokens[this.tokenIndex + 1].type == type) {
            let newAST = new AST(this.tokens, this.tokenIndex + 1);
            newAST.parent = this;
            this.children.push(newAST);
            func(newAST);
        }
        this.expects += 1;
        return this;
    }

    none() {
        return this.expects > 0 && this.tokens[this.tokenIndex + 1].type === 999;
    }

}