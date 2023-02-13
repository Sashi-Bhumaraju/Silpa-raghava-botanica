import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.css';
import gallery from '../assets/gallery.svg';
import GalleryView from './GalleryView'

class Gallery extends React.Component {
  
    static defaultPlops = {
        GalleryIconLink : '',
        GalleryDescrition : ''
    }

    constructor (props) {
        super(props);
        this.state = {
            showGallery : false
        }
    }
    
    handleShowGallery = () => {
        this.setState({
            showGallery : !this.state.showGallery
        })
    }

    render() {

        const images = [
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-01.jpg?alt=media&token=2bc3a8e2-a138-477c-9d9a-15da07098446',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-02.jpg?alt=media&token=889dfe53-e215-4493-9e67-78e3d556612b',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-03.jpg?alt=media&token=31fb11e8-43e6-41c0-86e5-532dfd4ed9f9',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-04.jpg?alt=media&token=75e80dfd-263f-47b5-89c7-56f468d956f0',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-05.jpg?alt=media&token=46fb2b9c-54de-4385-8a17-0cfefe672cb6',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-06.jpg?alt=media&token=8e21478c-d816-4cc5-9803-19fbffc8ab8d',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-07.jpg?alt=media&token=a3d57870-e89d-4e80-9c64-f80f687f1767',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-08.jpg?alt=media&token=17a3ee98-107c-4ad6-89e8-ac145c6dbfb0',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-09.jpg?alt=media&token=f0aa40f1-5e89-4ad3-b3f1-906b04071228',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-10.jpg?alt=media&token=10451f9b-ef51-4d81-93c6-757d381c39a9',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-11.jpg?alt=media&token=be37d870-475d-4310-946d-e5018ab86033',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-12.jpg?alt=media&token=1720ee65-99f6-459f-bb26-c2d09e1a81d4',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-13.jpg?alt=media&token=d24cf70d-34fe-42d4-a844-773d3e58eb8e',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-14.jpg?alt=media&token=6ec86486-edf3-4c36-af89-3202cc0105e9',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-15.jpg?alt=media&token=8f107820-206e-47b0-8c7d-784459e8d23c',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-16.jpg?alt=media&token=4b29ce03-4bd0-4774-96c6-96065cd9e186',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-17.jpg?alt=media&token=578ed934-bfd7-4112-a2c7-59e33bfee19f',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-18.jpg?alt=media&token=8482777e-2c7c-4b6a-b52f-ae39f22e2bc1',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-19.jpg?alt=media&token=9d0a74e1-800c-4c11-a3a1-f7df9a4c26ea',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-20.jpg?alt=media&token=2e022ab3-8c01-4592-94f0-0c41d788e8ec',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-21.jpg?alt=media&token=8ac5b257-be83-48da-9516-24c6833ec798',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-22.jpg?alt=media&token=23c43024-4d7d-4168-8a03-84dc21cbaa46',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-23.jpg?alt=media&token=0eccbbd8-8ece-4b43-9498-0d61cd8f8d6d',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-24.jpg?alt=media&token=8882e8a0-82b7-42bd-8bfd-1996ccf42fc9',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-25.jpg?alt=media&token=cc213c11-ba6a-42f8-944e-ae4cf1d80db8',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-26.jpg?alt=media&token=11606a6d-9264-4cff-8c44-c04b3363f1d3',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-27.jpg?alt=media&token=e8754339-041a-4d48-9191-2dd2710c18c5',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-28.jpg?alt=media&token=5e517f79-8281-42a4-8b74-e19e53281993',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-29.jpg?alt=media&token=5fb77e89-9e5d-48c6-ba3c-68936eff6128',
              dsc: '',
            },
            {
              url: 'https://firebasestorage.googleapis.com/v0/b/real-plots.appspot.com/o/gallery%2FBB%20REALTY-30.jpg?alt=media&token=89f4cc44-06a0-41f5-9791-5f3832712571',
              dsc: '',
            },
             
          ];
        const PopUp = this.state.showGallery? <GalleryView Images = {images}  handleShowGallery = {this.handleShowGallery}></GalleryView>:'';
        return( 
            <> 
            {PopUp} 
            <div className='Gallery' onClick={this.handleShowGallery}> 
                <div className='GalleryIcon'> 
                  <img src={gallery}></img> 
                </div> 
                <div className='GalleryDescrition'> 
                  Gallery 
                </div> 
             </div> 
             </> 
        ) 
    } 
} 
export default Gallery;