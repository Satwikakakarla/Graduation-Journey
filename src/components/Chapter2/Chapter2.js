import React from "react";
import { motion } from "framer-motion";
import './Chapter2.css';
import { ReactComponent as StruggleImage } from "../../assets/first_day.svg";

const Chapter2 = () => {
  return (
    <section id="chapter2" className="chapter2">
      <motion.div
        className="struggle-text"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Chapter 2: Struggle</h2>
        <p>The beginning was tough. Uncertainty, challenges, and fear tested every step.</p>
      </motion.div>

      <motion.div
        className="struggle-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <StruggleImage />
      </motion.div>
    </section>
  );
};

export default Chapter2;
