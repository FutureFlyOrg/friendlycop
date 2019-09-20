import React, { Component } from 'react'

import '../css/capture.scss';
import Button from '../../../components/Button';
import Textbox from '../../../components/Textbox';
import image from '../../../bg2.jpg'
import axios from 'axios';

var imgURl = '';
class CaptureImageView extends Component {
    constructor(props){
        super(props);
        this.state = {
            Capture: true,
            url: '',
            location: '',
            comment: '',
            imgURl: ''
        }
    }
 
    
    startup() {
        this.setState({
            Capture: false
        })
        let video = document.getElementById('video')
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                console.log('stream ', stream)
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                console.log("An error occurred: " + err);
            });
    }

    b64toBlob(b64, onsuccess, onerror) {
        var img = new Image();

        img.onerror = onerror;

        img.onload = function onload() {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
           canvas.toBlob(onsuccess);
         
        };

       img.src = b64;
    }

    takepicture = () => {
        this.setState({
            Capture: true
        })
        let video = document.getElementById('video')
        let canvas = document.getElementById('canvas')
        let photo = document.getElementById('photo')
        
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, 100, 100);

        var b64Data = canvas.toDataURL('image/png');
      
        const contentType = 'image/png';
       this.b64toBlob(b64Data,
      function(blob) {
          console.log('blob', blob)
                var url = window.URL.createObjectURL(blob);
                imgURl = url
            }, function (error, imgURl) {
                
               
            });
        // hide9
      
        video = document.getElementById('video')
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                let tracks = stream.getTracks();
                tracks.forEach(function (track) {
                    track.stop();
                });

                video.srcObject = null;


            })
            .catch(function (err) {
                console.log("An error occurred: " + err);
            });
    }

    clearphoto() {
        let canvas = document.getElementById('canvas')
        let photo = document.getElementById('photo')
        let video = document.getElementById('video')
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                let tracks = stream.getTracks();
                tracks.forEach(function (track) {
                    track.stop();
                });

                video.srcObject = null;


            })
            .catch(function (err) {
                console.log("An error occurred: " + err);
            });

    }
    takepicturess(){
        return <div>
            <input type="file" capture="camera" accept="image/*"/>
            </div>
    }
    sendDetails(){
        console.log(navigator.geolocation.getCurrentPosition)
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.showPosition)
        }
        else{
            console.log('Not get  location ')
        }
    }
    showPosition=(postion)=>{
        console.log(postion, 'postion')
        console.log(this.state)
        var data = {
            'image': imgURl ? imgURl : '',
            'comments': this.state.comment ? this.state.comment : '',
            'username': localStorage.getItem("username"),
            'location': {
                place: this.state.location ? this.state.location : '',
                latitude: postion.coords.latitude,
                longitude: postion.coords.longitude

            }
        }
        axios.post('http://192.168.0.32:1330/createCompliant',data).then((Response, err)=>{
            if(Response.data.data == 'success'){
                this.props.history.push('/ComplaintPageView')
            }
        })
    }
    render() {
        console.log('imgURl', this.state.imgURl)
        return (
            <div>
                {this.state.Capture ?
                    <canvas id="canvas" style={{ alignItems: 'center' }}>
                    </canvas> : <canvas id="canvas" style={{ alignItems: 'center', display:'none' }}> </canvas>}
                {this.state.Capture ?<video style={{display:'none'}} width='100%' height='120' id="video">Video stream not available.</video>:<video  width='100%' height='120' id="video">Video stream not available.</video>}
                <div>  {this.state.imgURl!= '' ? <img src={image} width="100" height='100' /> : null}</div>
                <div className='col'>
                    <Textbox label={''}
                        placeholder={'Enter location'}
                        value={this.state.location}
                        onChange={(e) => { this.setState({ location: e.target.value }) }} />
                    <Textbox label={''}
                        value={this.state.comment}
                        placeholder={'Comment'}
                        onChange={(e) => { this.setState({ comment: e.target.value }) }} />
                </div>

                <div className='row'>
                    <div className='col'>
                        {/* <input type="file" capture="camera" accept="image/*" /> */}
                        {this.state.Capture ? <Button btnName='Snapshot' onClick={() => {
                            this.startup()
                        }} /> :
                            <Button btnName='Capture' onClick={() => {
                                this.takepicture()
                            }} />
                        }
                    </div>
                    <div className='col'>
                        <Button btnName='Send' onClick={() => {
                            this.sendDetails()
                        }} />
                    </div>
                </div>
            </div>

        )
    }
}
export default CaptureImageView;