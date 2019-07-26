class Scenery extends THREE.Scene {

    constructor() {
        super();
        this.frustumSize = 150;
		this.plane = new Plane();
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        this.clock = new THREE.Clock();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.createScene();
        //.createCamera();
        this.createPerspectiveCamera();
        this.createSpotLights();
        this.createDirectionalLight();
        this.currCamera = this.Pcamera;
    }

    getRandom(min, max) {
        'use strict'

        let r = Math.random();
        let interval = (max - min)
        interval = interval * r;
        return min + interval;
    }


    getVertexLog(geometry) {

        let str = [];

        str += ("let geo = new THREE.Geometry();\n");
        str += ("geo.normalsNeedUpdate = true;\n");
        str += ("let mat = new THREE.MeshPhongMaterial({color: 0xFFFFFF});\n");
        str += ("mat.shininess = 30;\n");
        str += ("mat.shading = THREE.SmoothShading;\n");
        str += ("mat.needsUpdate = true;\n");
        str += ("\n");
        geometry.vertices.forEach((vertex, index) => {

            str += ("let v" + index + " = new THREE.Vector3(" + vertex.x + ", " + vertex.y + ", " + vertex.z + ");\n");


        });
        str += ("\n");
        geometry.vertices.forEach((vertex, index) => {

            str += ("geo.vertices.push(v" + index + ");\n");

        });
        str += ("\n");

        geometry.faces.forEach((face, index) => {


            str += ("geo.faces.push( new THREE.Face3(" + face.a + ", " + face.b + ", " + face.c + "));\n");

        });
        str += ("\ngeo.computeFaceNormals();");

        str += ("\nlet obj = new THREE.Mesh(geo,mat);");

        return str
    }


    createScene() {
		
        this.add(this.plane);
		
        //PLACEHOLDER PARA AS LUZES TODO: REMOVER DEPOIS

        let cube = new THREE.Object3D();

        let geometry = new THREE.CubeGeometry(30, 50, 30);
        geometry.normalsNeedUpdate = true;

        let material = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
        // material.specular = 0x000000;
        material.shininess = 30;
        material.shading = THREE.SmoothShading;
        material.needsUpdate = true;


        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, 0, 0);
        cube.add(mesh);

        this.add(cube);
        cube.visible = false;
        this.cube = cube;

    }

    moveCamera(x, y, z) {

        this.currCamera.position.x = x;
        this.currCamera.position.y = y;
        this.currCamera.position.z = z;
        this.currCamera.lookAt(this.position);
    }


    createCamera() {

        let aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(this.frustumSize * aspect / -2, this.frustumSize * aspect / 2, this.frustumSize / 2, this.frustumSize / -2, 1, 1000);

        // camera = new THREE.OrthographicCamera( 45 / - 2, 45 / 2, 45 / 2, 45 / - 2, 1, 2000); //Ainda nao estao as 3 camaras,


        this.camera.position.x = 0;
        this.camera.position.y = 100;
        this.camera.position.z = 0;

        this.camera.lookAt(this.position);

    }

    createPerspectiveCamera() {

        this.Pcamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

        this.Pcamera.position.x = -250;
        this.Pcamera.position.y = 250;
        this.Pcamera.position.z = 0;
        this.Pcamera.lookAt(new THREE.Vector3(0, 0, 0));

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


    createSpotLights(){

        this.slights =  [];
        this.defaultIntensity_s = 0.8;
        this.slightBasePos = 60;
		let distance = 1000;


        this.slight1 = new THREE.SpotLight (0xffffff);
        this.slight1.position.set(this.slightBasePos, this.slightBasePos, this.slightBasePos);
        let holo1 = new Holofote(0xff00ff); // ROSA
		holo1.position.set(this.slightBasePos, this.slightBasePos, this.slightBasePos);
		holo1.lookAt(new THREE.Vector3(distance,-distance,distance));
        this.slight1.intensity = this.defaultIntensity_s;


        this.slight2 = new THREE. SpotLight (0xffffff);
        this.slight2.position.set(-this.slightBasePos, this.slightBasePos, this.slightBasePos);
        let holo2 = new Holofote(0xffff00); // AMARELO
		holo2.position.set(-this.slightBasePos, this.slightBasePos, this.slightBasePos);
		holo2.lookAt(new THREE.Vector3(-distance,-distance,distance));
        this.slight2.intensity = this.defaultIntensity_s;


        this.slight3 = new THREE. SpotLight (0xffffff);
        this.slight3.position.set(-this.slightBasePos, this.slightBasePos, -this.slightBasePos);
        let holo3 = new Holofote(0x0000ff); // AZUL
		holo3.position.set(-this.slightBasePos, this.slightBasePos,-this.slightBasePos);
		holo3.lookAt(new THREE.Vector3(-distance,-distance,-distance));
        this.slight3.intensity = this.defaultIntensity_s;


        this.slight4 = new THREE. SpotLight (0xffffff);
        this.slight4.position.set(this.slightBasePos, this.slightBasePos, -this.slightBasePos);
		let holo4 = new Holofote(0x00ff00); // VERDE
		holo4.position.set(this.slightBasePos, this.slightBasePos, -this.slightBasePos);
		holo4.lookAt(new THREE.Vector3(distance,-distance,-distance));
        this.slight4.intensity = this.defaultIntensity_s;


        //Add to scene
        this.add(this.slight1);
		this.add(holo1);
        this.add(this.slight2);
		this.add(holo2);
        this.add(this.slight3);
		this.add(holo3);
        this.add(this.slight4);
		this.add(holo4);

		//holo1.rotateY(Math.PI);
		//holo2.rotateY(Math.PI);
		//holo3.rotateY(Math.PI);
		//holo4.rotateY(Math.PI);
        //Push to list
        this.slights.push(this.slight1);
        this.slights.push(this.slight2);
        this.slights.push(this.slight3);
        this.slights.push(this.slight4);

        //Axis
		this.slights.forEach( slight => {
			//slight.add(new THREE.AxisHelper(20));
			slight.target = this.plane;
		});
	/*
        let axisHelper1 = new THREE.AxisHelper( 5 );
        this.slight1.add(axisHelper1);

        let axisHelper2 = new THREE.AxisHelper( 5 );
        this.slight2.add(axisHelper2);


        let axisHelper3 = new THREE.AxisHelper( 5 );
        this.slight3.add(axisHelper3);

        let axisHelper4 = new THREE.AxisHelper( 5 );
        this.slight4.add(axisHelper4);
	*/
    }

    createDirectionalLight(){

    this.defaultIntensity_d = 2;
    this.directionalLight = new THREE.DirectionalLight(0xffffff, this.defaultIntensity_d);

    this.add(this.directionalLight);
    this.directionalLight.position.set(-2*this.slightBasePos, 2*this.slightBasePos, 2*this.slightBasePos);

    let axisHelper = new THREE.AxisHelper(5);
    this.directionalLight.add(axisHelper);

    }

    slightToggle(i){
    if (this.slights[i-1].intensity === 0){
        this.slights[i-1].intensity = this.defaultIntensity_s;
    }else{
        this.slights[i-1].intensity = 0;
    }
}



  

    //TODO: Passar plane para classe!!


}

