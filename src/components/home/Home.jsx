import React from "react";
import "./home.css";
import { motion } from "framer-motion";

const slideTransition = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={slideTransition}
      transition={{ duration: 0.5 }}
    >
      <h1 id="i-am">I'm Rwothmio Bob</h1>
      <h2 id="i-use" className="nice-text">
        I blend code and creativity to craft solutions that cater for human
        needs
      </h2>
    </motion.section>
  );
}

export default Home;
