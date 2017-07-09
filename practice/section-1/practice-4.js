'use strict';

function collectSameElements(collectionA, objectB) {
  for (var value in objectB) {
    var collectionB = objectB[value];
    console.log(collectionB)
  }
  var item = [];
 
 for(let i = 0;i < collectionA.length;i++){
    for(let j = 0;j < collectionB.length;j++){
      if(collectionA[i].key == collectionB[j]){
        item.push(collectionA[i].key);
        console.log(item);
      }else{
        continue;
      }
    }
 }
  return item;
}

