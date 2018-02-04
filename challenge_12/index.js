
const Stack = require('./lib/stack');

module.exports = class {
  
  constructor() {
    this.line = new Stack();
    this.shaker = new Stack();
    this.front = null;
    this.back = null;
  }

  enqueue(val){
    this.line.push(val);
    if(!this.back) this.front = this.line.top;
    this.back = this.line.top;
    return this;
  }

  dequeue(){
    while(this.line.size){
      this.shaker.push(this.line.pop());
    }
    let popVal = this.shaker.pop();
    this.front =  this.shaker.top;
    while(this.shaker.size){
      this.line.push(this.shaker.pop());
    }
    this.back = this.line.top;
    return popVal;
  }

};