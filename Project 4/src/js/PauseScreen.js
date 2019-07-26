

class PauseScreen extends GraphicalObject {
	constructor (x,y,z,textureFilePath) {
		'use strict'
		super();
		let geometry = new THREE.PlaneGeometry( 100, 20, 32 );
		//let geometry = new THREE.BoxGeometry(100, 5, 100);
		let texture = new THREE.TextureLoader().load(textureFilePath);
		let material = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide} );
		texture.mapping = THREE.LinearFilter;
		material.map = texture;
        geometry.computeFaceNormals();
		
		let plane = new THREE.Mesh( geometry, material );
		plane.position.add(new THREE.Vector3(x,y,z));
		this.add(plane)
		//this.rotateY(Math.PI/2);
		//this..visible = false;
	}
	
}