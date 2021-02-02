import { Engine, Scene, Color3, Color4,
    FreeCamera, MeshBuilder, Vector3,
    StandardMaterial, Axis, Space } from "babylonjs";

const canvas = document.getElementById("cubecanvas");
const engine = new Engine(canvas);

window.addEventListener("resize", () =>
{
    engine.resize();
});

export default {
    canvas, engine, Engine, Scene, Color3, Color4,
    FreeCamera, MeshBuilder, Vector3,
    StandardMaterial, Axis, Space
}