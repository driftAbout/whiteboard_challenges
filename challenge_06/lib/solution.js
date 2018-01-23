'use strict';

const solution = module.exports = {};

function loop(n, cb){
  if (!n-- || typeof n !== 'number' || !cb || typeof cb !== 'function') return;
  cb(n);
  loop(n, cb);  
}

solution.loop = loop;



/*** works but does not fit criteria of the challenge
 
function again(n){
  if (!n-- || typeof n !== 'number' ) return;
  loop(n, this(n));  
}
const loop = again.bind(n => console.log(n));

***/
