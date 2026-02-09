import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Info: React.FC = () => {
  const navigate = useNavigate(); // <-- initialize here

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Event Information</h2>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        Welcome to our special day! Here you can find all the important details about the event: venue, time, dress code, and more.
      </p>

      <button
        onClick={() => navigate(-1)} // <-- now works
        className="mt-6 px-6 py-2 bg-white rounded shadow hover:bg-green-200 transition"
      >
        Back
      </button>
    </motion.div>
  );
};

export default Info;
