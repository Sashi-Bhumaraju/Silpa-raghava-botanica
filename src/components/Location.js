import React from 'react';
import locationIcon from '../assets/location.svg';
import './Location.css'



class Location extends React.Component {

    openLocation = () => {
        var myWindow =  window.open('https://www.google.com/maps/place/Silpa+raghava+botanica/@17.051986,78.522689,481m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcbad0855b410e1:0x4d8a390e2e773e5c!8m2!3d17.051986!4d78.5248723!16s%2Fg%2F11t5tjtrq8','',`scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=1000,height=500,left=180,top=120`)
      
       
    }

    render() {
        return (
            <>
            <div className='Location'>
                <div className='LocationIcon' onClick={this.openLocation} >
                    <img src={locationIcon}></img>
                </div>
                <div className='LocationDescrition'>
                    Location
                </div>
            </div>
            </>
        )
    }
}

export default Location;