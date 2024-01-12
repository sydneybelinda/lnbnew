import React from 'react';
import Lightbox from 'react-image-lightbox';
import Img from "../Img";



const Images = (props) => {

    const f = props.f;
    
    var i = [];
    
    { f ? f.map((file) => { i.push(`/userdata/${file.user}/images/${file.file}`) } ) :
        i.push(`/userdata/${props.user}/images/${props.profpic}`);

        return i;
}
}


    


const Gallery = (props) => {

    const images = Images(props)

    const f = props.f;

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <React.Fragment>
		 
            <div className="gallery-area">
                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}

          
                    <div className="row">

                    { f ? f.map((file, i=0) => (
                               <div className="col-lg-4 col-md-6 col-sm-6"  key={file.id}>
                               <div className="single-gallery-item">
                                   <div 
                                       className="popup-btn" 
                                       onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(i);}}

                                      
                                   >
                                       <Img  username={file.user} file={file.file} />
                                      
                                   </div>
                               </div>
                           </div>
   
      )) : (<div className="col-lg-4 col-md-6 col-sm-6">
      <div className="single-gallery-item">
          <div 
              className="popup-btn" 
              onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
          >
              <Img username={props.user} file={props.profpic} />
        
          </div>
      </div>
  </div>
      )
    }
                        
                    
                    </div>
               
            </div>

		</React.Fragment>
    )
}

export default Gallery;