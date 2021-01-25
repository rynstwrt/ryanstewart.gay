"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = require("babylonjs");
var canvas = document.getElementsByTagName("canvas")[0];
var engine = new babylonjs_1.Engine(canvas);
var scene = new babylonjs_1.Scene(engine);
scene.clearColor = new babylonjs_1.Color4(0, 0, 0, 0);
var knot = babylonjs_1.Mesh.CreateTorusKnot("knot", 7, 17, 1000, 10, 50, 50, scene);
knot.scaling = babylonjs_1.Vector3.Zero();
knot.receiveShadows = false;
var knotMat = new babylonjs_1.StandardMaterial("knotmat", scene);
knotMat.emissiveColor = babylonjs_1.Color3.FromHexString("#252525");
knotMat.wireframe = true;
knot.material = knotMat;
new babylonjs_1.ArcRotateCamera("camera", 0, Math.PI / 3, 500, knot.position, scene, true);
var doneScaling = false;
var doneFirstPopup = false;
var doneSecondPopup = false;
engine.runRenderLoop(function () {
    scene.render();
    knot.rotation.x += .0010;
    knot.rotation.y += .0010;
    knot.rotation.z += .0010;
    if (!doneScaling) {
        if (knot.scaling.y >= 150) {
            if (!doneFirstPopup) {
                doneFirstPopup = true;
                document.getElementById("welcome").style.transform = "scale(1)";
            }
        }
        if (knot.scaling.y >= 275) {
            if (!doneSecondPopup) {
                doneSecondPopup = true;
                document.getElementById("welcome2").style.transform = "scale(1)";
            }
        }
        if (knot.scaling.y >= 300)
            doneScaling = true;
        else
            knot.scaling = knot.scaling.add(new babylonjs_1.Vector3(1, 1, 1));
    }
});
//# sourceMappingURL=background.js.map