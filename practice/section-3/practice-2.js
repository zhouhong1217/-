'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var value in objectB) {
    var collectionB = objectB[value];
    console.log(collectionB)
  }

  for(let i = 0;i < collectionB.length;i++){
    for(let j = 0;j < collectionA.length;j++)
    if(collectionB[i] == collectionA[j].key){
      for(let k = collectionA[j].count;k / 3 >= 1;k= k -3){
        collectionA[j].count -= 1;
      }
      console.log(collectionA[j].count)
      console.log(collectionA)
    }else{
      continue;
    }
  }
  return collectionA;
}
