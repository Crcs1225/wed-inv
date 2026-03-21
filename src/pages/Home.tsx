import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import HeroSection from "../components/HeroSection";
import MovingVinesBackground from "../components/MovingVinesBackground";
import floralDivider from "../assets/floral-divider.svg";
import iconRsvp from "../assets/icon-rsvp.svg";
import iconDetails from "../assets/icon-details.svg";
import iconPerson from "../assets/icon-person.svg";
import iconFaq from "../assets/icon-faq.svg";
import bottomFloral from "../assets/bottom-floral.png";
import circleFloral from "../assets/circle-floral.png";
import monogramLogo from "../assets/RM.png";


const venuePhoto = "src/assets/sideview-church.jpg";
const receptionPhoto = "src/assets/casa-de-polo.jpg";

const navCards = [
  { to: "/rsvp", label: "RSVP", note: "Kindly confirm attendance", icon: iconRsvp },
  { to: "/info", label: "Details", note: "Schedule, venue, and attire", icon: iconDetails },
  { to: "/entourage", label: "Entourage", note: "Meet our wedding party", icon: iconPerson },
  { to: "/faq", label: "FAQs", note: "Travel and celebration guidance", icon: iconFaq },
];

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="ornament-bg" />
      <FallingPetals />
      <HeroSection />

      <div className="relative mx-auto w-full max-w-5xl overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <MovingVinesBackground />
        <div className="romantic-ring -left-18 top-14 h-40 w-40" />
        <div className="romantic-ring bottom-12 -right-20 h-56 w-56" />
        <motion.header
          className="paper-panel px-6 py-8 text-center sm:px-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-['Manrope'] text-[11px] uppercase tracking-[0.28em] text-[#7c1f31]/76">
            Invitation Guide
          </p>
          <h1 className="mt-3 text-5xl leading-tight text-[#612130] sm:text-6xl">Celebrate With Us</h1>
          <img src={floralDivider} alt="" aria-hidden="true" className="mx-auto mt-4 w-60" />
          <p className="mt-2 font-['Manrope'] text-sm text-[#612130]/74 sm:text-base">
            We joyfully invite you to join us in celebrating our love as we exchange our marriage vows.
          </p>
        </motion.header>

        <section className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.2fr]">
          <motion.article
            className="accent-panel relative overflow-hidden px-5 pt-6 pb-14 sm:pb-16 md:pb-18 lg:pb-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#f9f3eb]/72">Save The Date</p>
            <p className="mt-2 text-4xl sm:text-5xl">Friday, May 22, 2026</p>
            <p className="mt-3 font-['Manrope'] text-sm text-[#f9f3eb]/78">
              Ceremony begins at 2:00 PM afternoon.
            </p>
            <img src="/rings.png" alt="" aria-hidden="true" className="mt-5 h-24 w-24" />
            <img
              src={bottomFloral}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 w-28 -translate-x-1/2 object-contain sm:w-44 md:w-56 lg:w-full"
            />
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
              <p className="mt-1 text-3xl text-[#612130] sm:text-4xl">Lokal ng Lingunan Distrito ng CAMANAVA</p>
              <p className="font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#7c1f31]/74">P. Gregorio Street, Valenzuela</p>
            </div>
          </motion.article>
        </section>

        <motion.section
          className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.2fr]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <motion.div
              className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-88 sm:w-88"
              animate={{ y: [0, -4, 0], scale: [1, 1.015, 1] }}
              transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <motion.img
                src={circleFloral}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain opacity-100"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 28,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.img
                src={monogramLogo}
                alt="Ron and Mikkie monogram"
                className="absolute z-10 w-34 rounded-full object-contain shadow-[0_18px_40px_rgba(97,33,48,0.18)] sm:w-44"
                animate={{ y: [0, -2, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
          >
            {navCards.map((card, index) => (
              <Link key={`${card.to}-${card.label}-${index}`} to={card.to} className="group block">
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
                  <p className="mt-1 text-4xl text-[#612130] sm:text-[2.2rem]">{card.label}</p>
                  <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/66 group-hover:text-[#612130]/84">
                    {card.note}
                  </p>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </motion.section>

        <motion.article
          className="paper-panel mt-4 overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65 }}
        >
          <img src={receptionPhoto} alt="Reception venue" className="h-56 w-full object-cover sm:h-72 lg:h-80" />
          <div className="border-t border-[#7c1f31]/15 px-5 py-4 text-center">
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#7c1f31]/72">Reception</p>
            <p className="mt-2 text-2xl text-[#612130] sm:text-3xl">CASAL DE POLO</p>
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#7c1f31]/72">Polo Park Barangay Poblacion, Valenzuela </p>
          </div>
        </motion.article>
        <motion.section
          className="mt-5 grid grid-cols-1 gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
            <motion.article
              className="paper-panel relative overflow-hidden lg:h-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
            >
              <div className="px-6 py-6 sm:px-7">
                <p className="font-['Manrope'] text-center text-[11px] uppercase tracking-[0.24em] text-[#7c1f31]/72">Dress Code</p>
                <p className="mt-2 text-center text-2xl leading-tight text-[#612130] sm:text-3xl">FORMAL ATTIRE</p>
                <p className="mt-3 text-center font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  We would love to see you in your best and comfortable <span className="font-bold">FORMAL ATTIRE</span> in any shade from our wedding palette
                </p>
                <img src={floralDivider} alt="" aria-hidden="true" className="mx-auto mt-4 w-32 opacity-70" />
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="mt-2 text-center text-2xl leading-tight text-[#612130] sm:text-3xl">Principal Sponsors</p>
                    <div className="mt-3 space-y-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                      <details>
                        <summary className="collapse-summary">
                          <span className="collapse-summary__title">
                            Ninong
                          </span>
                          <span className="collapse-summary__hint">Tap to view requirements</span>
                        </summary>
                        <div className="mt-2 flex flex-wrap justify-center gap-2">
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Barong Tagalog</span>
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Black Pants</span>
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Shoes</span>
                        </div>
                      </details>
                      <details>
                        <summary className="collapse-summary">
                          <span className="collapse-summary__title">
                            Ninang
                          </span>
                          <span className="collapse-summary__hint">Tap to view requirements</span>
                        </summary>
                        <div className="mt-2 flex flex-wrap justify-center gap-2">
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Modern/Filipiniana Dress</span>
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Nude/Beige</span>
                        </div>
                      </details>
                    </div>
                  </div>
                  <div>
                    <p className="mt-2 text-center text-2xl leading-tight text-[#612130] sm:text-3xl">Guests</p>
                    <div className="mt-3 space-y-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                      <details>
                        <summary className="collapse-summary">
                          <span className="collapse-summary__title">
                            Male
                          </span>
                          <span className="collapse-summary__hint">Tap to view requirements</span>
                        </summary>
                        <div className="mt-2 flex flex-wrap justify-center gap-2">
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Modern Polo</span>
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Attire</span>
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Shoes</span>
                        </div>
                      </details>
                      <details>
                        <summary className="collapse-summary">
                          <span className="collapse-summary__title">
                            Women
                          </span>
                          <span className="collapse-summary__hint">Tap to view requirements</span>
                        </summary>
                        <div className="mt-2 flex flex-wrap justify-center gap-2">
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Modern/Filipiniana Dress</span>
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Dress</span>
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Sandals</span>
                          <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Heels</span>
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>

            </motion.article>

            <motion.article
              className="paper-panel overflow-hidden lg:h-full"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.5 }}
            >
              <img
                src="https://www.brides.com/thmb/LErgKBPBAmqdXc35kmvEF1O1MS0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image01-c288237aec1c43a4806673f12843a0af.jpeg"
                alt="Wedding palette inspiration"
                className="h-52 w-full object-cover sm:h-72"
              />
              <div className="border-t border-[#7c1f31]/15 px-5 pt-4 pb-6">
                <p className="font-['Manrope'] text-center text-xs uppercase tracking-[0.24em] text-[#7c1f31]/72">Wedding Palette</p>
                <p className="mt-2 text-2xl text-center text-[#612130] sm:text-3xl">PASTEL COLORS</p>
                <div className="mt-4 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                  {[
                    { hex: "#f2f1ec", border: "#d6d2ca", label: "Cream" },
                    { hex: "#e8ddd2", border: "#cec0b2", label: "Beige" },
                    { hex: "#fbeee5", border: "#dfccc0", label: "Blush" },
                    { hex: "#f1e3d8", border: "#d4beb1", label: "Nude" },
                    { hex: "#e9cec6", border: "#caa9a1", label: "Taupe" },
                  ].map((shade, index) => (
                    <div key={index} className="group relative">
                      <div
                        className="h-14 w-14 rounded-full border-[3px] palette-wave transition-transform duration-200 group-hover:scale-[1.08]"
                        style={{ backgroundColor: shade.hex, borderColor: shade.border }}
                      />
                      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-to-br from-[#7c1f31]/95 to-[#4e1220]/98 px-2 py-1 font-['Manrope'] text-[10px] uppercase tracking-widest text-[#f9f3eb] opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
                        {shade.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  <img src={floralDivider} alt="" aria-hidden="true" className="mt-3 w-64" />
                </div>
              </div>
            </motion.article>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
