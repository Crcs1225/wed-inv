import { motion } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
    setTimeout(() => onOpen(), 1200); // wait for animation
  };

  return (
    <motion.div
      className="w-64 h-40 relative cursor-pointer perspective"
      onClick={handleClick}
      initial={{ scale: 1 }}
      animate={{ rotateX: opened ? 180 : 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="absolute w-full h-full bg-[#d4a373] flex items-center justify-center rounded-lg backface-hidden">
        📨
      </div>
      <div className="absolute w-full h-full bg-[#f2e6d9] flex items-center justify-center rounded-lg rotate-x-180 backface-hidden">
        Click to open!
      </div>
    </motion.div>
  );
};

export default Envelope;
