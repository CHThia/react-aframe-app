import 'aframe';
import Box from "../src/assets/slide-box.glb"
import Ball from "../src/assets/ball.glb"


export default function App() {
  return (
    <>
      <div className="App">
        <a-scene>
          
          <a-assets>
            <a-asset-item id="box" src={ Box }></a-asset-item>
            <a-asset-item id="ball" src={ Ball }></a-asset-item>
          </a-assets>
          
          <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
          <a-sky color="#bfdbff"></a-sky>

          <a-entity gltf-model="#box" scale="0.5 0.15 0.15" position="0 0 -4"></a-entity>
          <a-entity gltf-model="#ball" scale="0.2 0.2 0.2" position="0 0 -4"></a-entity>

          <a-entity light="type: spot; intensity: 1" position="0 2.5 0"></a-entity>

        </a-scene>
      </div>
    </>
  );
};
