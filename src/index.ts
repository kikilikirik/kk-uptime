import p5 from "p5";
let myData: number[]= [] ;

const p = new p5((sketch) => {
    sketch.setup = setup;
    sketch.preload = preload;
    sketch.draw = draw;
});
function preload() {
    myData = p.loadJSON('https://prototypes.at/kk/') as number[];

}
//todo: load jason
function setup() {
    console.log(myData[1]);
    p.createCanvas(innerWidth, innerHeight);
    p.background("black");
}
function draw() {
    p.background("black");
    p.fill("white");
    p.textSize(32);
    p.text(myData[1], 100, 100);
    p.text(myData[2], 100, 200);
    p.text(myData[3], 100, 300);
    p.text(myData[4], 100, 400);
    p.text(myData[5], 100, 500);
}
