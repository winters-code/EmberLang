
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

    run() {
        return this.value;
    }
}

export class BinaryOperationNode {
    constructor(left, operator, right) {
        this.left = left;
        this.right = right;
        this.operator = operator;
    }

    run() {
        let leftVal = this.left.run();
        let rightVal = this.right.run();
        switch (this.operator.value) {
            case '+':
                return leftVal + rightVal;
            case '-':
                return leftVal - rightVal;
            case '*':
                return leftVal * rightVal;
            case '/':
                return leftVal / rightVal;
        }
        return 0;
    }
}