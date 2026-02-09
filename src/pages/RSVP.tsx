import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RSVP: React.FC = () => {
    const navigate = useNavigate(); 
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">RSVP</h2>
      <p className="text-lg text-gray-700 text-center max-w-xl mb-6">
        Please let us know if you’ll be attending. Fill out the RSVP form below to confirm your presence.
      </p>
      <button className="px-6 py-2 bg-white rounded shadow hover:bg-yellow-200 transition">
        RSVP Now
      </button>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-6 py-2 text-gray-800 hover:text-gray-600 transition"
      >
        Back to Home
      </button>
    </motion.div>
  );
};

export default RSVP;
