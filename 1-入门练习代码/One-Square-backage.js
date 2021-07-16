//场景-----------------------
var scene = new THREE.Scene();
//	 --------------------------

// 摄像机---------------------
var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);
// --------------------------

// 渲染器--------------------
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 设置渲染器渲染阴影效果
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
// 渲染器 end----------------

// 坐标轴--------------------
var axes = new THREE.AxesHelper(20);
scene.add(axes);
// -------------------------

// 平面---------------------
var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
var planeMaterial = new THREE.MeshLambertMaterial({
  color: 0xcccccc,
});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane);

// 设置投影
plane.receiveShadow = true;
// --------------------------

// 物体----------------------
var geometry = new THREE.BoxGeometry(4, 4, 4);
var material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
});
var cube = new THREE.Mesh(geometry, material);
cube.position.x = 0;
cube.position.y = 2;
cube.position.z = 0;

// 设置投影
cube.castShadow = true;
scene.add(cube);
// 物体 end ------------------

// 光源-----------------------
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 60, -10);
scene.add(spotLight);

// 设置投影
spotLight.castShadow = true;
// 光源 end -------------------

// 状态监视器-------------------
var stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);
// 状态监视器 end --------------

renderer.render(scene, camera);
