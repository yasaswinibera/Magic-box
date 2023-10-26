// This is my simple approach to generate a magic square


/** This is a function to print the array in the grid format.
 *@param {Array}  Grid  a 2-d array which represents the magic square */

function printMagicSquare(Grid) 
{
  console.log("-------------")
	for (let i = 0; i < Grid.length; i++) 
  {
		let row = Grid[i]
		let rowString = ""
		for (let j = 0; j < row.length; j++) 
    {
			rowString += ("| " + row[j]	+ " ")
		}
		console.log(rowString + "|")
		if (i == (Grid.length-1)) 
    {
			console.log("-------------")
		} 
    else 
    {
			console.log("----+---+---")
		}
	}
}
/**This is a function to generate an array randomly */
function randomArray()
{
/**This is a function for generating the array in different possible ways */
function newArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j
     j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Create an array of digits from 1 to 9
let inputValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// modifying the elements in the array randomly
newArray(inputValues)
let matrix = []
for (let i = 0; i < 3; i++) {
  matrix[i] = []
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = inputValues[i * 3 + j]
  }
}
return matrix
}
let c=0
// creating a function to check the generated array is magic square or not.
function check()
{
  //To check the sum of rows,columns and diagonals of the grid 
  while(true)
    {
    let A=randomArray()
    let row1=Number(A[0][0])+Number(A[0][1])+Number(A[0][2])
    let row2=Number(A[1][0])+Number(A[1][1])+Number(A[1][2])
    let row3=Number(A[2][0])+Number(A[2][1])+Number(A[2][2])
    let col1=Number(A[0][0])+Number(A[1][0])+Number(A[2][0]) 
    let col2=Number(A[0][1])+Number(A[1][1])+Number(A[2][1]) 
    let col3=Number(A[0][2])+Number(A[1][2])+Number(A[2][2]) 
    let dia1=Number(A[0][0])+Number(A[1][1])+Number(A[2][2])
    let dia2=Number(A[0][2])+Number(A[1][1])+Number(A[2][0])
    if(col1==col2 && col2==col3 && row1==row2 && row2==row3 && dia1==dia2)
        {
          return A
          break
        }
    c++                       
   }
}
printMagicSquare(check())
console.log(`The magic square is generated in ${c}th time`)



