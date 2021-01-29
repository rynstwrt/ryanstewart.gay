import * as BABYLON from "@babylonjs/core/Legacy/legacy.js";


// canvas and engine setup
const canvas = document.getElementById("bgcanvas");
const engine = new BABYLON.Engine(canvas, true);


// scene set up
const scene = new BABYLON.Scene(engine);
scene.clearColor = BABYLON.Color4.FromHexString("#00000000");


// create cubes in shape of sine wave
const cubes = [];
for (let i = 0; i < 100; i += .1)
{
    const cube = BABYLON.MeshBuilder.CreateBox("box", {size: 2}, scene);
    cube.position = new BABYLON.Vector3(0, Math.sin(i / 10) * 5, i);

    const cubeMat = new BABYLON.StandardMaterial("cubemat", scene);
    cubeMat.emissiveColor = BABYLON.Color3.FromHexString("#FF6600");

    cube.material = cubeMat;

    cubes.push(cube);
}


// create camera
const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -20), scene);
camera.attachControl(true);


// create animation
const seconds = 10;
const fps = 60;
const anim = new BABYLON.Animation("anim", "position", fps, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE, true);

const offset = new BABYLON.Vector3(0, 5, -10);
const keys = [];
for (let i = 0; i < cubes.length; ++i)
{
    keys.push({
       frame: Math.round(i / (fps)),
       value: cubes[i].position.add(offset)
    });
}
console.log(keys);
anim.setKeys(keys);
camera.animations.push(anim);
scene.beginAnimation(camera, 0, fps, false);


// run render loop
engine.runRenderLoop(() =>
{
    scene.render();
});