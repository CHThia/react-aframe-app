import 'aframe';
// import Box from "../src/assets/slide-box.glb"
// import Ball from "../src/assets/ball.obj"
// import BallM from "../src/assets/ball.mtl"


export default function App() {
  return (
    <>
      <div className="App">
        <a-scene>

        <a-sphere position="0 1 -3" radius="0.75" color="#EF2D5E"></a-sphere>
          
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        <a-sky color="#bfdbff"></a-sky>

          {/* <a-assets>
            <a-asset-item id="box" src={ Box }></a-asset-item>
            <a-asset-item id="ball-o" src={ Ball }></a-asset-item>
            <a-asset-item id="ball-m" src={ BallM }></a-asset-item>
          </a-assets>
          

          <a-entity gltf-model="#box" scale="0.5 0.15 0.15" position="0 0 -4"></a-entity>
          <a-entity obj-model="obj: #ball-o; mtl: #ball-m" scale="0.2 0.2 0.2" position="0 0 -4"></a-entity>

          <a-entity light="type: spot; intensity: 1" position="0 2.5 0"></a-entity> */}

        </a-scene>
      </div>
    </>
  );
};
