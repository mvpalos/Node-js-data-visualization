import React, {Component} from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

class SpinningBox extends Component{
    scene = new THREE.Scene();

componentDidMount(){

        /*CREATING VIEW */
    const {width, height } = this.props
    const scene = new THREE.Scene(),
          camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000),
          renderer = new THREE.WebGLRenderer();

        /*BROWSER RESIZER */
          renderer.setSize(width , height)

          this.refs.anchor.appendChild(renderer.domElement);
          window.addEventListener("load", function() {
			let width = window.innerWidth;
			let height = window.innerHeight;
			renderer.setSize(width, height);
			camera.aspect = width/height;
		    let controls = new OrbitControls(camera, renderer.domElement);
        });
           window.addEventListener("resize", function() {
			let width = window.innerWidth;
			let height = window.innerHeight;
			renderer.setSize(width, height);
			camera.aspect = width/height;
		});
        /*SHAPE DETAILS */
          const geometry = new THREE.SphereGeometry(2, 32, 10),
                material = new THREE.MeshBasicMaterial({color: 0x2DFDB9, wireframe: true}),
                sphere = new THREE.Mesh(geometry, material);
            let light = new THREE.DirectionalLight(0Xffffff);
                light.position.set(0,1,1).normalize();

        scene.add(sphere, light);

        camera.position.z = 5;

        function gameLoop(){
            requestAnimationFrame(gameLoop);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;

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

