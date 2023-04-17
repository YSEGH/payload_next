import React from "react";
import { motion } from "framer-motion";

const MAX = 1;
const MIN = 0.8;

const animate = {
  hidden: { scale: MIN },
  show: { scale: MAX },
};

interface Props {
  display: boolean;
}

const Logo: React.FC<Props> = ({ display }) => {
  return (
    <motion.div
      className="component__logo"
      initial={animate.show}
      animate={display ? animate.show : animate.hidden}
    >
      <h2>
        Chléo<span>Butterfly</span>
      </h2>
    </motion.div>
  );
};

export default Logo;
