const defaults = require("./preloadbabylon").default;

const scene = new defaults.Scene(defaults.engine);
scene.clearColor = new defaults.Color4(0, 0, 0, 0);

const cube = defaults.MeshBuilder.CreateBox("cube", {}, scene);
cube.renderOutline = true;
cube.outlineWidth = .5;
cube.outlineColor = defaults.Color3.FromHexString("#FAC9B8");

const cubeMat = new defaults.StandardMaterial("cubemat", scene);
cubeMat.emissiveColor = defaults.Color3.FromHexString("#495159");
cube.material = cubeMat;

const camera = new defaults.FreeCamera("camera", new defaults.Vector3(0, 0, -5), scene);
camera.target = cube.position;

const inc = .0075;
defaults.engine.runRenderLoop(() =>
{
    scene.render();

    cube.rotate(defaults.Axis.Y, inc, defaults.Space.LOCAL)
    cube.rotate(defaults.Axis.Z, inc / 2, defaults.Space.LOCAL)
});