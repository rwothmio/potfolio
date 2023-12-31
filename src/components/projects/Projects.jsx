import React from "react";
import "./projects.css";
import { GiPineapple as PineappleIcon } from "react-icons/gi";
import { CiApple as AppleIcon1 } from "react-icons/ci";
import { FaAppleAlt as AppleIcon2 } from "react-icons/fa";
import { motion } from "framer-motion";

const slideTransition = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

const FruitIcons = () => (
  <div className="fruit-icons">
    <PineappleIcon />
    <AppleIcon2 />
    <AppleIcon1 />
  </div>
);

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={slideTransition}
      transition={{ duration: 0.5 }}
    >
      <h2>
        <a href="https://freshfruits-rwothmio.vercel.app" target="_blank">
          The Fresh Fruits E-Commerce Store
        </a>
      </h2>
      <div className="top-fruit-icons">
        <FruitIcons />
      </div>
      <p>This project is the latest one that I've worked on.</p>
      <p>
        It's a responsive and user-friendly online platform <br />
        dedicated to delivering fresh and natural fruits to the doorsteps of
        fellow Kampala residents.
      </p>
      <p>
        Primarily built with the dynamic power of React and the artistry of Pure
        CSS,
      </p>
      <p>
        If you'd like to read more about it, you can check out{" "}
        <a href="https://freshfruits-rwothmio.vercel.app/about" target="_blank">
          this short post
        </a>{" "}
        I wrote on the site.
      </p>
      <FruitIcons />
    </motion.section>
  );
}

export default Projects;
