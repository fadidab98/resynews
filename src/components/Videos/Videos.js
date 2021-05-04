import React, { Component } from 'react'
import '../../App.css'

export class Videos extends Component {
    render() {
        return (
            
               
                <div className='container container-videos p-4 ' >
                <h4 className="text-center text-white ">فيديو  <span><i class="fa fa-pause text-danger"  aria-hidden="true"></i></span></h4>
                <div className="spa"></div>
                    <div className="container-video" dir="ltr">
                   

                   
                    <div className='main-video'>
                        <video src='../videos/1.mp4' muted controls></video>
                        
                    </div>
                    
                    <div className='video-list'>
                        <video className="active" src='../videos/1.mp4' muted></video>
                        <video src='../videos/2.mp4' muted></video>
                        <video src='../videos/3.mp4' muted></video>
                    </div>
                    </div>
                </div>
                
          
        )
    }
}

export default Videos
