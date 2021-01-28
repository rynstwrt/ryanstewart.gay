import * as BABYLON from "@babylonjs/core/Legacy/legacy.js";

// canvas and engine setup
const canvas = document.getElementById("bgcanvas");
const engine = new BABYLON.Engine(canvas, true);

// scene set up
const scene = new BABYLON.Scene(engine);
scene.clearColor = BABYLON.Color4.FromHexString("#00000000");

engine.runRenderLoop(() =>
{
    scene.render();
});