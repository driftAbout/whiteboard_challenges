'use strict';

const debug = require('debug')('http:binary-search');

module.exports = function(val, dataSet) {
  if (typeof val !== 'number' || ! Array.isArray(dataSet)) throw new Error('Invalid input: Expecting (number, array)');
  const half = (max, min) =>  Math.floor((max - min) / 2);
  let min = 0;
  let max = dataSet.length - 1;
  let mid = Math.floor(max/2);
  
  let exists = false;
  //exists = true;
  let x = 0;
  while (!exists) {
  //w//hile (esits) {
    x++;
    debug('VALUE: ', val);
    debug('min', min, dataSet[min]);
    debug('mid', mid, dataSet[mid]);
    debug('max', max, dataSet[max]);

    if (val === dataSet[mid]) exists = true;
    if (min === max ) exists = false;
   // 

   // if (val === dataSet[mid]) exists = true;
   // if (min === max) break;

    //if(val > dataSet[mid]) [min, mid] = right(min, max, mid);
  //  if (val < dataSet[mid]) [max, mid] = left(min, max, mid);
    //if(val > dataSet[mid]) [min, mid] = [++mid, mid+= Math.floor((max - min) / 2)];
   // if (val < dataSet[mid]) [max, mid] = [--mid, mid-= Math.floor((max - min) / 2)];
    //if(val > dataSet[mid]) [min, mid] = [max + 1, half(max - mid) + mid];
    
     //val > dataSet[mid] ? ( min = ++mid, mid+= Math.floor((max - min) / 2)) : (max = --mid,  mid-= Math.floor((max - min) / 2) );

     val > dataSet[mid] ? ( min = ++mid, mid+=half(max, min)) : (max = --mid,  mid-=half(max, min) );
     
    // if(val > dataSet[mid]) {
    // min = ++mid; 
    // mid+= Math.floor((max - min) / 2);
    // }  
     
    
    //   // mid = mid + 1
    //  // mid = Math.floor((max - min) / 2) + mid ;
    // } 
    // if (val < dataSet[mid]) {
    
      // if (val < dataSet[mid]){ 
      //   max = --mid;  
      //   mid-= Math.floor((max - min) / 2);
      // }
  //   // }
  // //     mid = mid - 1;
  //   mid = mid - half(mid - min);
  //   mid = mid - Math.floor((max - min) / 2);
  //  }
  }
  return exists;
};


