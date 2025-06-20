// setTimeout

// setTimeout(() => {
//     console.log("I run after 2 seconds!");
//   }, 2000);
//   console.log("Start");
// setTimeout(() => console.log("After 2 sec"), 2000);
// console.log("End");


// SetInterval


  
var a= "meena"
console.log(a)

function showMessage() {
  console.log("Hello from the timeout!");
}

setTimeout(showMessage, 3000); // 3 sec



let count1 = 0;

const timer1 = setInterval(() => {
  console.log("Count:", count1);
  count1++;

  if (count1 === 5) {
    clearInterval(timer1); // rukega after 5 times
  }
}, 1000);


function greeting(){
    console.log("Hello Meena ")
}
setTimeout(greeting, 3000)