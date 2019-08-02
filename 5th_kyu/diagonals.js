function diagonals(matrix) {
  return matrix;
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

//diagonals([[1,2,3], [4,5,6], [7,8,9]]))// [[1],[1,5,9],[2,4],[2,6],[3],[3,5,7],[4,8],[6,8],[7],[9]]);