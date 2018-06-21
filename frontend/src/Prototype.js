import React, {Component} from 'react';
import * as posenet from '@tensorflow-models/posenet';
import dat from 'dat.gui';

class Prototype extends Component{
    constructor(){
        super()
    }
/*checking for device according to OS and device type*/
componentDidMount(){
    const width = 600;
    const height = 500;
    // const stats = new Stats();

function isAndroid(){
    return /Android/i.test(navigator.userAgent);
}

function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function isMobile(){
      return isAndroid() || isiOS();
  }

  /*Loads a the camera to be used in demo*/
    async function setUpCamera() {
        if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
            throw new Error(
                'Browser API navigator.mediaDevices is not avalible');
        }

        //creating the video size
        const video = document.getElementById('video');
        video.width = videoWidth;
        video.height = videoHeight;      

        //awaiting promise for navigation detection
        const mobile = isMobile();
        const stream = await navigator.mediaDevices.getUserMedia({
            'audio' : false,
            'video' : {
                facingMode : 'user',
                width : mobile ? undefined : videoWidth,
                height : mobile ? undefined : videoHeight
            },
        });
        video.srcObject = stream;

        return new Promise((resolve)=>{
            //meta data refering to data about data ei. the loading time
            video.onloadedmetadata = () => {
                resolve(video);
            };
        });
    }

    /*creating a PLAY VIDEO BUTTON*/
    async function loadVideo(){
        //calling previouse setupCamera() involving 
        //1.creating video size, 
        //2. detectign device 
        const video = await setUpCamera();
        video.play();

        return video;
    }
/*CREATING VIDEO GUI */
    const guiState = {
        algorithm : 'multi-pose',
        input : {
            mobileNetArchitecture : isMobile() ? '0,5' : '0.75', 
            outputStride : 16,
            imageScaleFactor : 0.5,
        },
        singlePoseDetection : {
            minPoseConfidence : 0.1,
            minPartConfidence : 0.5,
        },
        multiPoseDetection : {
            maxPoseDetections : 5,
            minPoseConfidence : 0.15,
            minPartConfidence : 0.1,
            nmsRadius : 30.0,
        },
        output : {
            showVideo : true,
            showSkeleton : true,
            showPoints : true,
        },
        net: null,
    };
//SETTING UP DATA CONTROLLERS

function setupGui(camera, net){
    guiState.net = net;

    if(camera.length > 0){
        guiState.camera = camera[0].deviceId;
    }
   const gui = new dat.GUI({width: 300});
   //creating a variable for multi-pose or single-pose
   // for one or more people
   const algorithmController = 
   gui.add(guiState, 'algorithm', ['single-pose', 'multi-pose']);
   //the input paremeters have the most effect on the accuracy and speed
   let input = gui.addFolder('Input');
   //accuracty range from 1.01 is the largest, but will be the slowest. 0.50 is the
  // fastest, but least accurate.
  const architectureController = input.add(
    guiState.input, 'mobileNetArchitecture',
    ['1.01', '1.00', '0.75', '0.50']);
    //this specifies what scale the image is before feeding it into the network
    input.add(guiState.input, 'imageScaleFactor').min(0.2).max(1.0);
    input.open(); 
//Pose confidence : 
let signle = gui.addFolder('Single Pose Detection');
    sigle.add(guiState.multiPoseDetection, 'maxPoseDetection')
        .min(1)
        .max(20)
        .step(1);
        multi.add(guiState.multiPoseDetection, 'minPoseConfidence', 0.0, 1.0);
        multi.add(guiState.multiPoseDetection, 'minPartConfidence', 0.0, 1.0);
// nms Radius: controls the minimum distance between poses that are returned
multi.add(gui.multiPoseDetection, 'nmRadius').min(0.0).max(40.0);
multi.open();

    }
}


    render(){
        return(
            <div class>
            <center>
                <div className = "text">
                <p>this is the prototype</p>
            </div>
            </center>
            </div>
        )
    }
}

export default Prototype;