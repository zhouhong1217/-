'use strict';

function createUpdatedCollection(collectionA, objectB) {
  
  //遍历collectionA，push到result数组内
  var arr = [];
  var result = [];
  collectionA.forEach(function(item){
    if(!arr[item]){ 
      arr[item] = {};
      arr[item].key = item;
      arr[item].count = 1;
    }else {
      arr[item].count++
    }
  });
  for(let key in arr){
    result.push(arr[key])
  }

//将objectB对象的value值遍历成数组collectionB
  for (var value in objectB) {
    var collectionB = objectB[value];
    console.log(collectionB)
  }
  
  for(let i = 0;i < collectionB.length;i++){
    for(let j = 0;j < result.length;j++)
    if(collectionB[i] == result[j].key){
      for(let k = result[j].count;k / 3 >= 1;k= k -3){
        result[j].count -= 1;
      }
      console.log(result[j].count)
      console.log(result)
    }else{
      continue;
    }
  }

  return result;
}
