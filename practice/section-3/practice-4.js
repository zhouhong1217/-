'use strict';

function createUpdatedCollection(collectionA, objectB) {
  
  //遍历collectionA，push到result数组内
  let arr = [];
  var result = [];
  collectionA.forEach(function(item){
    if(item.length === 1){
      if(!arr[item]){
        arr[item] = {};
        arr[item].key = item;
        arr[item].count = 1;
      }else {
        arr[item].count++
      }
    }else{
      var obj = {};
      obj.firstchar = item.charAt(0);
      obj.lastchar = parseInt(item.charAt(2));
      console.log(obj)
      if(!arr[obj.firstchar]){
        arr[obj.firstchar] = {};
        arr[obj.firstchar].key = obj.firstchar;
        arr[obj.firstchar].count = obj.lastchar;
      }
    }  
  });
  for(var key in arr){
     result.push(arr[key]);
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
