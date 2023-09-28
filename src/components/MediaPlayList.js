import React from 'react';
import MediaPlayer from './MediaPlayer';
import './MediaPlayList.css'
import yIcon from '../assets/youtube.svg'
import Gallery from './Gallery';
import camera from '../assets/camera.png'

class MediaPlayList extends React.Component {
    render() {
        return(
        <div className='MediaPlayList'>
              
              <MediaPlayer VideoLink={'https://www.youtube.com/watch?v=TEqDqqcCapI'} MediaIconLink={yIcon} MediaDescrition={'Walk through'}></MediaPlayer>
              <MediaPlayer VideoLink={'https://www.youtube.com/watch?v=qHEZiIGwokk'} MediaIconLink={yIcon} MediaDescrition={'Location video'}></MediaPlayer>
              <MediaPlayer VideoLink={'https://www.youtube.com/watch?v=0MVwRYFJroo'} MediaIconLink={yIcon} MediaDescrition={'Digital site visit'}></MediaPlayer>
              <MediaPlayer Image360Link={'https://app.lapentor.com/sphere/silpa-raghava-botanica'} MediaIconLink={camera} MediaDescrition={'Arial 360 view'}></MediaPlayer>
              {/* <MediaPlayer VideoLink={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} MediaIconLink={yIcon} MediaDescrition={'Site Map'}></MediaPlayer> */}
              {/* <Gallery></Gallery> */}
        </div>);
    }
}

export default MediaPlayList;