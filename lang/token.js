
export class Token {
    constructor(type, value=null) {
        this.type = type;
        this.value = value;
    }

    toString() {
        return "Token(t: " + toString(this.type) + ", v: " + toString(this.value) + ")";
    }
}