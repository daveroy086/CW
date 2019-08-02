function diagonals(matrix) {
    var returnMatrix = [];
    var resultMatrix = [];
    len = matrix.length;

    //will return the upper, left to lower, right diagonals from h largest down to the lower left corner 
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len - i; j++){
            resultMatrix.push(matrix[i][i + 1]);
            console.log('i is ' + i + ', j is ' + j + ' and matrix[i][i + j] is ' + matrix[i][i + j]);
            console.log(resultMatrix);
            }//end for j
        }//end for i
    returnMatrix.push(resultMatrix);
    console.log(returnMatrix);

    //will retrun the upper,left to lower, right diagonals up to the upper right corner
     //create for (i = 1; i < len; i++){
    //  create for (j = 0; j < len - i; j++){
    //get the matrix element at i,j...resultMatrix.push(matrix[i][j])
    //              }//end for j
    //          }//end for i
    //returnMatrix.push(resultMatrix);


  //return matrix;
}

/*function sort(array) {
  return array.slice().sort(function(arr1, arr2) {
    var i;
    for (i = 0; i < arr1.length && i < arr2.length && arr1[i] === arr2[i]; i++);
    if (i < arr1.length && i < arr2.length) {
      return arr1[i] - arr2[i];
    } else if (i === arr1.length) {
      return -1;
    } else if (i === arr2.length) {
      return 1;
    } else {
      return 0;
    }
  });
}
*/

diagonals([[1,2,3], [4,5,6], [7,8,9]])// [[1],[1,5,9],[2,4],[2,6],[3],[3,5,7],[4,8],[6,8],[7],[9]]);