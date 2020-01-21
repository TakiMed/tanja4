
function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  testMe(); 
  function delayedGreet() {
    setTimeout(() => {
      console.log("dje sii");
    }, 3000);
  }
  
  
  delayedGreet();
  
  
  function helloGoodbye() {
    console.log("cao");
    
    setTimeout(() => {
      console.log("dovidjenja");
    }, 2000);
  }
  helloGoodbye();

  function brokenRecord() {
    setInterval(() => {
      console.log('hi again');
    },1000);
  };
  
  brokenRecord();
  
  function limitedRepeat() {
    let counter = 0;
    let a = setInterval(() => {
      counter++;
      if (counter === 5){
        clearInterval(a);
      }
      console.log('hi again');
    }, 1000);
  };
  limitedRepeat(); 
  
  function everyXsecsForYsecs(func, interval, duration) {
    let counter = 0; 
    let a = setInterval(() => {
      counter++;
      if (counter >= duration){
        clearInterval(a);
      }
        func();
    }, interval * 1000);
  }

  function theEnd() {
  console.log('This is the end!');
  }
  everyXsecsForYsecs(theEnd, 2, 20); 