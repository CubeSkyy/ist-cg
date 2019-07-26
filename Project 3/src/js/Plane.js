class Plane extends GraphicalObject {

    constructor() {
        super();

        this.upperWing = this.createUpperWing();
        this.lowerWing = this.createUpperWing();
        this.basePlane = this.createBasePlane();
        this.cockpit = this.createCockpit();
        this.propeller = this.createPlanePropeller();
        this.tail = this.createTail();
		
		this.container = new GraphicalObject();
        this.container.add(this.upperWing);
        this.container.add(this.lowerWing);
        this.container.add(this.basePlane);
        this.container.add(this.cockpit);
        this.container.add(this.propeller);
        this.container.add(this.tail);
		this.add(this.container);
		
        this.upperWing.position.add(new THREE.Vector3(-33,20,0));
        this.lowerWing.position.add(new THREE.Vector3(-33,-11,0));
        this.cockpit.position.add(new THREE.Vector3(0,19.8,0));
        this.propeller.position.add(new THREE.Vector3(-67,0,0));
        this.tail.position.add(new THREE.Vector3(36,20,0));

        //this.add(this.upperWing);
        //this.add(this.lowerWing);
        //this.add(this.basePlane);
        //this.add(this.cockpit);
        //this.add(this.propeller);
        //this.add(this.tail);

        //this.upperWing.position.add(new THREE.Vector3(-33, 20, 0));
        //this.lowerWing.position.add(new THREE.Vector3(-33, -11, 0));
        //this.cockpit.position.add(new THREE.Vector3(0, 19.8, 0));
        //this.propeller.position.add(new THREE.Vector3(-67, 0, 0));
        //this.tail.position.add(new THREE.Vector3(36, 20, 0));
    }

    flipMaterial(){
        if (this.upperWing.material instanceof THREE.MeshBasicMaterial){
            this.upperWing.material = new THREE.MeshStandardMaterial({color: 0x303030});
            this.lowerWing.material = new THREE.MeshStandardMaterial({color: 0x303030});
            this.basePlane.material = new THREE.MeshLambertMaterial({color: 0xA9A9A9});
            this.cockpit.material = new THREE.MeshStandardMaterial({color: 0x003366});
            this.propeller.material = new THREE.MeshStandardMaterial({color: 0x303030});
            this.tail.material = new THREE.MeshStandardMaterial({color: 0x8B0000});
        } else {
            this.upperWing.material = new THREE.MeshBasicMaterial({color: 0x303030});
            this.lowerWing.material = new THREE.MeshBasicMaterial({color: 0x303030});
            this.basePlane.material = new THREE.MeshBasicMaterial({color: 0xA9A9A9});
            this.cockpit.material = new THREE.MeshBasicMaterial({color: 0x003366});
            this.propeller.material = new THREE.MeshBasicMaterial({color: 0x303030});
            this.tail.material = new THREE.MeshBasicMaterial({color: 0x8B0000});
        }
    }

    createCockpit() {

        let cockpit = new THREE.Object3D();

        let front = this.createCockpitFront();
        let back = this.createCockpitBack();

        front.position.add(new THREE.Vector3(-43.7, 0, 0));
        back.position.add(new THREE.Vector3(-24, -0.2, 0));

        cockpit.add(front);
        cockpit.add(back);

        return cockpit;

    }


    createUpperWing() {
        let geo = new THREE.Geometry();

        geo.normalsNeedUpdate = true;

        let mat = new THREE.MeshStandardMaterial({color: 0x303030});
        mat.shininess = 30;

        mat.shading = THREE.SmoothShading;

        mat.needsUpdate = true;


        let v0 = new THREE.Vector3(15.0, 2.5, -50.0);
        let v1 = new THREE.Vector3(15.0, -2.5, -50.0);
        let v2 = new THREE.Vector3(15.0, 2.5, 50.0);
        let v3 = new THREE.Vector3(15.04, -2.5, 50.0);
        let v4 = new THREE.Vector3(-15.0, 2.5, -50.0);
        let v5 = new THREE.Vector3(-15.0, -2.5, -50.0);
        let v6 = new THREE.Vector3(-14.96, 2.5, 50.0);
        let v7 = new THREE.Vector3(-14.96, -2.5, 50.0);
        let v8 = new THREE.Vector3(15.04, 2.5, 50.0);
        let v9 = new THREE.Vector3(-12.0, -2.5, 54.0);
        let v10 = new THREE.Vector3(12.0, -2.5, 54.0);
        let v11 = new THREE.Vector3(-12.0, 2.5, 54.0);
        let v12 = new THREE.Vector3(12.0, 2.5, 54.0);
        let v13 = new THREE.Vector3(12.0, 2.5, -54.0);
        let v14 = new THREE.Vector3(12.0, -2.5, -54.0);
        let v15 = new THREE.Vector3(-12.0, 2.5, -54.0);
        let v16 = new THREE.Vector3(-12.0, -2.5, -54.0);
        let v17 = new THREE.Vector3(-5.2, -2.5, 56.5);
        let v18 = new THREE.Vector3(5.2, -2.5, 56.5);
        let v19 = new THREE.Vector3(-5.2, 2.5, 56.5);
        let v20 = new THREE.Vector3(5.2, 2.5, 56.5);
        let v21 = new THREE.Vector3(5.2, 2.5, -56.5);
        let v22 = new THREE.Vector3(5.2, -2.5, -56.5);
        let v23 = new THREE.Vector3(-5.2, 2.5, -56.5);
        let v24 = new THREE.Vector3(-5.2, -2.5, -56.5);


        geo.vertices.push(v0);
        geo.vertices.push(v1);
        geo.vertices.push(v2);
        geo.vertices.push(v3);
        geo.vertices.push(v4);
        geo.vertices.push(v5);
        geo.vertices.push(v6);
        geo.vertices.push(v7);
        geo.vertices.push(v8);
        geo.vertices.push(v9);
        geo.vertices.push(v10);
        geo.vertices.push(v11);
        geo.vertices.push(v12);
        geo.vertices.push(v13);
        geo.vertices.push(v14);
        geo.vertices.push(v15);
        geo.vertices.push(v16);
        geo.vertices.push(v17);
        geo.vertices.push(v18);
        geo.vertices.push(v19);
        geo.vertices.push(v20);
        geo.vertices.push(v21);
        geo.vertices.push(v22);
        geo.vertices.push(v23);
        geo.vertices.push(v24);


        geo.faces.push(new THREE.Face3(5, 1, 3));
        geo.faces.push(new THREE.Face3(3, 7, 5));
        geo.faces.push(new THREE.Face3(7, 6, 4));
        geo.faces.push(new THREE.Face3(4, 5, 7));
        geo.faces.push(new THREE.Face3(0, 4, 6));
        geo.faces.push(new THREE.Face3(6, 2, 0));
        geo.faces.push(new THREE.Face3(1, 0, 2));
        geo.faces.push(new THREE.Face3(2, 3, 1));
        geo.faces.push(new THREE.Face3(4, 0, 13));
        geo.faces.push(new THREE.Face3(13, 15, 4));
        geo.faces.push(new THREE.Face3(8, 6, 11));
        geo.faces.push(new THREE.Face3(11, 12, 8));
        geo.faces.push(new THREE.Face3(9, 10, 18));
        geo.faces.push(new THREE.Face3(18, 17, 9));
        geo.faces.push(new THREE.Face3(10, 3, 8));
        geo.faces.push(new THREE.Face3(7, 3, 10));
        geo.faces.push(new THREE.Face3(10, 9, 7));
        geo.faces.push(new THREE.Face3(11, 7, 9));
        geo.faces.push(new THREE.Face3(14, 16, 24));
        geo.faces.push(new THREE.Face3(24, 22, 14));
        geo.faces.push(new THREE.Face3(5, 4, 16));
        geo.faces.push(new THREE.Face3(14, 13, 1));
        geo.faces.push(new THREE.Face3(1, 5, 16));
        geo.faces.push(new THREE.Face3(16, 14, 1));
        geo.faces.push(new THREE.Face3(18, 20, 17));
        geo.faces.push(new THREE.Face3(10, 12, 18));
        geo.faces.push(new THREE.Face3(19, 9, 17));
        geo.faces.push(new THREE.Face3(12, 11, 19));
        geo.faces.push(new THREE.Face3(19, 20, 12));
        geo.faces.push(new THREE.Face3(21, 24, 23));
        geo.faces.push(new THREE.Face3(15, 13, 21));
        geo.faces.push(new THREE.Face3(21, 23, 15));
        geo.faces.push(new THREE.Face3(16, 15, 24));
        geo.faces.push(new THREE.Face3(22, 21, 14));
        geo.faces.push(new THREE.Face3(16, 4, 15));
        geo.faces.push(new THREE.Face3(24, 15, 23));
        geo.faces.push(new THREE.Face3(22, 24, 21));
        geo.faces.push(new THREE.Face3(14, 21, 13));
        geo.faces.push(new THREE.Face3(1, 13, 0));
        geo.faces.push(new THREE.Face3(10, 8, 12));
        geo.faces.push(new THREE.Face3(20, 18, 12));
        geo.faces.push(new THREE.Face3(19, 17, 20));
        geo.faces.push(new THREE.Face3(9, 19, 11));
        geo.faces.push(new THREE.Face3(7, 11, 6));

        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);

        return obj

    }

    createPlanePropeller() {

        let obj = new THREE.Object3D();
        let base = this.createPropellerBase();
        let upperPropeller = this.createUpperPropeller();
        let lowerPropeller = this.createLowerPropeller();

        obj.add(base);
        obj.add(upperPropeller);
        upperPropeller.position.add(new THREE.Vector3(0, 2.3, 0));
        obj.add(lowerPropeller);
        lowerPropeller.position.add(new THREE.Vector3(0, -9.6, 0));

        return obj;

    }

    createTail() {

        let tail = new THREE.Object3D()

        let horizontalTail = this.createHorizontalTail();
        let verticalTail = this.createVerticalTail();

        tail.add(horizontalTail);
        tail.add(verticalTail);
        verticalTail.position.add(new THREE.Vector3(0, -5.6, 0));

        return tail;
    }

    createBasePlane() {
        let geo = new THREE.Geometry();

        geo.normalsNeedUpdate = true;

        let mat = new THREE.MeshLambertMaterial({color: 0xA9A9A9});
        mat.shininess = 30;

        mat.shading = THREE.SmoothShading;

        mat.needsUpdate = true;


        let v0 = new THREE.Vector3(-53.87, -10.0, 10.0);
        let v1 = new THREE.Vector3(-53.87, 10.0, 10.0);
        let v2 = new THREE.Vector3(-53.87, -10.0, -10.0);
        let v3 = new THREE.Vector3(-53.87, 10.0, -10.0);
        let v4 = new THREE.Vector3(52.45, -4.15, 4.15);
        let v5 = new THREE.Vector3(52.45, 4.15, 4.15);
        let v6 = new THREE.Vector3(52.45, -4.15, -4.15);
        let v7 = new THREE.Vector3(52.45, 4.15, -4.15);
        let v8 = new THREE.Vector3(16.95, -9.36, -9.36);
        let v9 = new THREE.Vector3(16.95, 9.36, -9.36);
        let v10 = new THREE.Vector3(16.95, -9.36, 9.36);
        let v11 = new THREE.Vector3(16.95, 9.36, 9.36);
        let v12 = new THREE.Vector3(-65.4, 0.5, -8.4);
        let v13 = new THREE.Vector3(-65.4, 7.75, -4.21);
        let v14 = new THREE.Vector3(-65.4, 7.75, 4.16);
        let v15 = new THREE.Vector3(-65.4, 0.5, 8.34);
        let v16 = new THREE.Vector3(-65.4, -6.75, 4.16);
        let v17 = new THREE.Vector3(-65.4, -6.75, -4.21);
        let v18 = new THREE.Vector3(-53.87, 10.0, 10.0);
        let v19 = new THREE.Vector3(16.95, 9.36, 9.36);
        let v20 = new THREE.Vector3(-53.87, 10.0, 10.0);
        let v21 = new THREE.Vector3(-53.87, 10.0, -10.0);
        let v22 = new THREE.Vector3(16.95, 9.36, 9.36);
        let v23 = new THREE.Vector3(16.95, 9.36, -9.36);
        let v24 = new THREE.Vector3(-53.87, 10.0, 10.0);
        let v25 = new THREE.Vector3(-53.87, 10.0, -10.0);
        let v26 = new THREE.Vector3(16.95, 9.36, 9.36);
        let v27 = new THREE.Vector3(16.95, 9.36, -9.36);


        geo.vertices.push(v0);
        geo.vertices.push(v1);
        geo.vertices.push(v2);
        geo.vertices.push(v3);
        geo.vertices.push(v4);
        geo.vertices.push(v5);
        geo.vertices.push(v6);
        geo.vertices.push(v7);
        geo.vertices.push(v8);
        geo.vertices.push(v9);
        geo.vertices.push(v10);
        geo.vertices.push(v11);
        geo.vertices.push(v12);
        geo.vertices.push(v13);
        geo.vertices.push(v14);
        geo.vertices.push(v15);
        geo.vertices.push(v16);
        geo.vertices.push(v17);
        geo.vertices.push(v18);
        geo.vertices.push(v19);
        geo.vertices.push(v20);
        geo.vertices.push(v21);
        geo.vertices.push(v22);
        geo.vertices.push(v23);
        geo.vertices.push(v24);
        geo.vertices.push(v25);
        geo.vertices.push(v26);
        geo.vertices.push(v27);


        geo.faces.push(new THREE.Face3(6, 7, 5));
        geo.faces.push(new THREE.Face3(5, 4, 6));
        geo.faces.push(new THREE.Face3(10, 11, 1));
        geo.faces.push(new THREE.Face3(1, 0, 10));
        geo.faces.push(new THREE.Face3(8, 9, 7));
        geo.faces.push(new THREE.Face3(7, 6, 8));
        geo.faces.push(new THREE.Face3(3, 1, 20));
        geo.faces.push(new THREE.Face3(20, 21, 3));
        geo.faces.push(new THREE.Face3(8, 6, 4));
        geo.faces.push(new THREE.Face3(4, 10, 8));
        geo.faces.push(new THREE.Face3(2, 8, 10));
        geo.faces.push(new THREE.Face3(10, 0, 2));
        geo.faces.push(new THREE.Face3(7, 9, 11));
        geo.faces.push(new THREE.Face3(11, 5, 7));
        geo.faces.push(new THREE.Face3(2, 3, 9));
        geo.faces.push(new THREE.Face3(9, 8, 2));
        geo.faces.push(new THREE.Face3(4, 5, 11));
        geo.faces.push(new THREE.Face3(11, 10, 4));
        geo.faces.push(new THREE.Face3(14, 1, 3));
        geo.faces.push(new THREE.Face3(3, 13, 14));
        geo.faces.push(new THREE.Face3(14, 15, 1));
        geo.faces.push(new THREE.Face3(15, 0, 1));
        geo.faces.push(new THREE.Face3(15, 16, 0));
        geo.faces.push(new THREE.Face3(17, 2, 0));
        geo.faces.push(new THREE.Face3(0, 16, 17));
        geo.faces.push(new THREE.Face3(17, 12, 2));
        geo.faces.push(new THREE.Face3(13, 3, 12));
        geo.faces.push(new THREE.Face3(12, 3, 2));
        geo.faces.push(new THREE.Face3(15, 14, 16));
        geo.faces.push(new THREE.Face3(16, 14, 17));
        geo.faces.push(new THREE.Face3(14, 13, 17));
        geo.faces.push(new THREE.Face3(12, 17, 13));
        geo.faces.push(new THREE.Face3(11, 1, 18));
        geo.faces.push(new THREE.Face3(18, 19, 11));
        geo.faces.push(new THREE.Face3(1, 11, 22));
        geo.faces.push(new THREE.Face3(22, 20, 1));
        geo.faces.push(new THREE.Face3(11, 9, 23));
        geo.faces.push(new THREE.Face3(23, 22, 11));
        geo.faces.push(new THREE.Face3(9, 3, 21));
        geo.faces.push(new THREE.Face3(21, 23, 9));
        geo.faces.push(new THREE.Face3(3, 9, 27));
        geo.faces.push(new THREE.Face3(27, 25, 3));
        geo.faces.push(new THREE.Face3(26, 24, 25));
        geo.faces.push(new THREE.Face3(25, 27, 26));
        geo.faces.push(new THREE.Face3(1, 3, 25));
        geo.faces.push(new THREE.Face3(25, 24, 1));
        geo.faces.push(new THREE.Face3(11, 1, 24));
        geo.faces.push(new THREE.Face3(24, 26, 11));
        geo.faces.push(new THREE.Face3(9, 11, 26));
        geo.faces.push(new THREE.Face3(26, 27, 9));

        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);
        return obj
    }

    createCockpitBack() {
        let geo = new THREE.Geometry();

        geo.normalsNeedUpdate = true;

        let mat = new THREE.MeshStandardMaterial({color: 0x003366});
        mat.shininess = 30;

        mat.shading = THREE.SmoothShading;

        mat.needsUpdate = true;


        let v0 = new THREE.Vector3(40.73, -10.33, -9.38);
        let v1 = new THREE.Vector3(40.91, -10.3, 9.32);
        let v2 = new THREE.Vector3(-10.16, -9.84, -9.9);
        let v3 = new THREE.Vector3(-10.01, 1.23, -9.9);
        let v4 = new THREE.Vector3(-10.16, -9.84, 9.9);
        let v5 = new THREE.Vector3(-10.01, 1.23, 9.9);


        geo.vertices.push(v0);
        geo.vertices.push(v1);
        geo.vertices.push(v2);
        geo.vertices.push(v3);
        geo.vertices.push(v4);
        geo.vertices.push(v5);


        geo.faces.push(new THREE.Face3(0, 2, 3));
        geo.faces.push(new THREE.Face3(4, 5, 3));
        geo.faces.push(new THREE.Face3(3, 2, 4));
        geo.faces.push(new THREE.Face3(4, 1, 5));
        geo.faces.push(new THREE.Face3(1, 4, 2));
        geo.faces.push(new THREE.Face3(2, 0, 1));
        geo.faces.push(new THREE.Face3(0, 3, 5));
        geo.faces.push(new THREE.Face3(5, 1, 0));

        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);

        return obj;
    }

    createCockpitFront() {

        let geo = new THREE.Geometry();

        geo.normalsNeedUpdate = true;

        let mat = new THREE.MeshStandardMaterial({color: 0x003366});

        mat.shininess = 30;

        mat.shading = THREE.SmoothShading;

        mat.needsUpdate = true;


        let v0 = new THREE.Vector3(-10.1, -9.9, 9.9);
        let v1 = new THREE.Vector3(-3.81, -2.49, 9.9);
        let v2 = new THREE.Vector3(-10.1, -9.9, -9.9);
        let v3 = new THREE.Vector3(-3.81, -2.49, -9.9);
        let v4 = new THREE.Vector3(9.9, -10.1, 9.9);
        let v5 = new THREE.Vector3(10.1, 0.65, 9.9);
        let v6 = new THREE.Vector3(9.9, -10.1, -9.9);
        let v7 = new THREE.Vector3(10.1, 0.65, -9.9);


        geo.vertices.push(v0);
        geo.vertices.push(v1);
        geo.vertices.push(v2);
        geo.vertices.push(v3);
        geo.vertices.push(v4);
        geo.vertices.push(v5);
        geo.vertices.push(v6);
        geo.vertices.push(v7);


        geo.faces.push(new THREE.Face3(0, 1, 3));
        geo.faces.push(new THREE.Face3(3, 2, 0));
        geo.faces.push(new THREE.Face3(2, 3, 7));
        geo.faces.push(new THREE.Face3(7, 6, 2));
        geo.faces.push(new THREE.Face3(6, 7, 5));
        geo.faces.push(new THREE.Face3(5, 4, 6));
        geo.faces.push(new THREE.Face3(4, 5, 1));
        geo.faces.push(new THREE.Face3(1, 0, 4));
        geo.faces.push(new THREE.Face3(2, 6, 4));
        geo.faces.push(new THREE.Face3(4, 0, 2));
        geo.faces.push(new THREE.Face3(7, 3, 1));
        geo.faces.push(new THREE.Face3(1, 5, 7));

        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);

        return obj;
    }

    createPropellerBase() {
        let geo = new THREE.Geometry();

        geo.normalsNeedUpdate = true;

        let mat = new THREE.MeshPhongMaterial({color: 0x303030});
        mat.shininess = 30;

        mat.shading = THREE.SmoothShading;

        mat.needsUpdate = true;


        let v0 = new THREE.Vector3(1.47, 1.47, -1.47);
        let v1 = new THREE.Vector3(1.47, -1.47, -1.47);
        let v2 = new THREE.Vector3(1.47, 1.47, 1.47);
        let v3 = new THREE.Vector3(1.47, -1.47, 1.47);
        let v4 = new THREE.Vector3(-0.83, 1.47, -1.47);
        let v5 = new THREE.Vector3(-0.83, -1.47, -1.47);
        let v6 = new THREE.Vector3(-0.83, 1.47, 1.47);
        let v7 = new THREE.Vector3(-0.83, -1.47, 1.47);


        geo.vertices.push(v0);
        geo.vertices.push(v1);
        geo.vertices.push(v2);
        geo.vertices.push(v3);
        geo.vertices.push(v4);
        geo.vertices.push(v5);
        geo.vertices.push(v6);
        geo.vertices.push(v7);


        geo.faces.push(new THREE.Face3(0, 1, 3));
        geo.faces.push(new THREE.Face3(3, 2, 0));
        geo.faces.push(new THREE.Face3(2, 3, 7));
        geo.faces.push(new THREE.Face3(7, 6, 2));
        geo.faces.push(new THREE.Face3(6, 7, 5));
        geo.faces.push(new THREE.Face3(5, 4, 6));
        geo.faces.push(new THREE.Face3(4, 5, 1));
        geo.faces.push(new THREE.Face3(1, 0, 4));
        geo.faces.push(new THREE.Face3(2, 6, 4));
        geo.faces.push(new THREE.Face3(4, 0, 2));
        geo.faces.push(new THREE.Face3(7, 3, 1));
        geo.faces.push(new THREE.Face3(1, 5, 7));

        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);
        return obj
    }

    createLowerPropeller() {
        let geo = new THREE.Geometry();

        geo.normalsNeedUpdate = true;

        let mat = new THREE.MeshStandardMaterial({color: 0x303030});
        mat.shininess = 30;

        mat.shading = THREE.SmoothShading;

        mat.needsUpdate = true;


        let v0 = new THREE.Vector3(0.78, -0.86, 0.67);
        let v1 = new THREE.Vector3(0.78, 8.18, 0.67);
        let v2 = new THREE.Vector3(0.78, -0.86, -0.67);
        let v3 = new THREE.Vector3(0.78, 8.18, -0.67);
        let v4 = new THREE.Vector3(-0.78, -0.86, 0.67);
        let v5 = new THREE.Vector3(-0.78, 8.18, 0.67);
        let v6 = new THREE.Vector3(-0.78, -0.86, -0.67);
        let v7 = new THREE.Vector3(-0.78, 8.18, -0.67);


        geo.vertices.push(v0);
        geo.vertices.push(v1);
        geo.vertices.push(v2);
        geo.vertices.push(v3);
        geo.vertices.push(v4);
        geo.vertices.push(v5);
        geo.vertices.push(v6);
        geo.vertices.push(v7);


        geo.faces.push(new THREE.Face3(0, 1, 3));
        geo.faces.push(new THREE.Face3(3, 2, 0));
        geo.faces.push(new THREE.Face3(2, 3, 7));
        geo.faces.push(new THREE.Face3(7, 6, 2));
        geo.faces.push(new THREE.Face3(6, 7, 5));
        geo.faces.push(new THREE.Face3(5, 4, 6));
        geo.faces.push(new THREE.Face3(4, 5, 1));
        geo.faces.push(new THREE.Face3(1, 0, 4));
        geo.faces.push(new THREE.Face3(2, 6, 4));
        geo.faces.push(new THREE.Face3(4, 0, 2));
        geo.faces.push(new THREE.Face3(7, 3, 1));
        geo.faces.push(new THREE.Face3(1, 5, 7));

        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);
        return obj;

    }

    createUpperPropeller() {
        let geo = new THREE.Geometry();

        geo.normalsNeedUpdate = true;

        let mat = new THREE.MeshStandardMaterial({color: 0x303030});
        mat.shininess = 30;

        mat.shading = THREE.SmoothShading;

        mat.needsUpdate = true;


        let v0 = new THREE.Vector3(0.78, -0.86, 0.67);
        let v1 = new THREE.Vector3(0.78, 8.18, 0.67);
        let v2 = new THREE.Vector3(0.78, -0.86, -0.67);
        let v3 = new THREE.Vector3(0.78, 8.18, -0.67);
        let v4 = new THREE.Vector3(-0.78, -0.86, 0.67);
        let v5 = new THREE.Vector3(-0.78, 8.18, 0.67);
        let v6 = new THREE.Vector3(-0.78, -0.86, -0.67);
        let v7 = new THREE.Vector3(-0.78, 8.18, -0.67);


        geo.vertices.push(v0);
        geo.vertices.push(v1);
        geo.vertices.push(v2);
        geo.vertices.push(v3);
        geo.vertices.push(v4);
        geo.vertices.push(v5);
        geo.vertices.push(v6);
        geo.vertices.push(v7);


        geo.faces.push(new THREE.Face3(0, 1, 3));
        geo.faces.push(new THREE.Face3(3, 2, 0));
        geo.faces.push(new THREE.Face3(2, 3, 7));
        geo.faces.push(new THREE.Face3(7, 6, 2));
        geo.faces.push(new THREE.Face3(6, 7, 5));
        geo.faces.push(new THREE.Face3(5, 4, 6));
        geo.faces.push(new THREE.Face3(4, 5, 1));
        geo.faces.push(new THREE.Face3(1, 0, 4));
        geo.faces.push(new THREE.Face3(2, 6, 4));
        geo.faces.push(new THREE.Face3(4, 0, 2));
        geo.faces.push(new THREE.Face3(7, 3, 1));
        geo.faces.push(new THREE.Face3(1, 5, 7));

        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);

        return obj;
    }

    createHorizontalTail() {
        let geo = new THREE.Geometry();

        geo.normalsNeedUpdate = true;

        let mat = new THREE.MeshStandardMaterial({color: 0x8B0000});
        mat.shininess = 30;

        mat.shading = THREE.SmoothShading;

        mat.needsUpdate = true;

        let v0 = new THREE.Vector3(16.02, -21.78, 16.15);
        let v1 = new THREE.Vector3(5.05, -18.86, 16.15);
        let v2 = new THREE.Vector3(5.05, -21.78, 16.15);
        let v3 = new THREE.Vector3(16.01, -18.86, 16.15);
        let v4 = new THREE.Vector3(16.02, -18.86, 16.15);
        let v5 = new THREE.Vector3(13.14, -21.78, 19.42);
        let v6 = new THREE.Vector3(13.14, -18.86, 19.42);
        let v7 = new THREE.Vector3(7.93, -21.78, 19.42);
        let v8 = new THREE.Vector3(7.93, -18.86, 19.42);
        let v9 = new THREE.Vector3(5.04, -18.86, -16.28);
        let v10 = new THREE.Vector3(16.01, -18.86, -16.28);
        let v11 = new THREE.Vector3(16.01, -21.78, -16.28);
        let v12 = new THREE.Vector3(5.04, -21.78, -16.28);
        let v13 = new THREE.Vector3(13.15, -18.86, -18.91);
        let v14 = new THREE.Vector3(13.15, -21.78, -18.91);
        let v15 = new THREE.Vector3(7.9, -18.86, -18.91);
        let v16 = new THREE.Vector3(7.9, -21.78, -18.91);


        geo.vertices.push(v0);
        geo.vertices.push(v1);
        geo.vertices.push(v2);
        geo.vertices.push(v3);
        geo.vertices.push(v4);
        geo.vertices.push(v5);
        geo.vertices.push(v6);
        geo.vertices.push(v7);
        geo.vertices.push(v8);
        geo.vertices.push(v9);
        geo.vertices.push(v10);
        geo.vertices.push(v11);
        geo.vertices.push(v12);
        geo.vertices.push(v13);
        geo.vertices.push(v14);
        geo.vertices.push(v15);
        geo.vertices.push(v16);


        geo.faces.push(new THREE.Face3(12, 11, 0));
        geo.faces.push(new THREE.Face3(0, 2, 12));
        geo.faces.push(new THREE.Face3(2, 1, 9));
        geo.faces.push(new THREE.Face3(9, 12, 2));
        geo.faces.push(new THREE.Face3(10, 9, 1));
        geo.faces.push(new THREE.Face3(1, 3, 10));
        geo.faces.push(new THREE.Face3(11, 10, 3));
        geo.faces.push(new THREE.Face3(3, 0, 11));
        geo.faces.push(new THREE.Face3(2, 0, 5));
        geo.faces.push(new THREE.Face3(5, 7, 2));
        geo.faces.push(new THREE.Face3(7, 5, 6));
        geo.faces.push(new THREE.Face3(6, 8, 7));
        geo.faces.push(new THREE.Face3(1, 2, 7));
        geo.faces.push(new THREE.Face3(7, 8, 1));
        geo.faces.push(new THREE.Face3(11, 12, 16));
        geo.faces.push(new THREE.Face3(16, 14, 11));
        geo.faces.push(new THREE.Face3(14, 16, 15));
        geo.faces.push(new THREE.Face3(15, 13, 14));
        geo.faces.push(new THREE.Face3(9, 10, 13));
        geo.faces.push(new THREE.Face3(13, 15, 9));
        geo.faces.push(new THREE.Face3(12, 9, 15));
        geo.faces.push(new THREE.Face3(15, 16, 12));
        geo.faces.push(new THREE.Face3(10, 11, 14));
        geo.faces.push(new THREE.Face3(14, 13, 10));
        geo.faces.push(new THREE.Face3(1, 8, 6));
        geo.faces.push(new THREE.Face3(6, 4, 1));
        geo.faces.push(new THREE.Face3(5, 0, 4));
        geo.faces.push(new THREE.Face3(4, 6, 5));

        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);
        return obj;
    }

    createVerticalTail() {
        let geo = new THREE.Geometry();

        geo.normalsNeedUpdate = true;

        let mat = new THREE.MeshStandardMaterial({color: 0x8B0000});
        mat.shininess = 30;

        mat.shading = THREE.SmoothShading;

        mat.needsUpdate = true;


        let v0 = new THREE.Vector3(9.98, -9.32, 1.36);
        let v1 = new THREE.Vector3(-12.24, -6.05, 1.36);
        let v2 = new THREE.Vector3(9.98, -9.32, -1.36);
        let v3 = new THREE.Vector3(-12.24, -6.05, -1.36);
        let v4 = new THREE.Vector3(12.24, 6.05, 1.36);
        let v5 = new THREE.Vector3(12.24, 6.05, -1.36);


        geo.vertices.push(v0);
        geo.vertices.push(v1);
        geo.vertices.push(v2);
        geo.vertices.push(v3);
        geo.vertices.push(v4);
        geo.vertices.push(v5);


        geo.faces.push(new THREE.Face3(0, 1, 3));
        geo.faces.push(new THREE.Face3(3, 2, 0));
        geo.faces.push(new THREE.Face3(1, 0, 4));
        geo.faces.push(new THREE.Face3(3, 1, 4));
        geo.faces.push(new THREE.Face3(4, 5, 3));
        geo.faces.push(new THREE.Face3(2, 3, 5));
        geo.faces.push(new THREE.Face3(2, 5, 4));
        geo.faces.push(new THREE.Face3(4, 0, 2));

        geo.computeFaceNormals();

        let obj = new THREE.Mesh(geo, mat);
        return obj;
    }


    rotateOnGreen(keyword) {
        let increment = 0.02;

        if(keyword === "right"){
            this.rotateY(increment)
        }

        else if(keyword === "left")
            this.rotateY(-increment)
    }

    rotateOnBlue(keyword) {

        let axis = new THREE.Vector3(0, 0, 1);
        let angle = 0;
        let increment = 0.02;
        if(keyword === "up"){
            this.container.rotateOnAxis(axis, angle + increment)
        }

        else if(keyword === "down")
            this.container.rotateOnAxis(axis, angle - increment)
    }

    rotatePropeller(){
        let axis = new THREE.Vector3(1, 0, 0);
        let angle = 0;
        let increment = 0.2;

        this.propeller.rotateOnAxis(axis, angle + increment)


    }


}
