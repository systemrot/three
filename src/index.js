import * as THREE from 'three';
import "./main.css";

// const scene = new THREE.Scene();

var camera, scene, renderer;
var geometry, material, mesh;
 
init();
animate();
 
function init() {
 
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
 
    scene = new THREE.Scene();
 
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();
 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
 
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    document.body.addEventListener("mousemove", (e) => {
    	// console.log(e.layerY / (window.innerHeight));
    	// console.log(camera);
    	console.log(camera.position.x);
    	// console.log(camera.position.y);
    	const halfWidth = window.innerWidth / 2;
    	// if(e.layerX > (halfWidth)){
    	// 	camera.position.y = e.layerX / window.innerWidth; 
    	// }else{
    	// 	camera.position.y = e.layerX / window.innerWidth;
    	// }
    	camera.position.z = 1 + e.layerY / window.innerHeight;
    })
 
}
 
function animate() {
 
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}