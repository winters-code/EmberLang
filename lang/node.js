
import { TokenType } from './const.js';

const operationMethodHash = {
    '+': 'add',
    '-': 'sub',
    '*': 'mul',
    '/': 'div'
}

export class NumberNode {
    constructor(value) {
        this.value = value;
    }

    add(o) {
        return this.value + o.value;
    }
}

export class OperatorNode {
    constructor(operator) {
        this.operator = operator
    }
}

export class BinaryOperationNode {
    constructor(left, operator, right) {
        this.left = left;
        this.right = right;
        this.operator = operator;
    }

    operate() {
        return this.left[operationMethodHash[this.operator.operator]](this.right);
    }
}

export function GenerateNode(ast) {
    switch (ast.token.type) {
        case TokenType.NUM:
            return new NumberNode(ast.token.value);
        case TokenType.ARITH:
            return new BinaryOperationNode(ast.parent, ast.token.value, ast.children[0]);
    }
    return null;
}