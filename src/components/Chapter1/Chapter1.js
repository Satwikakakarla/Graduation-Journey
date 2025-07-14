import React from "react";
import { motion } from "framer-motion";
import "./Chapter1.css";
import { ReactComponent as FirstDaySvg } from "../../assets/209153811_10907874.svg";

const Chapter1 = () => {
  return (
    <section id="chapter1" className="chapter1">
      <motion.div
        className="chapter1-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="chapter1-text">
          <h2>Chapter 1: The First Day</h2>
          <p>It's the start of something new. The student sits excitedly, laptop open, ready to learn and connect. The journey begins with curiosity and a raised hand.</p>
        </div>
        <motion.div
          className="chapter1-svg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <FirstDaySvg />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Chapter1;