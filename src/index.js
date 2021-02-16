
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix && matrix != 0) {
    let newMatrix = [];

    matrix.map((item, index) => {
      if (index % 2 != 0) {
        newMatrix.push(item.reverse())
      } else {
        newMatrix.push(item);
      }
    });
    if (newMatrix.join(',').split(',').map(item => +item) === [0]) {
      return [];
    }
    return newMatrix.join(',').split(',').map(item => +item);
  } else {
    return [];
  }

}
