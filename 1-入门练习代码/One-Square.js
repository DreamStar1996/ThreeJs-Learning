      // 场景
      var scene = new THREE.Scene();

      // 摄像机
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // 渲染器
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document
          .body
          .appendChild(renderer.domElement);
      // 渲染器 end

      // 物体
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshLambertMaterial({
          color: 0x00ff00
      });
      var cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      // 物体 end

      //增加渲染代码,源渲染代码
      //renderer.render(scene, camera);
      //动态渲染，相机移动
      function animate() {
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
      }
      animate();

      // 光源
      var spotLight = new THREE.SpotLight(0xffffff);
      spotLight
          .position
          .set(-40, 60, -10);
      scene.add(spotLight);
      // 光源 end