
import { Position } from './position.js';
import { Token } from './token.js';
import * as consts from './const.js';

export class Lexer {

    constructor() {
        this.text = "";
        this.currentChar = null;
        this.position = null;
    }

    advance() {
        this.position.column += 1;
        if (this.position.column >= this.text.length) {
            this.currentChar = null;
            return;
        }
        this.currentChar = this.text.charAt(this.position.column);
    }

    setText(text) {
        this.text = text;
        this.position = new Position(0, -1);
        this.advance()
    }

    create_number() {
        let num_str = "";
        let dots = 0;

        while (this.currentChar && consts.DIGITSDOT.includes(this.currentChar)) {
            num_str += this.currentChar;
            dots += 1;
            this.advance();
        }

        return new Token(consts.TokenType.NUM, Number(num_str));
    }

    create_operator() {
        return new Token(consts.TokenType.ARITH, this.currentChar);
    }

    tokenize() {

        let tokens = [];

        while (this.currentChar) {
            if (consts.DIGITS.includes(this.currentChar)) {
                tokens.push(this.create_number());
            } else if (consts.OPERATORSTR.includes(this.currentChar)) {
                tokens.push(this.create_operator());
            }
            this.advance();
        }

        tokens.push(new Token(consts.TokenType.EOF))
        return tokens;
    }
}