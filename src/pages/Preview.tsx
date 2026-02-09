import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Preview: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      navigate("/home", {replace: true}); // go to main content page
    }, 1200); // wait for animation to finish
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-b from-purple-200 to-pink-200">
      <motion.div
        className="w-64 h-40 relative cursor-pointer perspective"
        onClick={handleOpen}
        initial={{ scale: 1 }}
        animate={{ rotateX: opened ? 180 : 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute w-full h-full bg-[#d4a373] flex items-center justify-center rounded-lg backface-hidden text-4xl">
          📨
        </div>
        <div className="absolute w-full h-full bg-[#f2e6d9] flex items-center justify-center rounded-lg rotate-x-180 backface-hidden text-lg font-bold">
          Opening...
        </div>
      </motion.div>
    </div>
  );
};

export default Preview;
