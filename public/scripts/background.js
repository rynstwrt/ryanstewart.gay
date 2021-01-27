import * as BABYLON from "../../node_modules/@babylonjs/core";

const canvas = document.getElementById("bgcanvas");
const engine = new BABYLON.Engine(canvas, true);

function createScene()
{
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
}

const scene = createScene();
engine.runRenderLoop(() =>
{
   scene.render();
});
