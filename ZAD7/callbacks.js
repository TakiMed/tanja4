// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
 console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word+"s";
}

// uncomment these to check your work
 console.log(addS('pizza'));
 console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let niz=[];
  for(let i = 0; i < array.length ; i++){
    niz.push(callback(array[i]));
  }
  return niz;
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
		for(let i = 0; i < array.length ; i++){
    callback(array[i]);
  }
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
	let niz =[];
  forEach(array, function(elem){
    niz.push(callback(elem));
  })
  return niz;
}

//Extension 2
function reduce(array, callback, initialValue) {
  var res=initialValue;
	forEach(array, function(elem){
    res=callback(res,elem);
  })
  return res;
}
  
var nums = [4, 1, 3];
function square(a,b) { return a*b;}
console.log("rezultat je " +reduce(nums,square,1));


//Extension 3
function intersection(array1,array2) {
	let niz=[];  
	for(let i = 0; i<array1.length;i++){
    for(let j=0;j<array2.length;j++){
      if(array1[i]==array2[j]){
        niz.push(array1[i]);
      }
    }
  }	
  return niz;
}


// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(array1, array2, array3) {
	let niz=[];  
	for(let i = 0; i<array1.length;i++){
    niz.push(array1[i]);
    }
  
	for(let i = 0; i<array2.length;i++){
    if(!niz.includes(array2[i])){
      niz.push(array2[i]);
    }
  }	
  for(let i = 0; i<array3.length;i++){
    if(!niz.includes(array3[i])){
      niz.push(array3[i]);
    }
  }	
  return niz;
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const obj = {};
    for (let i = 0; i < array1.length; i++){
      if (callback(array1[i]) === array2[i]){
        obj[array1[i]] = array2[i];
      }
    }
    return obj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let obj = {};
  for (let i = 0; i < arrVals.length; i++){
    obj[arrVals[i]] = [];
    for (let j = 0; j < arrCallbacks.length; j++){
      (obj[arrVals[i]])[j] = arrCallbacks[j](arrVals[i]);
    }
  }
  return obj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

