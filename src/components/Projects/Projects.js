import InfiniteMenu from '../InfiniteMenu/InfiniteMenu';
import "./Projects.css";
import React from 'react'

function Projects() {
  const items = [
  { image: '1.jpg', link: 'https://google.com/', title: 'Item 1', description: 'This is pretty cool, right?' },
  { image: '2.jpg', link: 'https://google.com/', title: 'Item 2', description: 'This is pretty cool, right?' },
  { image: '3.jpg', link: 'https://google.com/', title: 'Item 3', description: 'This is pretty cool, right?' },
  { image: '4.jpg', link: 'https://google.com/', title: 'Item 4', description: 'This is pretty cool, right?' }
];

  return (
  <>
  <div className="pro">
      <h1>Projects</h1>
      <InfiniteMenu items={items} />
  </div>
  </>
  )
}

export default Projects;