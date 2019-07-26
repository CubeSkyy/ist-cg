class MagicCube extends GraphicalObject {

    constructor(x, y, z, color = 0xffffff) {
        super();
        this.color = color;
        this.width = 30;
        this.height = 30;
        this.depth = 30;
        /*
                let i;
                let materials = [];
                let textures = [];
                let bTexture = new THREE.TextureLoader().load("textures/bumpTexture.png");
                let texture1 = new THREE.TextureLoader().load("textures/texture1.png");
                let texture2 = new THREE.TextureLoader().load("textures/texture2.png");
                let texture3 = new THREE.TextureLoader().load("textures/texture3.png");
                let texture4 = new THREE.TextureLoader().load("textures/texture4.png");
                let texture5 = new THREE.TextureLoader().load("textures/texture5.png");
                textures.push(bTexture, texture1, texture2, texture3, texture4, texture5);

                for(i = 0; i < 6; i++) {
                    let material = new THREE.MeshStandardMaterial({color: this.color, map: textures[i], bumpMap: bTexture});
                    materials.push(material);
                }*/

        //posicao relativa dos cubos na imagem
        let redCube = [
            new THREE.Vector2(0.2540, 0.3364), // Ponto 255,250 na imagem de 766x1017
            new THREE.Vector2(0.5015, 0.3364),  // 766/1017 = 0.7532 etc
            new THREE.Vector2(0.5015, 0.6675),
            new THREE.Vector2(0.2540, 0.6675)
        ];


        let whiteCube = [
            new THREE.Vector2(0.2525, 0.6668),
            new THREE.Vector2(0.5015, 0.6668),
            new THREE.Vector2(0.5015, 1),
            new THREE.Vector2(0.2525, 1)
        ];

        let greenCube = [
            new THREE.Vector2(0.0035, 0.3364),
            new THREE.Vector2(0.254, 0.3364),
            new THREE.Vector2(0.254, 0.6675),
            new THREE.Vector2(0.0035, 0.6675)
        ];

        let blueCube = [
            new THREE.Vector2(0.5015, 0.3364),
            new THREE.Vector2(0.7505, 0.3364),
            new THREE.Vector2(0.7505, 0.6675),
            new THREE.Vector2(0.5015, 0.6675)
        ];

        let yellowCube = [
            new THREE.Vector2(0.2540, 0.0053),
            new THREE.Vector2(0.5015, 0.0053),
            new THREE.Vector2(0.5015, 0.3364),
            new THREE.Vector2(0.2540, 0.3364)
        ];

        let orangeCube = [
            new THREE.Vector2(0.7505, 0.3364),
            new THREE.Vector2(0.998, 0.3364),
            new THREE.Vector2(0.998, 0.6675),
            new THREE.Vector2(0.7505, 0.6675)
        ];


        this.texture = new THREE.TextureLoader().load("textures/cube.png");
        this.normal = new THREE.TextureLoader().load("textures/normal.png");
        let material = new THREE.MeshPhongMaterial({color: this.color, map: this.texture, bumpMap: this.normal});
        this.texture.minFilter = THREE.LinearFilter;
        let geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
        let mesh = new THREE.Mesh(geometry, material);


        geometry.faceVertexUvs[0][0] = [redCube[0], redCube[1], redCube[3]];
        geometry.faceVertexUvs[0][1] = [redCube[1], redCube[2], redCube[3]];
        geometry.faceVertexUvs[0][2] = [whiteCube[0], whiteCube[1], whiteCube[3]];
        geometry.faceVertexUvs[0][3] = [whiteCube[1], whiteCube[2], whiteCube[3]];
        geometry.faceVertexUvs[0][4] = [greenCube[0], greenCube[1], greenCube[3]];
        geometry.faceVertexUvs[0][5] = [greenCube[1], greenCube[2], greenCube[3]];
        geometry.faceVertexUvs[0][6] = [blueCube[0], blueCube[1], blueCube[3]];
        geometry.faceVertexUvs[0][7] = [blueCube[1], blueCube[2], blueCube[3]];
        geometry.faceVertexUvs[0][8] = [yellowCube[0], yellowCube[1], yellowCube[3]];
        geometry.faceVertexUvs[0][9] = [yellowCube[1], yellowCube[2], yellowCube[3]];
        geometry.faceVertexUvs[0][10] = [orangeCube[0], orangeCube[1], orangeCube[3]];
        geometry.faceVertexUvs[0][11] = [orangeCube[1], orangeCube[2], orangeCube[3]];

        mesh.position.set(x, y, z);
        this.mesh = mesh;
        //mesh.add(new THREE.AxisHelper(20));
        this.add(mesh);
    }


}