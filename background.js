import * as BABYLON from "@babylonjs/core/Legacy/legacy.js";

// canvas and engine setup
const canvas = document.getElementById("bgcanvas");
const engine = new BABYLON.Engine(canvas, true);

// scene set up
const scene = new BABYLON.Scene(engine);
scene.clearColor = BABYLON.Color4.FromHexString("#00000000");

// create knot
const knot = BABYLON.MeshBuilder.CreateTorus("knot", {diameter: 8, thickness: 3, tessellation: 25}, scene);

// create knot material
const knotMap = new BABYLON.StandardMaterial("knotmat", scene);
knotMap.emissiveColor = BABYLON.Color3.FromHexString("#050505");
knotMap.wireframe = true;
knot.material = knotMap;

// create camera
const camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 13, knot.position, scene);

// set up quaternion slerping.
const quaternion1 = new BABYLON.Quaternion(0, 1, 0, 0);
const quaternion2 = new BABYLON.Quaternion(0, 1, 0, Math.PI * 2);
const alphaInc = .002;

let alpha = 0;
let increasing = true;
engine.runRenderLoop(() =>
{
    scene.render()

    knot.rotationQuaternion = BABYLON.Quaternion.Slerp(quaternion1, quaternion2, alpha);

    if (alpha >= 1 && increasing)
        increasing = false;
    else if (alpha <= 0 && !increasing)
        increasing = true;

    if (increasing)
        alpha += alphaInc;
    else
        alpha -= alphaInc;
});