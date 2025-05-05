/*TODOS:

*/
import p5 from 'p5';
let myData: number[] = [];

const p = new p5((sketch) => {
  sketch.setup = setup;
  sketch.preload = preload;
  sketch.draw = draw;
  sketch.circlesandrects = crirclesandrects;
});

function preload() {
  myData = p.loadJSON('https://prototypes.at/kk/') as number[];
  //myData = p.loadJSON('test.json') as number[];
}

function setup() {
  console.log(myData);
  p.createCanvas(innerWidth, innerHeight);
  p.background('black');
}
function draw() {
  crirclesandrects();
}

function crirclesandrects() {
  // for the arrays
  let wert = 0;
  let bad = 0;
  let good = 1;
  let indexofarray = 49;
  // for the rects
  let rectbbegin = 0;
  let rectheight = 50;

  // for schleife lauft durch und ändert wert des arrays dieser wird dann geprüft in dem if
  // es wird auch die variable WERT geändert
  for (let i = 0; i < innerWidth; i += innerWidth / indexofarray) {
    wert = wert + 1;
    if (myData[wert] === bad) {
      p.fill('red');
    } else if (myData[wert] === good) {
      p.fill('green');
    }
    //p.circle(i + 13, circlebeginheight, innerWidth / indexofarray);
    p.rect(i, rectbbegin, innerWidth / indexofarray, rectheight);
  }
}
