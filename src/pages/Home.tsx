import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import floralDivider from "../assets/floral-divider.svg";
import iconRsvp from "../assets/icon-rsvp.svg";
import iconDetails from "../assets/icon-details.svg";
import iconFaq from "../assets/icon-faq.svg";
import waxSeal from "../assets/wax-seal.svg";

const venuePhoto =
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80";
const couplePhoto =
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80";

const navCards = [
  { to: "/rsvp", label: "RSVP", note: "Kindly confirm attendance", icon: iconRsvp },
  { to: "/info", label: "Details", note: "Schedule, venue, and attire", icon: iconDetails },
  { to: "/faq", label: "FAQs", note: "Travel and celebration guidance", icon: iconFaq },
];

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="ornament-bg" />
      <FallingPetals />
      <div className="romantic-ring left-[-4.5rem] top-14 h-40 w-40" />
      <div className="romantic-ring bottom-12 right-[-5rem] h-56 w-56" />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.header
          className="paper-panel px-6 py-8 text-center sm:px-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-['Manrope'] text-[11px] uppercase tracking-[0.28em] text-[#7c1f31]/76">
            Crimson Garden Invitation
          </p>
          <h1 className="mt-3 text-5xl leading-tight text-[#612130] sm:text-6xl">You&apos;re Invited</h1>
          <img src={floralDivider} alt="" aria-hidden="true" className="mx-auto mt-4 w-60" />
          <p className="mt-2 font-['Manrope'] text-sm text-[#612130]/74 sm:text-base">
            An elegant evening of vows, candlelight, florals, and music.
          </p>
        </motion.header>

        <section className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.2fr]">
          <motion.article
            className="accent-panel px-5 py-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#f9f3eb]/72">Save The Date</p>
            <p className="mt-2 text-4xl sm:text-5xl">Sunday, December 14, 2026</p>
            <p className="mt-3 font-['Manrope'] text-sm text-[#f9f3eb]/78">
              Ceremony begins at 5:30 PM with dinner and music to follow.
            </p>
            <img src={waxSeal} alt="" aria-hidden="true" className="mt-5 h-14 w-14" />
          </motion.article>

          <motion.article
            className="paper-panel overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
          >
            <img src={venuePhoto} alt="Wedding venue" className="h-52 w-full object-cover sm:h-72" />
            <div className="border-t border-[#7c1f31]/15 px-5 py-4">
              <p className="font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#7c1f31]/74">Venue</p>
              <p className="mt-1 text-3xl text-[#612130] sm:text-4xl">The Conservatory Hall</p>
            </div>
          </motion.article>
        </section>

        <motion.section
          className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {navCards.map((card) => (
            <motion.div
              key={card.to}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Link to={card.to} className="group block">
                <motion.article
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  className="paper-panel h-full px-5 py-5"
                >
                  <img src={card.icon} alt="" aria-hidden="true" className="h-7 w-7" />
                  <p className="mt-3 font-['Manrope'] text-[11px] uppercase tracking-[0.22em] text-[#7c1f31]/72">
                    Navigate
                  </p>
                  <p className="mt-1 text-4xl text-[#612130] sm:text-[2.6rem]">{card.label}</p>
                  <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/66 group-hover:text-[#612130]/84">
                    {card.note}
                  </p>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.section>

        <motion.article
          className="paper-panel mt-4 overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65 }}
        >
          <img src={couplePhoto} alt="Couple portrait" className="h-56 w-full object-cover sm:h-72 lg:h-80" />
          <div className="border-t border-[#7c1f31]/15 px-5 py-4 text-center">
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#7c1f31]/72">Floral Notes</p>
            <p className="mt-2 text-2xl text-[#612130] sm:text-3xl">
              Roses, soft leaves, warm gold accents, and a gentle paper texture.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default Home;
