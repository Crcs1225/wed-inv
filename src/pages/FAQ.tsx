import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FAQ: React.FC = () => {
    const navigate = useNavigate();
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">FAQ</h2>
      <div className="text-lg text-gray-700 max-w-xl space-y-4">
        <div>
          <strong>Q:</strong> What time does the event start? <br />
          <strong>A:</strong> The event begins at 5:00 PM.
        </div>
        <div>
          <strong>Q:</strong> Is there a dress code? <br />
          <strong>A:</strong> Smart casual attire is preferred.
        </div>
        <div>
          <strong>Q:</strong> Can I bring a guest? <br />
          <strong>A:</strong> Yes, please include your guest in the RSVP form.
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-6 py-2 bg-white rounded shadow hover:bg-blue-200 transition"
      >
        Back to Home
      </button>
    </motion.div>
  );
};

export default FAQ;
