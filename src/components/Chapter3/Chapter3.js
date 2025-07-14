// Chapter3.js
import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as BreakthroughSvg } from "../../assets/managing.svg";
import "./Chapter3.css";

const Chapter3 = () => {
  return (
    <section className="chapter3" id="chapter3">
      <div className="chapter3-content">
        <motion.div
          className="text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Chapter 3</h2>
          <h1>Breakthrough</h1>
          <p>
            After many setbacks and doubts, there came a moment of clarity. A new
            idea, a solution, a realization — it all started to make sense.
            This was the turning point.
          </p>
        </motion.div>

        <motion.div
          className="illustration"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <BreakthroughSvg className="breakthrough-svg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Chapter3;
