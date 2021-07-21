        var width = window.innerWidth
        var height = window.innerHeight

        var scene = new THREE.Scene()
        var camera = new THREE.PerspectiveCamera(50, width / height, 1, 4000)
        camera.position.z = 1000

        scene.add(camera)

        var stars = []
        var star
        var material

        for (var i = -1000; i < 1000; i += 20) {
            material = new THREE.ParticleCanvasMaterial({
                color: parseInt(getRandomColor(), 16),
                program: function (context) {
                    context.beginPath()
                    context.arc(0, 0, 10, 0, Math.PI * 2, true)
                    context.fill()
                }
            })

            star = new THREE.Particle(material)
            star.position.z = i
            star.position.x = Math.random() * 1000 - 500
            star.position.y = Math.random() * 1000 - 500
            stars.push(star)
            scene.add(star)
        }

        var renderer = new THREE.CanvasRenderer()
        renderer.setSize(width, height)
        document.body.appendChild(renderer.domElement)
        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {

            width = window.innerWidth
            height = window.innerHeight

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);

        }

        function getRandomColor() {
            var r = 255 * Math.random() | 0,
                g = 255 * Math.random() | 0,
                b = 255 * Math.random() | 0;

            return '0x' + parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16);
        }

        function render() {
            for (var i = 0; i < stars.length; i++) {
                stars[i].position.z += 5

                if (stars[i].position.z > 1000) {
                    stars[i].position.z -= 2000
                }
            }
            renderer.render(scene, camera)
        }

        function animation() {
            requestAnimationFrame(animation)
            render()
        }

        animation()