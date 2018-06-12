import React, {Component} from 'react';
import * as THREE from 'three';

class Canvas extends Component{
    scene = new THREE.Scene();

componentDidMount(){
    const {width, height } = this.props
    const scene = new THREE.Scene(),
          camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000),
          renderer = new THREE.WebGLRenderer();

          renderer.setSize(width , height)
          this.refs.anchor.appendChild(renderer.domElement);

          const geometry = new THREE.BoxGeometry(1, 1, 1),
                material = new THREE.MeshBasicMaterial({color: 0x00ff00}),
                cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        camera.position.z = 5;

        renderer.render(scene, camera);
}
    render(){
        const {width, height} = this.props;
         return(
            <div>
              <div ref = 'anchor' style = {{width, height}} />
            </div>    
        )
    }
}
export default Canvas;

