
import { Lexer } from './lang/lex.js';
import { Parser } from './lang/parser.js';
import readline from 'readline/promises';
import process from 'process';
import { inspect } from 'util';

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

while (true) {
    const line = await readlineInterface.question('$ ');
    if (line == 'q') break;

    let l = new Lexer();
    l.setText(line);

    let tokens = l.tokenize();

    let p = new Parser(tokens);
    let ast = p.parse();

    console.log(ast);
}

readlineInterface.close();