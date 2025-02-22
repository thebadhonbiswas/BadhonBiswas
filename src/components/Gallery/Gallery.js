import Stack from '../Stack/Stack';
import "./Gallery.css";
import React from 'react'

function Gallery() {
  
  const images = 
 [{ id: 1, img: "/5.jpg" },
  { id: 2, img: "/4.jpg" },
  { id: 3, img: "/2.jpg" },
  { id: 4, img: "/3.jpg" },
  { id: 5, img: "/1.jpg" }];
  
  return (
  <>
  <div className="gallery">
  <Stack cardsData={images} />

  </div>
  </>
  )
}

export default Gallery;