
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';

const width = window.innerWidth, height = window.innerHeight;

// scene
const scene = new THREE.Scene();

// mesh 1
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const texture1 = new THREE.TextureLoader().load('miso.png');
const material1 = new THREE.MeshLambertMaterial({ map: texture1 });
const mesh1 = new THREE.Mesh( geometry1, material1 );
mesh1.position.set(1, 0, -1);
scene.add( mesh1 );

// mesh 2
const mesh2 = new THREE.Mesh( geometry1, material1 );
mesh2.position.set(-1, 0, 0);
scene.add( mesh2 );

// mesh 0
const mesh0 = 
  new THREE.Mesh(
    new THREE.SphereGeometry(0.7),
    new THREE.MeshLambertMaterial()
  );
mesh0.position.set(-3, 0, 0);
scene.add( mesh0 );

// light
const pointLight = new THREE.PointLight();
pointLight.intensity = 200;
pointLight.position.set(0, 8, 4);
scene.add(pointLight);

const light1 = new THREE.AmbientLight(0xff0000);
const light2 = new THREE.AmbientLight("green");
const light3 = new THREE.AmbientLight(new THREE.Color(0,0,1));
const light4 = new THREE.AmbientLight(new THREE.Color(0xffff00));
const light5 = new THREE.AmbientLight(new THREE.Color("cyan"));
const light6 = new THREE.AmbientLight(new THREE.Color(new THREE.Color(1,0,1)));
// const light7 = new THREE.AmbientLight(1,1,1);  // not allowed
// const light8 = new THREE.AmbientLight((1,0,0));  // not allowed
scene.add(light6);

// camera
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.1, 100 );
camera.position.z = 6;

// renderer
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

// stats
const stats1 = new Stats();
stats1.dom.style.left = '300px';
document.body.appendChild( stats1.dom );
const stats2 = new Stats();
stats2.showPanel(1);
stats2.dom.style.left = '400px';
document.body.appendChild( stats2.dom );

// animation
function animate( time ) {
	mesh1.rotation.y = time / 1000;
  
  /*
	requestAnimationFrame( animate );
	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
  */

	renderer.render( scene, camera );
  
  stats1.update();
  stats2.update();
}

