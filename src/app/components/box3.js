"use client";
import React from "react";
import { color, motion, spring } from "framer-motion";

function Box3() {
  const tapEff = {
    whileTap: { scale: 1.2 },
    whileHover: { scale: 0.8 },
  };
  const tapFullScreen = {
    whileTap: { scale: 5 },
    whileHover: { scale: 0.8 },
  };

  return (
    <>
      <motion.div
        className="motion_box"
        style={{
          background: "green",
        }}
        initial={{
          scale: 1,
        }}
        {...tapEff}
        whileInView={{
          x: [300, 0],
        }}
        transition={{ type: "spring", damping: 50 }}
      ></motion.div>
      <motion.div
        className="motion_box"
        style={{
          background: "green",
        }}
        initial={{
          scale: 1,
        }}
        {...tapEff}
        whileInView={{
          x: [-300, 0],
        }}
        transition={{ type: "spring", damping: 50 }}
      ></motion.div>
      <motion.div
        className="motion_box"
        style={{
          background: "green",
        }}
        initial={{
          scale: 1,
        }}
        {...tapEff}
        whileInView={{
          x: [300, 0],
        }}
        transition={{ type: "spring", damping: 50 }}
      ></motion.div>
      <motion.div
        className="motion_box"
        style={{
          background: "green",
        }}
        initial={{
          scale: 1,
        }}
        {...tapEff}
        whileInView={{
          x: [-300, 0],
        }}
        transition={{ type: "spring", damping: 50 }}
      ></motion.div>
    </>
  );
}

export default Box3;
