import * as THREE from 'three';

// scene
const scene = new THREE.Scene();

// mesh (geometry + material)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes
const sizes = {
    width: 800,
    height: 600
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);