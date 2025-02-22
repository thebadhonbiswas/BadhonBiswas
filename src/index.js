import { Analytics } from "@vercel/analytics/react"
import InfiniteMenu from './components/InfiniteMenu/InfiniteMenu';
import Skills from './components/Skills/Skills';
import Gallery from './components/Gallery/Gallery';
import Stack from './components/Stack/Stack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@fontsource/outfit';
import Nav from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const items = [
  {
    image: '1.jpg',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: '2.jpg',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: '3.jpg',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: '4.jpg',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];


root.render(
  <React.StrictMode>
    <Analytics />
    <div className="bg"></div>
    <Nav />
    <Header />
    <Gallery />
    <Skills />
    <div style={{ height: '400px', position: 'relative' }}>
      <InfiniteMenu items={items} />
    </div>
  </React.StrictMode>
);

reportWebVitals();