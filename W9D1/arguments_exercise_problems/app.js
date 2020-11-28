//1
function sum(...args){
    let sum=0;
    for(let i=0; i<args.length; i++){
        sum+=args[i];
    }
    return sum;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

// Function.prototype.myBind1 = function(ctx) {
//   const fn= this;
//   const bindArgs = Array.from(arguments).slice(1);
//   return function _boundFn() {
//     const callArgs = Array.from(arguments);
//     return fn.apply(ctx,bindArgs.concat(callArgs));
//   }
// }

Function.prototype.myBind = function(ctx, ...bindArgs){
    const func = this;

    return function(...callArgs){
        return func.call(ctx, ...bindArgs, ...callArgs);
    }
}


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true
Function.prototype.curry = function(num){
    const numbers = [];
    const func = this;

    return function _curriedSum(arg){
        numbers.push(arg);
        if (numbers.length === num) {
            return func.call(null, ...numbers); //if we need to use a context replace null with ctx
        }
        return _curriedSum;
    } 
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

function multFour(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4;
} 
// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
// console.log(multFour.curry(4)(4)(20)(6)(5));


 