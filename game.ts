/*
const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0;
console.log(`row: ${row} and col: ${col}`);
moves.push(board[row][col]); // A
console.log("Path:" + moves.join(" → ") + `\n`);

// Move Right to B
col++;
console.log(`row: ${row} and col: ${col}`);
moves.push(board[row][col]); // B
console.log("Path:" + moves.join(" → ") + `\n`);

// Move Right to C
col++;
console.log(`row: ${row} and col: ${col}`);
moves.push(board[row][col])
console.log("Path:" + moves.join(" → ") + `\n`);

// Move Down to F
row++;
console.log(`row: ${row} and col: ${col}`);
moves.push(board[row][col])
console.log("Path:" + moves.join(" → ") + `\n`);

// Move left to E
col--;
console.log(`row: ${row} and col: ${col}`);
moves.push(board[row][col])
console.log("Path:" + moves.join(" → ") + `\n`);

// console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4
*/