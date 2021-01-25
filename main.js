const engine = new BABYLON.Engine(document.getElementsByTagName("canvas")[0]);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 1), scene);
light.intensity = 10;

const box = BABYLON.Mesh.CreateTorusKnot("box", .3, 4, 100, 3, 3, 3, scene);
const boxMat = new BABYLON.StandardMaterial("boxmat", scene);
boxMat.wireframe = true;
box.material = boxMat;
box.rotation.y = Math.PI / 4;

const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -15), scene);
camera.setTarget(box.position);

engine.runRenderLoop(() =>
{
    scene.render();
    box.rotation.y = box.rotation.y + .0025;
});