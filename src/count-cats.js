module.exports = function countCats(matrix) {
  matrix = matrix.flat();
  let schet=0;

  for(let i=0;i<matrix.length;i++){
      if(matrix[i]=="^^"){
        schet=schet+1;
      }
  }
  return schet;
};
