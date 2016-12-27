
var isCellValid = function (x, y) {
	let cell = field[x][y];
	cell = typeof(cell) === 'undefined' ? createCell(x, y) : cell; // if the cell hasn't been created, create it

}

// grid is object instead of array, and accessed with field[x][y]

// how to loop through
for (row in field) {
	for (cell in row) {
		cell;
	}
}

