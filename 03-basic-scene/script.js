console.log("Hello");
console.log(THREE);

const canvas = document.querySelector('canvas.webgl');

// scene
const scene = new THREE.Scene();

// make red cube mesh (geometry + material)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const redCubeMesh = new THREE.Mesh(geometry, material);
scene.add(redCubeMesh); // always need to add mesh to the scene

// sizes
const sizes = {
    width: 800,
    height: 600
}

// camera (serves as point of view)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // parameters (vertical field of view amplitude, aspect ratio)
camera.position.z = 3; // move camera back 3 units (default is 0,0,0)
scene.add(camera); // always add camera to the scene

// renderer (renders the scene from camera POV into an HTML canvas element)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height); // set size of renderer

renderer.render(scene, camera);