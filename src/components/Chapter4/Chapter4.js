// Chapter4.js
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Chapter4.css";
import { ReactComponent as GraduationSvg } from "../../assets/graduation_day.svg";

const Chapter4 = () => {
    const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true });
  const isInView = useInView(sectionRef, { amount: 0.4 });

  return (
    <section className="chapter4" id="chapter4" ref={sectionRef}>
      <div className="chapter4-content">
        <motion.div
          className="text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Chapter 4</h2>
          <h1>Graduation Day</h1>
          <p>
            The final day arrived. The long journey filled with learning,
            friendships, and growth had led to this moment. Caps flew, cheers
            echoed, and we stepped into the world with pride.
          </p>
        </motion.div>

        <motion.div
          className="illustration"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
            <div className={`graduation-svg-wrapper ${isInView ? "animate-orbit" : ""}`}>
            <GraduationSvg className="graduation-svg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Chapter4;
