var scenery;

var buttonUP, buttonDOWN, buttonLEFT, buttonRIGHT;
var moveBall = false;

var speedFactor = 1;

var wheelCamera = false;

var stateOfGame = false;
var wireframe = false;

function getRandom(min, max) {
    'use strict'

    let r = Math.random();
    let interval = (max - min)
    interval = interval * r;
    return min + interval;
}



function init() {
    scenery = new Scenery();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}


function animate() {
    'use strict';
	let delta = scenery.clock.getDelta();
	
		//Os eixos verde e azul da imagem do stor nao correspondem aos eixos do tree js .-. ptt fiz assim, mas idk
	scenery.ball.applyMovement(scenery.ball.updateMovement(delta));
	

    requestAnimationFrame(animate);
	scenery.controls.update(delta);
    scenery.render();



}


function onResize() {

    if (scenery.currCamera instanceof THREE.OrthographicCamera) {
        let aspect = window.innerWidth / window.innerHeight;
        scenery.currCamera.left = -scenery.frustumSize * aspect / 2;
        scenery.currCamera.right = scenery.frustumSize * aspect / 2;
        scenery.currCamera.top = scenery.frustumSize / 2;
        scenery.currCamera.bottom = -scenery.frustumSize / 2;
        scenery.currCamera.updateProjectionMatrix();
        scenery.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    if (scenery.currCamera instanceof THREE.PerspectiveCamera) {
        if (window.innerHeight > 0 && window.innerWidth > 0) {
            scenery.currCamera.aspect = window.innerWidth / window.innerHeight;
            scenery.currCamera.updateProjectionMatrix();
            scenery.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }

}


function onKeyUp(e) {
    switch (e.keyCode) {
        case 38:
            buttonUP = false;
            break;
        case 40:
            buttonDOWN = false;
            break;
        case 39:
            buttonRIGHT = false;
            break;
        case 37:
            buttonLEFT = false;
            break;
    }
}


function onKeyDown(e) {
    /*
    Arrow Type  Alt Code
    UP          38
    RIGHT       39
    DOWN        40
    LEFT        37
    1           49
    2           50
    3           51
    4           52
    */
    switch (e.keyCode) {
        case 38:
            buttonUP = true;
            break;
        case 40:
            buttonDOWN = true;
            break;
        case 39:
            buttonRIGHT = true;
            break;
        case 37:
            buttonLEFT = true;
            break;
		case 98:
		case 66://b
			scenery.ball.moving = !scenery.ball.moving;
			break;
        case 119: //w
        case 87: //W
            if(!wireframe){
                this.oldPIntensity = scenery.pointLight.intensity;
                this.oldDIntensity = scenery.directionalLight.intensity;
                scenery.pointLight.intensity = 0;
                scenery.directionalLight.intensity= 0;
                wireframe = true;
            }else{
                scenery.pointLight.intensity = this.oldPIntensity;
                scenery.directionalLight.intensity= this.oldDIntensity;
                wireframe = false;
            }

            scenery.traverse(function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            });


            break;
		case 115: //s
        case 83:  //S
            if (stateOfGame) {
                scenery.clock.start(); 
                scenery.currCamera = scenery.Pcamera;
                scenery.pauseScreen.visible = false;
            }
            else {
                scenery.clock.stop();
                scenery.currCamera = scenery.Pausecamera;
                scenery.pauseScreen.visible = true;
            }

			stateOfGame = !stateOfGame;

		break;
		case 82:
			if (stateOfGame) {
				while(scenery.children.length > 0){
					scenery.remove(scenery.children[0]);
				}
				scenery.createScene();
                scenery.createPerspectiveCamera();
                scenery.currCamera = scenery.Pcamera;
                scenery.createDirectionalLight();
                scenery.createPointLight();
                scenery.createCameraControl();
                scenery.controls.autoRotate = true;
                scenery.clock.start();
                stateOfGame = !stateOfGame;
			}
		break;
        case 101:  //e
        case 69: //E
            //     scenery.traverse(function (node) {
            //         if(node instanceof Ball){
            //             node.traverse(function (e){
            //                 if (e instanceof THREE.AxisHelper) {
            //                     e.visible = !e.visible;
            //                 }
            //             });
            //         }
            //     });
            break;



        case  53: // 5

            scenery.currCamera = scenery.Pcamera;
            scenery.currCamera.position.x = -100;
            scenery.currCamera.position.y = 50;
            scenery.currCamera.position.z = 60;

            scenery.currCamera.lookAt(new THREE.Vector3(0, -40, 0));
            onResize();
            break;

        case  54: // 6
            console.log("6");
            scenery.currCamera = scenery.camera;
            scenery.moveCamera(0, 0, 200);
            scenery.currCamera.lookAt(new THREE.Vector3(0, 0, 0));
            onResize();
            break;

        case  55: // 7

            scenery.currCamera = scenery.camera;
            scenery.moveCamera(0, 200, 0);
            scenery.currCamera.lookAt(new THREE.Vector3(0, 0, 0));
            onResize();
            break;

        case  56: //8

            scenery.currCamera = scenery.camera;
            scenery.moveCamera(-200, 0, 0);
            scenery.currCamera.lookAt(new THREE.Vector3(0, 0, 0));
            onResize();
            break;

        case 112: //p
        case 80: //P

            if(!stateOfGame){
                if(scenery.pointLight.intensity === 0){
                    scenery.pointLight.intensity = scenery.defaultIntensity_p;
                }
                else{
                    scenery.pointLight.intensity = 0;
                }
            }
            break;

        case 100: //d
        case 68: //D
            if(!stateOfGame){
            	if(scenery.directionalLight.intensity === 0){
            		scenery.directionalLight.intensity = scenery.defaultIntensity_d;
            	}
            	else{
            		scenery.directionalLight.intensity = 0;
            	}
            }
        	break;

        case 108: //l
        case 76: //L
            if(!stateOfGame){
            	scenery.flipMaterial();
            }
/*  
        	scenery.traverse(function (node) {
                if (node instanceof THREE.Mesh) { 
        			if(node.material instanceof THREE.MeshPhongMaterial){
        				node.material = new THREE.MeshBasicMaterial({color: node.material.color});
        			}
        			else if (node.material instanceof THREE.MeshLambertMaterial){
        				node.material = new THREE.MeshBasicMaterial({color: node.material.color});
        			}

         			else if (node.material instanceof THREE.MeshStandardMaterial){
        				node.material = new THREE.MeshBasicMaterial({color: node.material.color});       	
        			}		

        			else if (node.material instanceof THREE.MeshBasicMaterial){
        				node.material = new THREE.MeshStandardMaterial({color: node.material.color});
        			}
                }
            });
            */
            break;

        case 103: //g
        case 71: //G
            // scenery.traverse(function (node) {
            //     if (node instanceof THREE.Mesh) {
        		// 	if(node.material instanceof THREE.MeshPhongMaterial){
        		// 		node.material = new THREE.MeshLambertMaterial({color: node.material.color});
        		// 		//console.log("Sou Lambert de cor azul")
            //
        		// 	}
            //
        		// 	else if (node.material instanceof THREE.MeshStandardMaterial){
        		// 		node.material = new THREE.MeshPhongMaterial({color: node.material.color});
            //
        		// 	}
            //
        		// 	else if (node.material instanceof THREE.MeshLambertMaterial){
        		// 		node.material = new THREE.MeshPhongMaterial({color: node.material.color});
        		// 		//console.log("Sou Phong de cor branca")
        		// 	}
        		// 	else if (node.material instanceof THREE.MeshBasicMaterial) {
        		// 		node.material = new THREE.MeshPhongMaterial({color: node.material.color});
        		// 	}
            //     }
            // });
            break;
    }
}

