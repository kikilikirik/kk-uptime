import p5 from "p5";
let myData : string;

const p = new p5((sketch) => {
    sketch.setup = setup;
});
//todo: load jason
function setup() {
    p.createCanvas(400, 400);
    p.background("red");
}
