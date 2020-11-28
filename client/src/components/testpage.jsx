import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export function Box() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <div>
        <motion.div
          ref={ref}
          animate={controls}
          transition={{duration:1}}
          initial="hidden"
          style={{
            padding: 40,
            background: "white",
            display: "inline-block",
            marginTop: 500,
            marginLeft: 40,
            marginBottom: 500,
            borderRadius: 5
          }}
          variants={{
            visible: { opacity: 1, y: -20 },
            hidden: { opacity: 0, y: 30 }
          }}
        />
      </div>
    );
  }