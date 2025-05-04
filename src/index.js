import { Analytics } from "@vercel/analytics/react";
import InfiniteMenu from './components/InfiniteMenu/InfiniteMenu';
import Skills from './components/Skills/Skills';
import Gallery from './components/Gallery/Gallery';
// import Stack from './components/Stack/Stack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@fontsource/outfit';
import Nav from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
import { Helmet } from 'react-helmet';

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
    <Helmet>
      <title>Badhon Biswas | Web Developer, UI/UX Designer & Editor</title>
      <meta
        name="description"
        content="Welcome to the official portfolio of Badhon Biswas – a passionate web developer, UI/UX designer, and creative editor from Dhaka, Bangladesh."
      />
      <meta
        name="keywords"
        content="Badhon Biswas, web developer, UI/UX designer, frontend developer, portfolio, creative editor, Bangladesh"
      />
      <meta name="author" content="Badhon Biswas" />
      <meta property="og:title" content="Badhon Biswas | Portfolio" />
      <meta property="og:description" content="Explore projects and skills of Badhon Biswas – web developer and designer." />
      <meta property="og:image" content="%PUBLIC_URL%/previewimg.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://badhon.pages.dev/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

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