import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ id, icon, title, content }) => {
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
      className="w-full h-[400px] bg-[#171717] border border-white/30 rounded-lg p-6 flex flex-col space-y-6"
    >
      {/* Icon */}
      <div className="text-6xl flex items-start">{icon}</div>

      {/* Title */}
      <h1 className="text-3xl font-extrabold text-[#e5e5e5] flex items-start">
        {title}
      </h1>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/20 mb-4"></div>

      {/* Content */}
      <p className="text-lg font-medium text-[#e5e5e5] leading-relaxed text-center">
        {content}
      </p>
    </motion.div>
  );
};

export default Card;
