import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ img, content, width, height, title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="w-full h-full bg-gradient-to-br from-gray-100 to-white shadow-2xl rounded-3xl p-6 flex flex-col items-center justify-center text-center"
    >
      <img
        src={img}
        width={width}
        height={height}
        alt="Card visual"
        className="rounded-xl mb-6"
      />
      <p className="text-3xl font-bold text-gray-900 mb-2">{title}</p>
      <p className="text-base text-gray-600 leading-relaxed">{content}</p>
    </motion.div>
  );
};

export default Card;
