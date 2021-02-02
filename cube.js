import { Engine, Scene, Color3, Color4,
   ArcRotateCamera, MeshBuilder, Vector3,
   StandardMaterial } from "babylonjs";

const canvas = document.getElementById("cubecanvas");
const engine = new Engine(canvas);

const scene = new Scene(engine);
scene.clearColor = new Color4(0, 0, 0, 0);

const cube = MeshBuilder.CreateBox("cube", {}, scene);
cube.renderOutline = true;
cube.outlineWidth = .5;
cube.outlineColor = Color3.FromHexString("#FAC9B8");

const cubeMat = new StandardMaterial("cubemat", scene);
cubeMat.emissiveColor = Color3.FromHexString("#495159");
cube.material = cubeMat;

const camera = new ArcRotateCamera("camera", 0, 0, 7, new Vector3(0, 0, 0), scene);

const inc = .01;
engine.runRenderLoop(() =>
{
    scene.render();

    cube.rotation.y += inc;
    camera.beta += inc;
    if (camera.beta >= Math.PI) camera.beta = -Math.PI;
});

window.addEventListener("resize", () =>
{
   engine.resize();
});