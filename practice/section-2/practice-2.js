'use strict';

function countSameElements(collection) {
  let arr = [];
  var result = [];
  collection.forEach(function(item){
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
      obj.lastchar = parseInt(item.charAt(2));//和practice-3不一样的地方，也可写成item.substr(2,3)
      console.log(obj)
      if(!arr[obj.firstchar]){
        arr[obj.firstchar] = {};
        arr[obj.firstchar].key = obj.firstchar;
        arr[obj.firstchar].count = obj.lastchar;
      }
      // }else {
      //   arr[obj.firstchar].count += obj.lastchar;  为了让存在的obj.firstchar相加
      // }
    }
    
  });

for(var key in arr){
  result.push(arr[key]);
}
console.log(result)
  return result;
}
