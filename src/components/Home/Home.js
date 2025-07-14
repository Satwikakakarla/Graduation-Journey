import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { ReactComponent as HeroImage } from "../../assets/grad_jour.svg";

const Home = () => {
  return (
    <section className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="home-text">
          <h1>My Graduation Journey</h1>
          <p>Experience the ups and downs of my student life through an animated story.</p>
          <motion.button
            className="scroll-button"
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              document.querySelector("#chapter1")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Begin the Story ↓
          </motion.button>
        </div>

        <motion.div
          className="home-svg-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <HeroImage className="home-svg" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;