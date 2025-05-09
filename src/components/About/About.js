import "./About.css";
import React from 'react';
import SplitText from '../SplitText/SplitText';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About Badhon Biswas | Web Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Learn about Badhon Biswas, a passionate web developer and UI/UX designer based in Dhaka, Bangladesh with 3+ years of experience."
        />
        <meta
          name="keywords"
          content="Badhon Biswas, Web Developer, UI UX Designer, Dhaka, Responsive Design, Portfolio"
        />
        <meta name="author" content="Badhon Biswas" />
      </Helmet>

      <div className="about">
        <h1>About Me</h1>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={4}
        >
          I’m Badhon Biswas, a passionate web developer and UI/UX designer based in Dhaka, Bangladesh.
          With over 3 years of experience, I specialize in building modern, responsive, and user-friendly websites.
          I combine clean code with creative design to deliver fast, functional, and visually appealing digital experiences.
          My skill set includes front-end development, mobile-first design, and multimedia editing.
          Whether you're looking to build a personal site, business platform, or creative project —
          Badhon Biswas is here to turn your vision into reality with precision and professionalism.
        </ScrollReveal>
      </div>
    </>
  );
}

export default About;