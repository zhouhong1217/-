'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var value in objectB) {
    var collectionB = objectB[value];
    console.log(collectionB)
  }

  for(let i = 0;i < collectionB.length;i++){
    for(let j = 0;j < collectionA.length;j++)
    if(collectionB[i] == collectionA[j].key){
      collectionA[j].count -= 1;
      console.log(collectionA[j].count)
      console.log(collectionA)
    }else{
      continue;
    }
  }
  return collectionA;
}
