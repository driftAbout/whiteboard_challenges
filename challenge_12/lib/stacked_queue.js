
const Stack = require('./stack');

module.exports = class {
  
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
  }

  enqueue(val){
    this.front.push(val);
    return this.front;
  }

  dequeue(){
    while(this.front.size){
      this.back.push(this.front.pop());
    }
    let popVal =  this.back.pop();
    while(this.back.size){
      this.front.push(this.back.pop());
    }
    return popVal;
  }

};