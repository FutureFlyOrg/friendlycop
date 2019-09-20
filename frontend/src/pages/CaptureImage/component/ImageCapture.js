// import React , {Component} from 'react'

// class ImageCapture extends Component{
//     constructor(props){
//         super(props)
//         this.state = {

//         }
//     }
//     componentWillMount(){
//         var videoObj = { "video": true },
//             errBack = function (error) {
//                 // alert("Video capture error: ", error.code);
//             };

      
//         // if (navigator.getUserMedia) {                   
//         //     navigator.getUserMedia(videoObj, startWebcam, errBack);
//         // } else if (navigator.webkitGetUserMedia) {       
//         //     navigator.webkitGetUserMedia(videoObj, startWebcam, errBack);
//         // } else if (navigator.mozGetUserMedia) {       
//         //     navigator.mozGetUserMedia(videoObj, startWebcam, errBack);
//         // };
//     }

//    startWebcam(stream) {

//     var myOnlineCamera = document.getElementById('myOnlineCamera'),
//         video = myOnlineCamera.querySelectorAll('video'),
//         canvas = myOnlineCamera.querySelectorAll('canvas');

//     video.width = video.offsetWidth;

//     if (navigator.getUserMedia) {                    // Standard
//         video.src = stream;
//         video.play();
//     } else if (navigator.webkitGetUserMedia) {        // WebKit
//         video.src = window.webkitURL.createObjectURL(stream);
//         video.play();
//     } else if (navigator.mozGetUserMedia) {        // Firefox
//         video.src = window.URL.createObjectURL(stream);
//         video.play();
//     };

//     // Click to take the photo
//     var dd = document.getElementById('btn')
//        $(dd).click(function () {
//         // Copying the image in a temporary canvas
//         var temp = document.createElement('canvas');

//         temp.width = video.offsetWidth;
//         temp.height = video.offsetHeight;

//         var tempcontext = temp.getContext("2d"),
//             tempScale = (temp.height / temp.width);

//         temp.drawImage(
//             video,
//             0, 0,
//             video.offsetWidth, video.offsetHeight
//         );

//         // Resize it to the size of our canvas
//         canvas.style.height = parseInt(canvas.offsetWidth * tempScale);
//         canvas.width = canvas.offsetWidth;
//         canvas.height = canvas.offsetHeight;
//         var context = canvas.getContext("2d"),
//             scale = canvas.width / temp.width;
//         context.scale(scale, scale);
//         context.drawImage(bigimage, 0, 0);
//     });
// }
//     render(){
//         return (<div>
//             <div id="myOnlineCamera">
//                 <video style={{ width: "320px", height: "240px", margin: "15px", float: "left"}}></video>
//                 <canvas style={{ width: "320px", height: "240px", margin: "15px", float: "left"}}></canvas>
//                 <button id='btn' style={{ clear: "both", margin: "30px"}}>Take Photo!</button>
//             </div>
//         </div>)
//     }
// }
// export default ImageCapture 