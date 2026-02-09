import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Preview: React.FC = () => (
  <motion.div
    className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-pink-100 to-yellow-100"
    initial="hidden"    
    animate="visible"
    variants={menuVariants}
  >
    <h1 className="text-4xl font-bold mb-8 text-gray-800">You're Invited!</h1>
    <motion.ul className="space-y-4 text-xl font-medium text-gray-700">
      {["info", "rsvp", "faq"].map((route) => (
        <motion.li key={route} variants={itemVariants}>
          <Link
            to={`/${route}`}
            className="px-6 py-2 bg-white rounded shadow hover:bg-yellow-200 transition"
          >
            {route.toUpperCase()}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

export default Preview;
