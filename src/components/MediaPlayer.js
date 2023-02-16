import React from 'react';
import './MediaPlayer.css';
import ReactPlayer from 'react-player';
import MediaPopUp from './MediaPopUp'

class MediaPlayer extends React.Component {
    static defaultPlops = {
        VideoLink : '',
        ImageLink : '',
        MediaIconLink : '',
        MediaDescrition : '',
        Image360Link : '',
        AutoPopUp : false,
        helper : ()=>{}
    }

    open360Location = () => {
        var myWindow =  window.open('https://app.lapentor.com/sphere/silpa-raghava-botanica','',`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=1000,height=500,left=180,top=120`)
    }

    constructor (props) {
        super(props);
        this.state = {
            showMedia : this.props.AutoPopUp,
        }
    }
    
    handlePopUp = () => {

     
        this.setState({
            showMedia : !this.state.showMedia,
        })
        this.props.helper();
    }

    render() {

         if (this.props.Image360Link === 'https://app.lapentor.com/sphere/silpa-raghava-botanica') {
         return <> <div id="s" className='MediaPlayer' onClick={this.open360Location}> 
         <div className='MediaIcon'>
         <img src={this.props.MediaIconLink}></img>
         </div>
         <div className='MediaDescrition'>
         <div className='marquee'>{this.props.MediaDescrition}</div>
         </div>
         </div> </> }
         else {

        // const mediaPopUp = <MediaPopUp handlePopUp = {this.handlePopUp} VideoLink = {this.props.VideoLink} ImageLink = {this.props.ImageLink}></MediaPopUp>;
        const popUp = this.state.showMedia? <MediaPopUp handlePopUp = {this.handlePopUp} VideoLink = {this.props.VideoLink} ImageLink = {this.props.ImageLink}></MediaPopUp> : '';
        const body = this.props.AutoPopUp? 
                     popUp : 
                      <>
                    {popUp}
                    <div id="s" className='MediaPlayer' onClick={this.handlePopUp}> 
                        <div className='MediaIcon'>
                        <img src={this.props.MediaIconLink}></img>
                        </div>
                        <div className='MediaDescrition'>
                        <div className='marquee'>{this.props.MediaDescrition}</div>
                        </div>
                    </div>
                    </>

        return( 
           body 
        )
         }
    }
}
export default MediaPlayer