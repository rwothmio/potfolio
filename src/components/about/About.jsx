import React from "react";
import "./about.css";
import Technology from "../technology/Technology";
import images from "./images";
import { motion } from "framer-motion";

const slideTransition = {
  hidden: { x: '-100%' },
  visible: { x: 0 }
};

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={slideTransition}
      transition={{ duration: 0.5 }}
    >
      <div className="about__content nice-text">
        <p className="nice-text">
          I'm an enthusiastic and dedicated web developer from Uganda, with a
          year-long journey that's been fueled by my passion for curating
          dynamic user experiences and solving problems.
        </p>

        <p>
          From designing interactive interfaces that seamlessly merge aesthetics
          with functionality, to delving deeper into backend technologies to
          boost my skills, I've been on a steadfast mission to push the
          boundaries of web development.
        </p>

        <p>
          Excited about collaboration, and keen to continue learning and
          innovating within the ever evolving world of web development.
        </p>
      </div>

      {/* <div className="about__technologies">
        <h4>These icons show the technologies I use or have ever used</h4>
        <div className="about__technologies-container">
          {images.map((image) => (
            <Technology key={image.name} source={image.url} alt={image.name} />
          ))}
        </div>
      </div> */}
    </motion.section>
  );
}

export default About;
