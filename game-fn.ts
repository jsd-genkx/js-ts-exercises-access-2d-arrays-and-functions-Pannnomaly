const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
	["J", "K", "L"],
];

const moves = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0;
moves.push(board[row][col]); // A

// Define movement functions
function moveRight()
{
	if (col === board[row].length - 1)
	{
		console.log(`col: ${col + 1} is out of length`);
		return;
	}

	col++;
	moves.push(board[row][col]);
}

function moveLeft()
{
	if (col === 0)
	{
		console.log(`col: ${col - 1} is out of length`);
		return;
	}

	col--;
	moves.push(board[row][col]);
}

function moveUp()
{
	if (row === 0)
	{
		console.log(`row: ${row - 1} is out of length`);
		return;
	}

	row--;
	moves.push(board[row][col]);
}

function moveDown()
{
	if (row === board[col].length - 1)
	{
		console.log(`row: ${row + 1} is out of length`);
		return;
	}

	row++;
	moves.push(board[row][col]);
}

// row
// console.log(board.length);
// col
// console.log(board[0].length);

// Call the movement functions
// moveRight(); // Move from A to B
// moveRight(); // Move from B to C
moveRight();
moveRight();
moveRight();
moveRight();
moveDown();
moveDown();
moveDown();
moveDown();
moveUp();
moveUp();
moveUp();
moveUp();
moveLeft();
moveLeft();
moveLeft();
moveLeft();

// moveDown(); // Move from C to F
// moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);