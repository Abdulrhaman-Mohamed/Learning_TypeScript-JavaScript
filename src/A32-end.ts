/* 01*/
// Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//   constructor(public title: string, public price: numandstring) {}
//   abstract getLocation() : string;
//   abstract getDiscount() : string;
// }

// // Start Edit And Fix
// class RPG extends Game {
//   constructor(title: string, public price: numandstring, public rate: number) {
//       super(title,price);
//   }
//   getDiscount(): string {
//       return "This is discount" ;
//   }
//   getLocation(): string {
//       return " this location";
//   }
// }

// class Action extends Game {
//   constructor(title: string, public price: numandstring, public rate: number ,public company : string) {
//     super(title,price);
//   }
//   getDiscount(): string {
//     return "This is discount" ;
// }
// getLocation(): string {
//     return " this location";
// }
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"


/*02*/

// function check(val : any):any
// {
//     return val == undefined ? `Nothing` : val ;
// }

// // Write Function Code Here
// function showTypes<T1= undefined , T2 = undefined , T3 = undefined>  (Name? : T1 ,price? : T2 , type? : T3 ) : string        
// {
//     return `${check(Name)} - ${check(price)} - ${check(type)}`;
// }

// // Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true


/* 03 */ 
// Write Class Code Here
// class Game<T  , S = number >
// {
//     constructor(public title : T , public price:S)
//     {

//     }
//     getDiscount(dis : T)
//     {
//         console.log(`The Discount Is ${dis}`)
//     }
// }

// // Do Not Edit Here
// let gameOne = new Game<string>("Ys", 100);
// let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// gameOne.getDiscount("50"); // "The Discount Is 50"

// console.log(gameTwo.title); // 2064
// console.log(gameTwo.price); // 100
// gameTwo.getDiscount(80); // "The Discount Is 80"

class Test 
{

}
let Test1 = new Test();
console.log(typeof(Test1));