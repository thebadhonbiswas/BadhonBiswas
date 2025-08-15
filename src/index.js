import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from 'react-helmet';

import InfiniteMenu from './components/InfiniteMenu/InfiniteMenu';
import Skills from './components/Skills/Skills';
import Gallery from './components/Gallery/Gallery';
import Nav from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

import './index.css';
import '@fontsource/outfit';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Helmet>
      <title>Badhon Biswas | Professional Web Developer, UI/UX Designer & Creative Editor in Bangladesh</title>
      <meta
        name="description"
        content="Discover the portfolio of Badhon Biswas — a professional web developer, UI/UX designer, and creative editor from Dhaka, Bangladesh. Specializing in responsive website design, frontend development, and modern UI experiences."
      />
      <meta
        name="keywords"
        content="Badhon Biswas, professional web developer, UI/UX designer Bangladesh, frontend developer, responsive web design, creative editor, modern websites, portfolio, Dhaka"
      />
      <meta name="author" content="Badhon Biswas" />

      {/* Open Graph Meta */}
      <meta property="og:title" content="Badhon Biswas | Web Developer & UI/UX Designer in Bangladesh" />
      <meta
        property="og:description"
        content="Explore the professional portfolio of Badhon Biswas — building responsive, user-friendly websites and creative digital designs."
      />
      <meta
        property="og:image"
        content="https://badhonbiswas.vercel.app/portfolio-preview.jpg"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://badhonbiswas.vercel.app/" />

      {/* Twitter Card Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Badhon Biswas | Portfolio" />
      <meta
        name="twitter:description"
        content="Portfolio of Badhon Biswas — web developer, UI/UX designer, and creative editor from Dhaka, Bangladesh."
      />
      <meta
        name="twitter:image"
        content="https://badhonbiswas.vercel.app/portfolio-preview.jpg"
      />
      <meta
        name="twitter:image:alt"
        content="Screenshot of Badhon Biswas' professional web portfolio"
      />

      {/* Favicon and Theme */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000000" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Badhon Biswas",
            "jobTitle": "Professional Web Developer and UI/UX Designer",
            "url": "https://badhonbiswas.vercel.app",
            "sameAs": [
              "https://thebadhon.vercel.app",
              "https://badhontech.vercel.app",
              "https://badhonbiswas.vercel.app",
              "https://about.me/thebadhonbiswas",
              "https://facebook.com/thebadhonbiswas",
              "https://instagram.com/thebadhonbiswas",
              "https://x.com/thebadhonbiswas",
              "https://youtube.com/@thebadhonbiswas",
              "https://t.me/thebadhonbiswas"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dhaka",
              "addressCountry": "Bangladesh"
            },
            "description": "Badhon Biswas is a professional web developer, UI/UX designer, and creative editor from Dhaka, Bangladesh, specializing in responsive website design, frontend development, and modern user experiences."
          }
        `}
      </script>
    </Helmet>

    <Analytics />
    <div className="bg"></div>
    <Nav />
    <Header />
    <About />
    <Gallery />
    <Projects />
    <Skills />
  </React.StrictMode>
);

reportWebVitals();
