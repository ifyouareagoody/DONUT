// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// DONUT
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

// DONUT YUMMY
const material = new THREE.MeshStandardMaterial({
    color: 0xA0522D,  
    roughness: 0.4,   
    metalness: 0.2    
});

// DONUT COOL
const donut = new THREE.Mesh(geometry, material);
scene.add(donut);

// lighting
const light = new THREE.PointLight(0xffffff, 2, 100);  // Increased intensity
light.position.set(20, 20, 20);
scene.add(light);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);  // Add soft ambient light
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 20, 10);
scene.add(directionalLight);

// camera pos
camera.position.z = 30;

// animation loop
function animate() {
    requestAnimationFrame(animate);

    // rotation
    donut.rotation.x += 0.01;
    donut.rotation.y += 0.01;

    // renderer
    renderer.render(scene, camera);
}

animate();

// window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

/*
I KNOW OKAY THIS PROJECT IS STUPID!  I have seen the original donut.c and the donut.js (remix) and this is literally the ripoff of the ripoff.
To anyone reading through my code, I just want to say WHY ARE YOU EVEN INTERESTED IN A SPINNING 3D DONUT!
And yes I just randomly thought of this and made it.  SO STOP LAUGHING AT ME!
*/