
import { AST } from './ast.js';
import * as consts from './const.js';
import * as nodes from './node.js';

export class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.ast = null;
        this.current_branch = null;
    }

    _genAST() {
        this.ast = new AST(this.tokens);
        this.current_branch = this.ast;
        let res = false;
        while (!res) {
            res = this.current_branch
                .expect(consts.TokenType.ARITH, (l0) => {
                    this.current_branch = l0;
                    l0.expect(consts.TokenType.NUM, (l1) => {
                        this.current_branch = l1;
                    })
                })
                .expect(consts.TokenType.LPAREN, (l0) => {
                    l0.expect(consts.TokenType.NUM, (l1) => {
                        this.current_branch = l1;
                    })
                })
                .none();
        }
    }

    _genRunNode() {
        
    }

    parse() {

        this._genAST();
        return this._genRunNode();

    }

}