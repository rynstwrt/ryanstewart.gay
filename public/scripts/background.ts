import { Engine, Scene, Color4, Vector3, Mesh, StandardMaterial, ArcRotateCamera, Color3 } from "babylonjs";

const canvas: any = document.getElementsByTagName("canvas")[0];
const engine: Engine = new Engine(canvas);
const scene: Scene = new Scene(engine);
scene.clearColor = new Color4(0, 0, 0, 0);

const knot = Mesh.CreateTorusKnot("knot", 7, 17, 300, 10, 50, 50, scene);
knot.scaling = Vector3.Zero();
knot.receiveShadows = false;

const knotMat = new StandardMaterial("knotmat", scene);
knotMat.emissiveColor = Color3.FromHexString("#252525");
knotMat.wireframe = true;
knot.material = knotMat;

new ArcRotateCamera("camera", 0, Math.PI / 3, 500, knot.position, scene, true);

let doneScaling = false;
engine.runRenderLoop(() =>
{
   scene.render()

   knot.rotation.x += .0010;
   knot.rotation.y += .0010;
   knot.rotation.z += .0010;

   if (!doneScaling)
       if (knot.scaling.y >= 300)
           doneScaling = true;
       else
           knot.scaling = knot.scaling.add(new Vector3(1, 1, 1));
});

window.addEventListener("resize", engine.resize);