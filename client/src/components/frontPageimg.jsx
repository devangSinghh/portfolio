import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import devang from '../assets/dev.png';
const Image = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);

  return (
    <div className="wrapper">
      <motion.div
        style={{
          scale
        }}
      >
        <motion.img src={devang} className="img img-fluid" alt="" initial={{y:-100}} animate={{y:-10}} />
      </motion.div>
    </div>
  );
};

export default Image;