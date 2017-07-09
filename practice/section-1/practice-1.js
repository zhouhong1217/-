'use strict';

function collectSameElements(collectionA, collectionB) {
 
 var item = [];
 
 for(let i = 0;i < collectionA.length;i++){
    for(let j = 0;j < collectionB.length;j++){
      if(collectionA[i] == collectionB[j]){
        item.push(collectionA[i]);
        console.log(item);
      }else{
        continue;
      }
    }
 }

  return item;
}

