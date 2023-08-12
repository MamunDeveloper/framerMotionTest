"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import styles from "@/app/styles/box.module.css";

const Box1 = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.div
      className={styles.animationBox}
      onClick={handleClick}
      drag
      dragConstraints={{ left:200 }}

      initial={{ scale: 1 }} // Initial scale

      whileInView={{rotate: [0, 200, 200, 0] }}
      whileHover={{ scale: 1.2 }} // Scale when hovering
      whileTap={{ scale: 0.8 }} // Scale when clicking (tap)
      style={{
        width: 100,
        height: 100,
        background: isClicked ? "blue" : "red",
      }}
      // animate={{ rotate: [0, 200, 200, 0] }}
      transition={{ repeat: Infinity, duration: 1 }}
    ></motion.div>
  );
};
export default Box1;
