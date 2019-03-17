/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  var counter = 0;
  var memory = [];
for(var i = 0; i < preferences.length; i++){
  var first = preferences[i] ;
  if (memory.includes(i)){
    continue;
  }
  var second = preferences[first - 1] ;
  if (first === second){
    continue;
  }
  var third = preferences[second - 1] ;
  if(third - 1 === i){
    counter++;
    memory.push(first - 1, second - 1, third - 1);
  }
  }
  return counter;
};
