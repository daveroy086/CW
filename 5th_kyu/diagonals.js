function diagonals(matrix) {
    var returnMatrix = [];
     len = matrix.length;

    //will return the upper, left to lower, right diagonals from h largest down to the lower left corner 
    for (let i = 0; i < len; i++){
         var resultMatrix = [];
        for (let j = 0; j < len; j++){
          console.log('i is ' + i + ', j is ' + j );
          let k = j - i;
          if(k < 0){
          }else{
            resultMatrix.push(matrix[j][k]);
            console.log('i is ' + i + ', j is ' + j + ', k is ' + k + ' and matrix[j][k] is ' + matrix[j][k]);
            console.log(resultMatrix);
          }
            }//end for j
            returnMatrix.push(resultMatrix);
        }//end for i
    
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