// Jacob Gibbons
// 3/18/2022
// https://en.wikipedia.org/wiki/Collatz_conjecture

// below sketch graphs points from 1 to numOfIters to show the depth (how many interations it takes to get to 1) of that number's of that number.  


let dictNums = {}
let depth = 0;
let maxDepth = 1;
let maxDepthindex;
let numOfIters = 1000;
let depthP;
let totalP;

function collatz(num){
  if (num != 1){   
    depth++;
    if (isEven(num)){
      depth++;
      collatz(num/2);
    } else {
      collatz(3 * num + 1);
    }
  } 
  return depth;
}

function isEven(num){
  return (num % 2 == 0);
}



function setup() {
  createCanvas(800, 400);
  for (let i = 1; i < numOfIters; i++){
    depth = 1;
    dictNums[i] = collatz(i);
  }
  explore();
  totalP = createP('Total numbers checked: ' + numOfIters)
  depthP = createP('Number with the largest depth is: ' + maxDepthIndex + ' with a depth of: ' + maxDepth);

}



function explore(){
  for (var key in dictNums){
    if (dictNums[key] > maxDepth){
      maxDepth = dictNums[key];
      maxDepthIndex = key;
    }
  }
}


function draw() {
  background(220);
  strokeWeight(1);
  let indexNum = 0;
  let px;
  let py;
  for (var key in dictNums){
    if (indexNum > 0){
      px = map(indexNum - 1, 0, numOfIters, 0, width);
      py = map(dictNums[key - 1], 0, maxDepth * 1.5, height, 0);
    }  
    x = map(indexNum, 0, numOfIters, 0, width);
    y = map(dictNums[key], 0, maxDepth * 1.5, height, 0);
    point(x, y);
    line(px, py, x, y);
    indexNum++;
  }
}
