'use strict';

function countSameElements(collection) {
  let arr = [];
  var result = [];
  collection.forEach(function(item){
    if(!arr[item]){ 
      arr[item] = {};
      arr[item].key = item;
      arr[item].count = 1;
      console.log(arr[item])
    }else {
      arr[item].count++
    }
  });
    for(let key in arr){
    result.push(arr[key])
  }
    console.log(result)
  return result;
}



  