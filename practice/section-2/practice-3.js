'use strict';

function countSameElements(collection) {

  let arr = [];
  var result = [];
  collection.forEach(function(item){
    if(item.length === 1){
      if(!arr[item]){
        arr[item] = {};
        arr[item].name = item;
        arr[item].summary = 1;
        
      }else {
        arr[item].summary++
      }
      
    }else{
      var obj = {};
      obj.firstchar = item.charAt(0);
      obj.lastchar = parseInt(item.substr(2,3));
      console.log(obj)
      if(!arr[obj.firstchar]){
        arr[obj.firstchar] = {};
        arr[obj.firstchar].name = obj.firstchar;
        arr[obj.firstchar].summary = obj.lastchar;
      }else {
        arr[obj.firstchar].summary += obj.lastchar;
      }
    }
    
  });

for(var key in arr){
  result.push(arr[key]);
}
  return result;
}
