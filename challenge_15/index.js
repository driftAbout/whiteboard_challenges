'use strict';

const KT = require('./lib/kary');
const breadthFirst = new KT().breadthFirst;

const solution = module.exports = {};

solution.jejune = (root) =>{

  console.log(root);
  let nullNodes = [];
  breadthFirst.call({root: root, test:true}, node => {
    console.log(this);
    if( node.value.value === null) {
      nullNodes.push(node.value);
    }
  });

  return root;



  // return [root].reduce((acc, rt) => { breadthFirst.call({root: rt}, node => {
  //   console.log(node);
  //   if( node.value.value === null) {
      
  //     acc.push(node.value);
  //   }
  // });
  // return acc;
  // },[]);
};
