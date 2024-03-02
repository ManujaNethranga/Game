//let date = new Date();
//console.log(date.toString());


//let num = Math.round(5.5);
//console.log(num);

//const MinNumber = [1,5,7,2,3,4,8,9,2,3];
//let min = Math.min(MinNumber);
//console.log(min);


//let num = Math.random()*1001;
//console.log(num);

/*
let Customer = {
    name : "Manuja",
    age : 21,
    phone : 763075698,
    address : "Nittambuwa"
}

let jasonObj = JSON.stringify(Customer);
console.log(jasonObj);

console.log(JSON.parse(jasonObj));


let fun = function(){
    console.log("Hello World");
}
console.log(fun());

let fun1 = () => {
    console.log("Hello World 1");
}
console.log(fun1());

let fun2 = () => console.log("Hello World2");
console.log(fun2());

let fun3 = (val) => console.log("Hello World"+val);
console.log(fun3(100));

let fun4 = val => console.log("Hello Wrold"+val);
console.log(fun4(150)); */


let random = Math.round(Math.random()*10);
console.log(random);
let count = 0;
let userInput =5;
while(count<3){
    if(random==userInput){
        console.log("Correct Number");
        break;
    }else if(random<userInput){
        console.log("Lower");
    }else{
        console.log("Higher");
    }
    count++;
}
