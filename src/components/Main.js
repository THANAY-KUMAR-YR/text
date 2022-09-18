import React from 'react'
import Video from '../images/video.mp4'
import './Main.css'

export default function Main() {
    return (
        <main className='main'>
            <video src={Video} muted width={'100%'} height={'10%'} autoPlay loop>
            </video>
            <div className="icon">
                <div className='icon-1'></div>
                <div className='icon-2'></div>
            </div>
        </main>
    )
}