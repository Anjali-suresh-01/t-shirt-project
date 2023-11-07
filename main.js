// Three.js code to create a 3D T-shirt
// This code creates a 3D T-shirt model and allows users to adjust its scale and rotation

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a T-shirt geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a T-shirt material
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

// Create a T-shirt mesh
const tshirt = new THREE.Mesh(geometry, material);
scene.add(tshirt);

// Add event listeners to adjust the scale and rotation of the T-shirt
document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37: // left arrow
      tshirt.rotation.y += 0.1;
      break;
    case 38: // up arrow
      tshirt.scale.x += 0.1;
      tshirt.scale.y += 0.1;
      tshirt.scale.z += 0.1;
      break;
    case 39: // right arrow
      tshirt.rotation.y -= 0.1;
      break;
    case 40: // down arrow
      tshirt.scale.x -= 0.1;
      tshirt.scale.y -= 0.1;
      tshirt.scale.z -= 0.1;
      break;
  }
});

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
