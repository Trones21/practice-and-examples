function zigzagTraverse(array) {
    // Write your code here.
    const lastRow = array.length - 1;
    const lastCol = array[0].length - 1;
    let row = 0;
    let col = 0;
    let goingDown = true;
    const result = [];

    while (!isOutOfBounds(row, col, lastRow, lastCol)) {
        result.push(array[row][col]);
        if(result.length === 9){
            debugger;
        }
        if (goingDown) {
            if (col === 0 || row === lastRow) {
                goingDown = false;
                if (row === lastRow) {
                    col++;
                } else {
                    row++;
                }
            }
            //Normal diagonal left down
            if (col !== 0 && row !== lastRow) {
                row++;
                col--;
            }
        } else {
            //GoingUp
            if (row === 0 || col === lastCol) {
                goingDown = true;
            }
            if (row === 0 && col !== lastCol) {
                col++;
            }
            if (col === lastCol) {
                row++;
            }
            //Normal
            if (row !== 0 && col !== lastCol) {
                row--;
                col++;
            }

            //first col or last row
        }
    }

    return result;

}
function isOutOfBounds(row, col, lastRow, lastCol) {
    return row < 0 || row > lastRow || col < 0 || col > lastCol;

}

let arrs = []
//arrs.push([[1,2,3,4,5]]);
//arrs.push([[1], [2], [3], [4], [5]]);

arrs.push([
  [1, 3, 4, 10, 11],
  [2, 5, 9, 12, 19],
  [6, 8, 13, 18, 20],
  [7, 14, 17, 21, 24],
  [15, 16, 22, 23, 25]
]

);
for(let arr of arrs){
    zigzagTraverse(arr)
}

