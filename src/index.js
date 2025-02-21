import InfiniteMenu from './components/InfiniteMenu/InfiniteMenu';
import Skills from './components/Skills/Skills';
import Gallery from './components/Gallery/Gallery';
import Stack from './components/Stack/Stack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@fontsource/outfit';
import Nav from './components/Navbar/Navbar.js'
import Header from './components/Header/Header.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];


root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Gallery />
    <Skills />
    <div style={{ height: '400px', position: 'relative' }}>
     <InfiniteMenu items={items}/>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
