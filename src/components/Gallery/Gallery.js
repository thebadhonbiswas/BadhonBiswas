import Stack from '../Stack/Stack';
import "./Gallery.css";
import React from 'react';

function Gallery() {
  const images = [
    { id: 1, img: "/5.jpg", alt: "Badhon Biswas" },
    { id: 2, img: "/4.jpg", alt: "Badhon Biswas" },
    { id: 3, img: "/2.jpg", alt: "Badhon Biswas" },
    { id: 4, img: "/3.jpg", alt: "Badhon Biswas" },
    { id: 5, img: "/1.jpg", alt: "Badhon Biswas" }
  ];

  return (
    <div className="gallery">
     <h1>Gallery</h1>
     <div class="photos">
      <Stack className="stack" cardsData={images} />
     </div>
    </div>
  );
}

export default Gallery;