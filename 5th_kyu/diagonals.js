function diagonals(matrix) {
    var returnMatrix = [];
     len = matrix.length;

    //will return the upper, left to lower, right diagonals from the largest down to the lower left corner 
    for (let i = 0; i < len; i++){
         var aResultMatrix = []; 
        for (let j = 0; j < len; j++){
          let k = j - i;
          if(k < 0){
          }else{
            aResultMatrix.push(matrix[j][k]);
          }
        }//end for j
            returnMatrix.push(aResultMatrix);
    }//end for i

        //will return the upper, left to lower, right diagonals from the largest down up to the upper right corner 
    for (let m = 0; m < len - 1; m++){
         var bResultMatrix = []; 
        for (let n = 0; n < len - m - 1 ; n++){
          let p = n + m + 1;
          if(p < 0){
          }else{
            bResultMatrix.push(matrix[n][p]);
          }
        }//end for j
            returnMatrix.push(bResultMatrix);
    }//end for i
    
    console.log(returnMatrix);
}//end diagonals

diagonals([[1,2,3], [4,5,6], [7,8,9]])// [[1],[1,5,9],[2,4],[2,6],[3],[3,5,7],[4,8],[6,8],[7],[9]]);
//diagonals([[1,2,3,4], [5,6,7,8],[9,0,11,12],[13,14,15,16]]);