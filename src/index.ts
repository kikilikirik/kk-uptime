import p5 from "p5";
let myData: number[]= [] ;

const p = new p5((sketch) => {
    sketch.setup = setup;
    sketch.preload = preload;
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
