import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import DDSLoader from './loaders/DDSLoader';
DDSLoader(THREE);
import MTLLoader from './loaders/MTLLoader';
MTLLoader(THREE);
import OBJLoader from './loaders/OBJLoader';
OBJLoader(THREE);

export default class Simple extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 50, 150);
    this.cameraRotation = new THREE.Euler(50, 0, 0);
    this.meshPosition = new THREE.Vector3(90, -250, 50);
    
    THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath( 'obj/male02/' );
    mtlLoader.load( 'male02_dds.mtl', (materials) => {
      materials.preload();
      var objLoader = new THREE.OBJLoader();
      objLoader.setMaterials( materials );
      objLoader.setPath( 'obj/male02/' );
      objLoader.load( 'male02.obj', (object) => {
        this.object = object;
        object.position.y = - 95;
        object.rotation.y = 50;
        this.scene.add(object);
      });
    });

    this._onAnimate = () => {
      this.object.rotation.y -= 0.015;
    };
  }

  render() {
    const width = 500; // canvas width
    const height = 500; // canvas height

    return (<React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}
      alpha={true}

      onAnimate={this._onAnimate}
    >
      <scene ref={(abc) => (this.scene = abc)}>
        <ambientLight
        />
        <directionalLight
          color={0xffeedd}
          position={new THREE.Vector3(0,0,1)}
        />
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}

          position={this.cameraPosition}
          rotation={this.cameraRotation}
        />
      </scene>
    </React3>);
  }
}
