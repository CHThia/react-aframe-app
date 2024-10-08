import 'aframe';
import Box from "../src/assets/slide-box.glb"
import Ball from "../src/assets/ball.obj"
import BallMaterial from "../src/assets/ball.mtl"


export default function App() {
  return (
    <>
      <div className="App">

        <a-scene xr-mode-ui="enabled: true"> 

        {/* <a-sphere position="0 1 -3" radius="0.75" color="#EF2D5E"></a-sphere> */}
        
        <a-assets>
          <a-asset-item id="box" src={ Box }></a-asset-item>
          <a-asset-item id="ball-obj" src={ Ball }></a-asset-item>
          <a-asset-item id="ball-mtl" src={ BallMaterial }></a-asset-item>
        </a-assets>
        

        <a-sky color="#bfdbff"></a-sky>
        <a-gltf-model src="#box" scale="0.5 0.15 0.15" position="0 0 -4" ></a-gltf-model>
        <a-obj-model src="#ball-obj" mtl="#ball-mtl" scale="0.3 0.3 0.3" position="0 0 -4" ></a-obj-model>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" ></a-plane>


        <a-entity light="type: ambient; color: #BBB" position="0 2.5 0"></a-entity>
        <a-entity light="type: point; intensity: 1; distance: 80; decay: 1" position="10 30 10" ></a-entity>

        </a-scene>

      </div>
    </>
  );
};
