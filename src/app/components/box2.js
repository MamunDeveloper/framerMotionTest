"use client";
import {motion, useDrag } from "framer-motion";

const Box2 = () => {
//   const dragProps = useDrag({
//     ondrag:{x:100}
//   });

  return (
    <motion.div drag >
      Draggable Content
    </motion.div>
  );
};
export default Box2;
