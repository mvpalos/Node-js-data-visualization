import React, {Component} from 'react';
import * as THREE from 'three';

class SpinningBox extends Component{
    scene = new THREE.Scene();

componentDidMount(){
    const {width, height } = this.props
    const scene = new THREE.Scene(),
          camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000),
          renderer = new THREE.WebGLRenderer();

          renderer.setSize(width , height)
          this.refs.anchor.appendChild(renderer.domElement);

          window.addEventListener("load", function() {
			let width = window.innerWidth;
			let height = window.innerHeight;
			renderer.setSize(width, height);
			camera.aspect = width/height;
			// let controls = new THREE.OrbitControls(camera, renderer.domElement);
        });
        
        window.addEventListener("resize", function() {
			let width = window.innerWidth;
			let height = window.innerHeight;
			renderer.setSize(width, height);
			camera.aspect = width/height;
		});

          const geometry = new THREE.BoxGeometry(2, 2, 2),
                material = new THREE.MeshBasicMaterial({color: 0x2DFDB9, wireframe: true}),
                cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        camera.position.z = 5;

        function gameLoop(){
            requestAnimationFrame(gameLoop);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
            
        }

        gameLoop();


}
    render(){
        const {width, height} = this.props;
         return(
            <div class = 'canvas'>
              <div ref = 'anchor' />
            </div>    
        )
    }
}
export default SpinningBox;

