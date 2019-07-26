class Scenery extends THREE.Scene {

    constructor() {
        super();
        this.frustumSize = 150;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.clock = new THREE.Clock();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.background = new THREE.Color(0x232323);
        this.createPerspectivePauseCamera();
        this.createPerspectiveCamera();
        this.createScene();
        this.createDirectionalLight();
        this.createPointLight();
        this.currCamera = this.Pcamera;
		this.createCameraControl();

		
		//this.currCamera = this.Pausecamera;
    }
	
    createScene() {

        this.board = this.createChessBoard();
        this.boardTex = this.board.material.map;
        this.add(this.board);
        this.test = this.board;
        this.floor = this.createFloor();
        this.add(this.floor);

        this.createWalls();
        this.ball = new Ball(0,0,0);
        this.ball.position.add( new THREE.Vector3(0,10,45));
        this.add(this.ball);
        
        this.cube = new MagicCube(0,18,0);
        this.add(this.cube);
        this.pauseScreen = new PauseScreen(0,0,0,"textures/pause2.png");
        this.pauseScreen.lookAt(0,0,0);
        this.Pausecamera.add(this.pauseScreen);
        this.pauseScreen.position.add(new THREE.Vector3(0,50,-100));
        this.pauseScreen.lookAt(this.Pausecamera.position);
        this.pauseScreen.visible = false;
        this.add(this.Pausecamera);
        //this.Pausecamera.add(new PauseScreen(10,0,0,"textures/pause.jpg"));
        //this.add(new PauseScreen(-150,300,-150,"textures/pause.jpg"));
        //this.pauseScreen.add(this.Pcamera);
        //this.Pcamera.children[0].position.add(new THREE.Vector3(0,0,0));
    }
	
	createCameraControl(){
		this.controls = new THREE.OrbitControls(this.Pcamera);
		this.controls.autoRotate = true;
	}
	

    createChessBoard() {

        let geo = new THREE.BoxGeometry(200, 5, 200);

        geo.normalsNeedUpdate = true;
        let mat = new THREE.MeshPhongMaterial({color: 0x303030});

        let texture = new THREE.TextureLoader().load("textures/CG1.jpg");
        // texture.wrapS = THREE.RepeatWrapping;
        // texture.wrapT = THREE.RepeatWrapping;
        geo.faceVertexUvs[0] = [];
        for (let i = 0; i < geo.faces.length; i+=2) {
            let p1 = new THREE.Vector2(0.9326, 0.0712);
            let p2 = new THREE.Vector2(1, 0.0712);
            let p3 = new THREE.Vector2(1, 0.9296);
            let p4 = new THREE.Vector2(0.9326, 0.9296);
            geo.faceVertexUvs[0][i] = [p1, p2, p4];
            geo.faceVertexUvs[0][i+1] = [p2, p3, p4];

        }
        // Map texture to upper face
        geo.faceVertexUvs[0][4][0].set(0, 1);
        geo.faceVertexUvs[0][4][1].set(0, 0);
        geo.faceVertexUvs[0][4][2].set(1, 1);
        geo.faceVertexUvs[0][5][0].set(0, 0);
        geo.faceVertexUvs[0][5][1].set(1, 0);
        geo.faceVertexUvs[0][5][2].set(1, 1);


        texture.minFilter = THREE.LinearFilter;
        mat.map = texture;

        mat.shininess = 30;
        mat.flatShading = THREE.SmoothShading;
        mat.needsUpdate = true;
        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);
        return obj;
    }

    createFloor() {

        let geo = new THREE.BoxGeometry(400, 1, 400);
        let mat = new THREE.MeshPhongMaterial({color: 0x727171});

        mat.shininess = 30;
        mat.flatShading = THREE.SmoothShading;
        mat.needsUpdate = true;
        geo.computeFaceNormals();
        let obj = new THREE.Mesh(geo, mat);
        obj.position.add(new THREE.Vector3(0, -3, 0));
        this.floor = obj;
        return obj;


    }

    createWalls() {

        let wallWidth = 400;
        let wallHeight = 100;
        let wallDepth = 1;
        let wallDistance = 200;

        // WALL 1
        let geo = new THREE.BoxGeometry(wallWidth, wallHeight, wallDepth);
        let mat = new THREE.MeshPhongMaterial({color: 0x383838});
        mat.shininess = 30;
        mat.flatShading = THREE.SmoothShading;
        mat.needsUpdate = true;
        geo.computeFaceNormals();
        let obj = new THREE.Mesh(geo, mat);
        obj.position.add(new THREE.Vector3(0, wallHeight/2 - 5, wallDistance));
        this.add(obj);
        this.wall1 = obj;

        // WALL 2
        let geo2 = new THREE.BoxGeometry(wallDepth, wallHeight, wallWidth);
        let mat2 = new THREE.MeshPhongMaterial({color: 0x383838});
        mat2.shininess = 30;
        mat2.flatShading = THREE.SmoothShading;
        mat2.needsUpdate = true;
        geo.computeFaceNormals();
        let obj2 = new THREE.Mesh(geo2, mat2);
        obj2.position.add(new THREE.Vector3(wallDistance, wallHeight/2 - 5, 0));
        this.add(obj2);
        this.wall2 = obj2;

        // WALL 3
        let geo3 = new THREE.BoxGeometry(wallWidth, wallHeight, wallDepth);
        let mat3 = new THREE.MeshPhongMaterial({color: 0x383838});
        mat3.shininess = 30;
        mat3.flatShading = THREE.SmoothShading;
        mat3.needsUpdate = true;
        geo3.computeFaceNormals();
        let obj3 = new THREE.Mesh(geo3, mat3);
        obj3.position.add(new THREE.Vector3(0, wallHeight/2 - 5, -wallDistance));
        this.add(obj3);
        this.wall3 = obj3;


        // WALL 4
        let geo4 = new THREE.BoxGeometry(wallDepth, wallHeight, wallWidth);
        let mat4 = new THREE.MeshPhongMaterial({color: 0x383838});
        mat4.shininess = 30;
        mat4.flatShading = THREE.SmoothShading;
        mat4.needsUpdate = true;
        geo.computeFaceNormals();
        let obj4 = new THREE.Mesh(geo4, mat4);
        obj4.position.add(new THREE.Vector3(-wallDistance, wallHeight/2 - 5, 0));

        this.add(obj4);
        this.wall4 = obj4;


    }


    moveCamera(x, y, z) {

        this.currCamera.position.x = x;
        this.currCamera.position.y = y;
        this.currCamera.position.z = z;
        this.currCamera.lookAt(this.position);
    }

    createPerspectiveCamera() {
		
        this.Pcamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
	
        this.Pcamera.position.x = -150;
        this.Pcamera.position.y = 150;
        this.Pcamera.position.z = 0;
        this.Pcamera.lookAt(new THREE.Vector3(0, 0, 0));
	

    }
    createPerspectivePauseCamera() {

        this.Pausecamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);

        this.Pausecamera.position.x = -170;
        this.Pausecamera.position.y = 135;
        this.Pausecamera.position.z = 173;
        this.Pausecamera.lookAt(new THREE.Vector3(0, 40, 0));

    }

    render() {

        this.renderer.render(this, this.currCamera);

    }

    moveCamera(x, y, z) {
        this.currCamera.position.x = x;
        this.currCamera.position.y = y;
        this.currCamera.position.z = z;
        this.currCamera.lookAt(this.position);
    }

    createDirectionalLight() {

        this.defaultIntensity_d = 0.75;
        this.distance = 80;

        this.directionalLight = new THREE.DirectionalLight(0xffffff, this.defaultIntensity_d);

        this.add(this.directionalLight);
        this.directionalLight.position.set(this.distance, this.distance, -this.distance);
        this.directionalLight.target = this.cube;
        let axisHelper = new THREE.AxisHelper(5);
        this.directionalLight.add(axisHelper);

    }

    createPointLight() {

        this.defaultIntensity_p = 1;
        this.pointLight = new THREE.PointLight(0xffffff, this.defaultIntensity_p);

        this.add(this.pointLight);
        this.pointLight.position.set(-35,60,35);

        let axisHelper = new THREE.AxisHelper(5);
        this.pointLight.add(axisHelper);
    }

    flipMaterial(){ //not working properly D:
        if (this.board.material instanceof THREE.MeshBasicMaterial && this.ball.sphere.children[0].material instanceof THREE.MeshBasicMaterial && this.cube.mesh.material instanceof THREE.MeshBasicMaterial){
            this.ball.sphere.children[0].material = new THREE.MeshPhongMaterial({color: 0xffffff, map: this.ball.texture});
            this.ball.sphere.children[0].material.shininess =100;
            this.cube.mesh.material = new THREE.MeshPhongMaterial({color: 0xffffff, map: this.cube.texture, bumpMap: this.cube.normal});
            this.board.material = new THREE.MeshLambertMaterial({color: 0x303030, map: this.boardTex});
            this.floor.material = new THREE.MeshPhongMaterial({color: 0x727171});
            this.wall1.material = new THREE.MeshPhongMaterial({color: 0x383838});
            this.wall2.material = new THREE.MeshPhongMaterial({color: 0x383838});
            this.wall3.material = new THREE.MeshPhongMaterial({color: 0x383838});
            this.wall4.material = new THREE.MeshPhongMaterial({color: 0x383838});
        } else {
            this.ball.sphere.children[0].material = new THREE.MeshBasicMaterial({color: 0xffffff});
            this.cube.mesh.material = new THREE.MeshBasicMaterial({color: 0xffffff});
            this.board.material = new THREE.MeshBasicMaterial({color: 0x303030});
            this.floor.material = new THREE.MeshBasicMaterial({color: 0x727171});
            this.wall1.material = new THREE.MeshBasicMaterial({color: 0x383838});
            this.wall2.material = new THREE.MeshBasicMaterial({color: 0x383838});
            this.wall3.material = new THREE.MeshBasicMaterial({color: 0x383838});
            this.wall4.material = new THREE.MeshBasicMaterial({color: 0x383838});
        }
    }

}

