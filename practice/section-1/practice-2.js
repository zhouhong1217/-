'use strict';

// function collectSameElements(collectionA, collectionB) {
  
//   var itemB = collectionB.join('').split('');
//   var item = [];
//   for(let i = 0;i < collectionA.length;i++){
//     for(let j = 0;j < itemB.length;j++){
//       if(collectionA[i] == itemB[j]){
//         item += collectionA[i];
//         console.log(item);
//       }else{
//         continue;
//       }
//     }
//  }
//  var result = item.split('');
//   return result;
// }


function collectSameElements1(collectionA, collectionB) {
 
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



function collectSameElements(collectionA, collectionB) {
  //[['a', 'd', 'e', 'f'],['a','g']] =====>  [['a','b']]
  //console.log(collectionA)
  let arr = [];
  for(let i=0;i<collectionB.length;i++){
    arr = arr.concat(collectionB[i]);
  }

  console.log(arr)
  let result = [];
  result =  collectSameElements1(collectionA,arr);
  return result;
}