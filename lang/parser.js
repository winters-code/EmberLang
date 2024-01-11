
import { AST } from './ast.js';
import * as consts from './const.js';
import * as nodes from './node.js';

export class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.ast = null;
        this.currentPos = -1;
        this.currentToken = null;
        this.advance();
    }

    advance() {
        this.currentPos += 1;
        this.currentToken = this.tokens[this.currentPos];
    }

    _genBinaryOperation(func, operators) {
        let left = this[func]();
        let node = null
        // this.advance();

        while (this.currentToken && this.currentToken.type == consts.TokenType.ARITH && operators.includes(this.currentToken.value)) {
            let operator = this.currentToken;
            this.advance();
            let right = this[func]();
            node = new nodes.BinaryOperationNode(left, operator, right);
        }

        return node || left;
    }

    _factor() {
        let token = this.currentToken;
        this.advance();
        return new nodes.NumberNode(token.value);
    }

    _md() {
        return this._genBinaryOperation('_factor', ['*', '/']);
    }

    _as() {
        return this._genBinaryOperation('_md', ['+', '-']);
    }

    parse() {

        this.ast = this._as();
        return this.ast;

    }

}