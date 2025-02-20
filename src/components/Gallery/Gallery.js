import Stack from '../Stack/Stack';
import "./Gallery.css";
import React from 'react'

function Gallery() {
  
  const images = [ { id: 1, img: "https://pub-e0de7afcc8184ea3870ae54d7fd21b62.r2.dev/5.jpg" },
  { id: 2, img: "https://pub-e0de7afcc8184ea3870ae54d7fd21b62.r2.dev/4.jpg" },
  { id: 3, img: "https://pub-e0de7afcc8184ea3870ae54d7fd21b62.r2.dev/2.jpg" },
  { id: 4, img: "https://pub-e0de7afcc8184ea3870ae54d7fd21b62.r2.dev/3.jpg" },
  { id: 5, img: "https://pub-e0de7afcc8184ea3870ae54d7fd21b62.r2.dev/1.jpg" }];
  
  return (
  <>
  <div className="gallery">
  <Stack cardsData={images} />

  </div>
  </>
  )
}

export default Gallery;