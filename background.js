import * as BABYLON from "@babylonjs/core/Legacy/legacy.js";

// canvas and engine setup
const canvas = document.getElementById("bgcanvas");
const engine = new BABYLON.Engine(canvas, true);

// scene set up
const scene = new BABYLON.Scene(engine);
scene.clearColor = BABYLON.Color4.FromHexString("#00000000");

// create shapes
const latheShape = [new BABYLON.Vector3(0, 0, 0),
    new BABYLON.Vector3(10, 5, 0),
    new BABYLON.Vector3(5, 10, 0),
    new BABYLON.Vector3(12, 15, 0),
    new BABYLON.Vector3(3, 20, 0)];
const lathe = BABYLON.MeshBuilder.CreateLathe("lathe", {shape: latheShape}, scene);

// create material
const latheMat = new BABYLON.StandardMaterial("lathematerial", scene);
latheMat.emissiveColor = BABYLON.Color3.FromHexString("#EF8354");
lathe.material = latheMat;

// create camera
const camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 60, lathe.position.add(new BABYLON.Vector3(0, 10, 0)), scene);

// run render loop
engine.runRenderLoop(() =>
{
    scene.render();
});