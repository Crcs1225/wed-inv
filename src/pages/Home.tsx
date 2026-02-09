import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-yellow-100 to-orange-200 p-6 flex flex-col items-center">
      <motion.h1
        className="text-5xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        You're Invited!
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          to="/info"
          className="px-6 py-4 bg-white rounded shadow hover:bg-yellow-300 transition text-center font-semibold"
        >
          INFO
        </Link>
        <Link
          to="/rsvp"
          className="px-6 py-4 bg-white rounded shadow hover:bg-yellow-300 transition text-center font-semibold"
        >
          RSVP
        </Link>
        <Link
          to="/faq"
          className="px-6 py-4 bg-white rounded shadow hover:bg-yellow-300 transition text-center font-semibold"
        >
          FAQ
        </Link>
      </motion.div>

      <motion.div
        className="mt-12 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-gray-700 mb-2">
          Here’s a sneak peek of our event design, decorations, and menu!
        </p>
        <p className="text-gray-600">
          Scroll or click the sections above to know more about the event.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
