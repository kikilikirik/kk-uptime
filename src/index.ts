/*TODOS:
1: Kreise zeichnen rot grün
2: for schleife durch array und kreise zeichen 
3: if ob 1 oder 0 wenn 1 GRÜN wenn 0 ROT
4: x variable erhöhen aber nicht in for schleife sondern wie bei Leberkas
5: es sind 49 objekte im array
*/
import p5 from 'p5';
let myData: number[] = [];

const p = new p5((sketch) => {
  sketch.setup = setup;
  sketch.preload = preload;
  sketch.draw = draw;
});
function preload() {
  //myData = p.loadJSON('https://prototypes.at/kk/') as number[];
  myData = p.loadJSON('test.json') as number[];
}
//todo: load jason
function setup() {
  console.log(myData);
  p.createCanvas(innerWidth, innerHeight);
  p.background('black');
  //console.log(innerHeight)
}
function draw() {

  for (let i = 0; i < innerWidth; i += innerWidth / 49) {
    for (let x = 0; x < myData.length; x++) {
        if (myData[x] === 0) {
            p.fill('red');
         
          } else if (myData[x] === 1) {
            p.fill('green');
        }
        p.circle(i + 13, 46, innerWidth / 50);
    }
  }
}
