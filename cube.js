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

const camera = new ArcRotateCamera("camera", 0, 0, 5, new Vector3(0, 0, 0), scene);
camera.attachControl(canvas, true);

const inc = .05;
let increasing = true;
engine.runRenderLoop(() =>
{
   scene.render();

   if (increasing)
   {
      cube.rotation.x += inc;
      cube.rotation.y += inc;
      cube.rotation.z += inc;
   }
   else
   {
      cube.rotation.x -= inc;
      cube.rotation.y -= inc;
      cube.rotation.z -= inc;
   }

   if (increasing && cube.rotation.y >= Math.PI / 4)
      increasing = false;
   else if (!increasing && cube.rotation.y <= -Math.PI / 4)
      increasing = true;

});