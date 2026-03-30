import { motion } from "motion/react";
import { type KeyboardEvent, type MouseEvent, useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import HeroSection from "../components/HeroSection";
import MovingVinesBackground from "../components/MovingVinesBackground";
import { clientInfo } from "../data/clientInfo";
 
const venuePhoto = "/sideview-church.jpg";
const receptionPhoto = "/casa-de-polo.jpg";
const floralDivider = "/assets/floral-divider.svg";
const iconRsvp = "/assets/icon-rsvp.svg";
const iconDetails = "/assets/icon-details.svg";
const iconPerson = "/assets/icon-person.svg";
const iconFaq = "/assets/icon-faq.svg";
const bottomFloral = "/assets/bottom-floral.png";
const circleFloral = "/assets/circle-floral.png";
const monogramLogo = "/assets/RM.png";

const buildMapsSearchUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const buildMapsEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

const isInteractiveElement = (target: EventTarget | null) =>
  target instanceof HTMLElement && Boolean(target.closest("button, a"));

const navCards = [
  { to: "/rsvp", label: "RSVP", note: "Kindly confirm attendance", icon: iconRsvp },
  { to: "/info", label: "Details", note: "Schedule, venue, and attire", icon: iconDetails },
  { to: "/entourage", label: "Entourage", note: "Meet our wedding party", icon: iconPerson },
  { to: "/faq", label: "FAQs", note: "Travel and celebration guidance", icon: iconFaq },
];

const attireGuideImages = {
  ninong: "/dress/ninong.png",
  ninang: "/dress/ninang.png",
  men: "/dress/male.png",
  women: "/dress/women.png",
} as const;

const paletteShades = [
  { hex: "#f2f1ec", border: "#d6d2ca", label: "Cream" },
  { hex: "#e8ddd2", border: "#cec0b2", label: "Beige" },
  { hex: "#fbeee5", border: "#dfccc0", label: "Blush" },
  { hex: "#f1e3d8", border: "#d4beb1", label: "Nude" },
  { hex: "#e9cec6", border: "#caa9a1", label: "Taupe" },
] as const;

const Home: React.FC = () => {
  // Responsive attire section state
  const [openSponsorAttireSection, setOpenSponsorAttireSection] = useState<"ninong" | "ninang">("ninong");
  const [openGuestAttireSection, setOpenGuestAttireSection] = useState<"men" | "women">("men");
  const [openAttireSection, setOpenAttireSection] = useState<"ninong" | "ninang" | "men" | "women">("ninong");
  const [isMdScreen, setIsMdScreen] = useState(false);

  // Track screen size for responsive logic
  useEffect(() => {
    const checkScreen = () => {
      // md: min-width 768px, max-width 1023px
      const width = window.innerWidth;
      setIsMdScreen(width >= 768 && width < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  const [flippedVenue, setFlippedVenue] = useState<string | null>(null);
  const [activePaletteShade, setActivePaletteShade] = useState<string | null>(null);
  const toggleVenueCard = (venueLabel: string) => {
    setFlippedVenue((currentVenue) => (currentVenue === venueLabel ? null : venueLabel));
  };

  const handleVenueCardClick = (event: MouseEvent<HTMLElement>, venueLabel: string) => {
    if (isInteractiveElement(event.target)) {
      return;
    }

    toggleVenueCard(venueLabel);
  };

  const handleVenueCardKeyDown = (event: KeyboardEvent<HTMLElement>, venueLabel: string) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleVenueCard(venueLabel);
    }
  };

  const venueCards = [
    {
      label: "Ceremony",
      name: clientInfo.eventDetails.church.name,
      address: clientInfo.eventDetails.church.address,
      query: clientInfo.eventDetails.church.mapsQuery,
    },
    {
      label: "Reception",
      name: clientInfo.eventDetails.reception.name,
      address: clientInfo.eventDetails.reception.address,
      query: clientInfo.eventDetails.reception.mapsQuery,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="ornament-bg" />
      <FallingPetals />
      <HeroSection />

      <div className="relative mx-auto w-full max-w-5xl overflow-hidden px-4 py-8 sm:px-6 lg:px-6 xl:px-8">
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

        <section className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[1fr_1.2fr]">
          <motion.article
            className="accent-panel relative overflow-hidden px-5 pt-6 pb-14 sm:pb-16 md:pb-18 lg:pb-18 xl:pb-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#f9f3eb]/72">Save The Date</p>
            <p className="mt-2 text-4xl sm:text-5xl">Friday, {clientInfo.eventDetails.date}</p>
            <p className="mt-3 font-['Manrope'] text-sm text-[#f9f3eb]/78">
              Ceremony begins at {clientInfo.eventDetails.time} afternoon.
            </p>
            <img src="/rings.png" alt="" aria-hidden="true" className="mt-5 h-24 w-24" />
            <img
              src={bottomFloral}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 w-28 -translate-x-1/2 object-contain sm:w-44 md:w-56 lg:w-[90%] xl:w-full"
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
              <p className="mt-1 text-3xl text-[#612130] sm:text-4xl">{clientInfo.eventDetails.church.name}</p>
              <p className="font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#7c1f31]/74">{clientInfo.eventDetails.church.address}</p>
            </div>
          </motion.article>
        </section>

        <motion.section
          className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[1fr_1.2fr]"
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
                className="absolute z-10 w-34 rounded-full object-contain sm:w-44"
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
          className="paper-panel mt-5 overflow-hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65 }}
        >
          <img src={receptionPhoto} alt="Reception venue" className="h-56 w-full object-cover sm:h-72 lg:h-72 xl:h-80" />
          <div className="border-t border-[#7c1f31]/15 px-5 py-4 text-center">
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#7c1f31]/72">Reception</p>
            <p className="mt-2 text-2xl text-[#612130] sm:text-3xl">{clientInfo.eventDetails.reception.name}</p>
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.24em] text-[#7c1f31]/72">{clientInfo.eventDetails.reception.address}</p>
          </div>
        </motion.article>

        <motion.section
          className="mt-5 grid grid-cols-1 gap-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch xl:grid-cols-[1fr_1.2fr]">
            <motion.article
              className="paper-panel relative overflow-hidden xl:h-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
            >
              <div className="px-6 py-6 sm:px-7">
                <p className="font-['Manrope'] text-center text-[11px] uppercase tracking-[0.24em] text-[#7c1f31]/72">Dress Code</p>
                <p className="mt-2 text-center text-2xl leading-tight text-[#612130] sm:text-3xl">FORMAL ATTIRE</p>
                <img src={floralDivider} alt="" aria-hidden="true" className="mx-auto mt-4 w-32 opacity-70" />
                {/* Responsive attire accordions */}
                {isMdScreen ? (
                  <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
                    <div>
                      <div className="mt-3 space-y-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                        <details open={openSponsorAttireSection === "ninong"}>
                          <summary
                            className="collapse-summary"
                            onClick={(event) => {
                              event.preventDefault();
                              setOpenSponsorAttireSection("ninong");
                            }}
                          >
                            <span className="collapse-summary__title">Ninong</span>
                            <span className="collapse-summary__hint">Principal Sponsors</span>
                          </summary>
                          <div className="mx-auto mt-3 flex h-40 w-full max-w-104 items-center justify-center overflow-hidden rounded-3xl border border-[#7c1f31]/12 bg-[#f8f1ea] p-3">
                            <img src={attireGuideImages.ninong} alt="Ninong attire guide" className="h-full w-full object-contain" />
                          </div>
                          <div className="mt-2 flex flex-wrap justify-center gap-2">
                            <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Barong Tagalog</span>
                            <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Black Pants</span>
                            <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Shoes</span>
                          </div>
                        </details>
                        <details open={openSponsorAttireSection === "ninang"}>
                          <summary
                            className="collapse-summary"
                            onClick={(event) => {
                              event.preventDefault();
                              setOpenSponsorAttireSection("ninang");
                            }}
                          >
                            <span className="collapse-summary__title">Ninang</span>
                            <span className="collapse-summary__hint">Principal Sponsors</span>
                          </summary>
                          <div className="mx-auto mt-3 flex h-40 w-full max-w-104 items-center justify-center overflow-hidden rounded-3xl border border-[#7c1f31]/12 bg-[#f8f1ea] p-3">
                            <img src={attireGuideImages.ninang} alt="Ninang attire guide" className="h-full w-full object-contain" />
                          </div>
                          <div className="mt-2 flex flex-wrap justify-center gap-2">
                            <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Modern/Filipiniana Dress</span>
                            <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Nude/Beige</span>
                          </div>
                        </details>
                      </div>
                    </div>
                    <div>
                      <div className="mt-3 space-y-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                        <details open={openGuestAttireSection === "men"}>
                          <summary
                            className="collapse-summary"
                            onClick={(event) => {
                              event.preventDefault();
                              setOpenGuestAttireSection("men");
                            }}
                          >
                            <span className="collapse-summary__title">Men</span>
                            <span className="collapse-summary__hint">Guests</span>
                          </summary>
                          <div className="mx-auto mt-3 flex h-40 w-full max-w-104 items-center justify-center overflow-hidden rounded-3xl border border-[#7c1f31]/12 bg-[#f8f1ea] p-3">
                            <img src={attireGuideImages.men} alt="Male guest attire guide" className="h-full w-full object-contain" />
                          </div>
                          <div className="mt-2 flex flex-wrap justify-center gap-2">
                            <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Modern Polo</span>
                            <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Attire</span>
                            <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Shoes</span>
                          </div>
                        </details>
                        <details open={openGuestAttireSection === "women"}>
                          <summary
                            className="collapse-summary"
                            onClick={(event) => {
                              event.preventDefault();
                              setOpenGuestAttireSection("women");
                            }}
                          >
                            <span className="collapse-summary__title">Women</span>
                            <span className="collapse-summary__hint">Guests</span>
                          </summary>
                          <div className="mx-auto mt-3 flex h-40 w-full max-w-104 items-center justify-center overflow-hidden rounded-3xl border border-[#7c1f31]/12 bg-[#f8f1ea] p-3">
                            <img src={attireGuideImages.women} alt="Women guest attire guide" className="h-full w-full object-contain" />
                          </div>
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
                ) : (
                  <div className="mt-4 space-y-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                    <details open={openAttireSection === "ninong"}>
                      <summary
                        className="collapse-summary"
                        onClick={(event) => {
                          event.preventDefault();
                          setOpenAttireSection("ninong");
                        }}
                      >
                        <span className="collapse-summary__title">Ninong</span>
                        <span className="collapse-summary__hint">Principal Sponsors</span>
                      </summary>
                      <div className="mx-auto mt-3 flex h-40 w-full max-w-104 items-center justify-center overflow-hidden rounded-3xl border border-[#7c1f31]/12 bg-[#f8f1ea] p-3">
                        <img src={attireGuideImages.ninong} alt="Ninong attire guide" className="h-full w-full object-contain" />
                      </div>
                      <div className="mt-2 flex flex-wrap justify-center gap-2">
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Barong Tagalog</span>
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Black Pants</span>
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Shoes</span>
                      </div>
                    </details>
                    <details open={openAttireSection === "ninang"}>
                      <summary
                        className="collapse-summary"
                        onClick={(event) => {
                          event.preventDefault();
                          setOpenAttireSection("ninang");
                        }}
                      >
                        <span className="collapse-summary__title">Ninang</span>
                        <span className="collapse-summary__hint">Principal Sponsors</span>
                      </summary>
                      <div className="mx-auto mt-3 flex h-40 w-full max-w-104 items-center justify-center overflow-hidden rounded-3xl border border-[#7c1f31]/12 bg-[#f8f1ea] p-3">
                        <img src={attireGuideImages.ninang} alt="Ninang attire guide" className="h-full w-full object-contain" />
                      </div>
                      <div className="mt-2 flex flex-wrap justify-center gap-2">
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Modern/Filipiniana Dress</span>
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Nude/Beige</span>
                      </div>
                    </details>
                    <details open={openAttireSection === "men"}>
                      <summary
                        className="collapse-summary"
                        onClick={(event) => {
                          event.preventDefault();
                          setOpenAttireSection("men");
                        }}
                      >
                        <span className="collapse-summary__title">Men</span>
                        <span className="collapse-summary__hint">Guests</span>
                      </summary>
                      <div className="mx-auto mt-3 flex h-40 w-full max-w-104 items-center justify-center overflow-hidden rounded-3xl border border-[#7c1f31]/12 bg-[#f8f1ea] p-3">
                        <img src={attireGuideImages.men} alt="Male guest attire guide" className="h-full w-full object-contain" />
                      </div>
                      <div className="mt-2 flex flex-wrap justify-center gap-2">
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Modern Polo</span>
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Attire</span>
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Shoes</span>
                      </div>
                    </details>
                    <details open={openAttireSection === "women"}>
                      <summary
                        className="collapse-summary"
                        onClick={(event) => {
                          event.preventDefault();
                          setOpenAttireSection("women");
                        }}
                      >
                        <span className="collapse-summary__title">Women</span>
                        <span className="collapse-summary__hint">Guests</span>
                      </summary>
                      <div className="mx-auto mt-3 flex h-40 w-full max-w-104 items-center justify-center overflow-hidden rounded-3xl border border-[#7c1f31]/12 bg-[#f8f1ea] p-3">
                        <img src={attireGuideImages.women} alt="Women guest attire guide" className="h-full w-full object-contain" />
                      </div>
                      <div className="mt-2 flex flex-wrap justify-center gap-2">
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Modern/Filipiniana Dress</span>
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Formal Dress</span>
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Sandals</span>
                        <span className="attire-chip px-3 py-1 text-xs uppercase tracking-[0.15em]">Heels</span>
                      </div>
                    </details>
                  </div>
                )}
              </div>

            </motion.article>

            <motion.article
              className="paper-panel overflow-hidden lg:flex lg:h-full lg:flex-col"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.5 }}
            >
              <div className="overflow-hidden lg:flex-1">
                <img
                  src="/couple.jpg"
                  alt="Wedding palette inspiration"
                  className="h-52 w-full object-cover object-[right_center] sm:h-72 lg:h-full lg:min-h-88 xl:min-h-104"
                />
              </div>
              <div className="border-t border-[#7c1f31]/15 px-5 pt-4 pb-6">
                <p className="font-['Manrope'] text-center text-xs uppercase tracking-[0.24em] text-[#7c1f31]/72">Wedding Palette</p>
                <p className="mt-2 text-2xl text-center text-[#612130] sm:text-3xl">PASTEL COLORS</p>
                <div className="mt-4 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                  {paletteShades.map((shade) => {
                    const isActive = activePaletteShade === shade.label;

                    return (
                      <button
                        key={shade.label}
                        type="button"
                        className="group relative flex flex-col items-center"
                        aria-label={`Show ${shade.label} palette shade`}
                        aria-pressed={isActive}
                        onClick={() => setActivePaletteShade((current) => (current === shade.label ? null : shade.label))}
                      >
                        <span
                          className={`h-11 w-11 rounded-full border-[3px] palette-wave transition-transform duration-200 group-hover:scale-[1.08] ${isActive ? "scale-[1.08]" : ""} sm:h-13 sm:w-13`}
                          style={{ backgroundColor: shade.hex, borderColor: shade.border }}
                        />
                        <span
                          className={`pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-linear-to-br from-[#7c1f31]/95 to-[#4e1220]/98 px-2 py-1 font-['Manrope'] text-[10px] uppercase tracking-widest text-[#f9f3eb] shadow-md transition-opacity duration-200 group-hover:opacity-100 ${isActive ? "opacity-100" : "opacity-0"}`}
                        >
                          {shade.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-center">
                  <img src={floralDivider} alt="" aria-hidden="true" className="mt-3 w-64" />
                </div>
              </div>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          className="mt-5 rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.55 }}
        >
          <p className="font-['Manrope'] text-center text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Wedding Locations</p>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {venueCards.map((venue, index) => {
              const isFlipped = flippedVenue === venue.label;
              const mapUrl = buildMapsSearchUrl(venue.query);

              return (
                <motion.article
                  key={venue.label}
                  className="perspective h-116"
                  onClick={(event) => handleVenueCardClick(event, venue.label)}
                  onKeyDown={(event) => handleVenueCardKeyDown(event, venue.label)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isFlipped}
                  aria-label={`${isFlipped ? "Hide" : "Reveal"} ${venue.label} QR code`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34 + index * 0.08, duration: 0.42 }}
                >
                  <div className={`flip-card-inner h-full ${isFlipped ? "is-flipped" : ""}`}>
                    <div className="flip-card-face paper-panel flex h-full flex-col overflow-hidden">
                      <div className="h-80 w-full flex items-center overflow-hidden bg-[#f4ebdf]">
                        <iframe
                          title={`${venue.label} map preview`}
                          src={buildMapsEmbedUrl(venue.query)}
                          className="h-full w-full border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                      <div className="flex flex-1 flex-col px-4 py-3">
                        <p className="font-['Manrope'] text-[10px] uppercase tracking-[0.18em] text-[#7c1f31]/72 mb-1 truncate">{venue.label}</p>
                        <h3 className="text-2xl leading-tight text-[#612130] mb-1 truncate">{venue.name}</h3>
                        <p className="font-['Manrope'] text-xs leading-snug text-[#612130]/72 mb-2 truncate">{venue.address}</p>
                        <button
                          type="button"
                          onClick={() => setFlippedVenue(venue.label)}
                          className="mt-auto inline-flex w-fit rounded-full border border-[#7c1f31]/35 bg-[#7c1f31] px-4 py-1.5 font-['Manrope'] text-[10px] uppercase tracking-[0.18em] text-[#f9f3eb] transition hover:bg-[#9b2a3f]"
                        >
                          Scan QR
                        </button>
                      </div>
                    </div>

                    <div className="flip-card-face flip-card-back paper-panel flex h-full flex-col items-center justify-center px-5 py-6 text-center">
                      <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">{venue.label}</p>
                      <h3 className="mt-2 text-3xl text-[#612130]">Scan For Directions</h3>
                      <div className="mt-5 rounded-[1.8rem] border border-[#7c1f31]/12 bg-white p-4 shadow-[0_12px_28px_rgba(102,49,64,0.12)]">
                        <QRCodeSVG value={mapUrl} size={220} bgColor="#ffffff" fgColor="#2f0e18" includeMargin />
                      </div>
                      <p className="mt-4 max-w-sm font-['Manrope'] text-sm leading-relaxed text-[#612130]/72">
                        {venue.name} in Google Maps.
                      </p>
                      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setFlippedVenue(null)}
                          className="inline-flex w-fit rounded-full border border-[#7c1f31]/18 bg-white px-4 py-1.5 font-['Manrope'] text-[10px] uppercase tracking-[0.18em] text-[#7c1f31] transition hover:border-[#7c1f31]/35 hover:bg-[#7c1f31]/6"
                        >
                          Back
                        </button>
                        <a
                          href={mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-fit rounded-full border border-[#7c1f31]/35 bg-[#7c1f31] px-4 py-1.5 font-['Manrope'] text-[10px] uppercase tracking-[0.18em] text-[#f9f3eb] transition hover:bg-[#9b2a3f]"
                        >
                          Open Map
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          className="relative mt-5 overflow-hidden rounded-4xl shadow-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.45 }}
        >
          <img
            src="/couple.jpg"
            alt="Couple"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ zIndex: 1 }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#7c1f31]/70 via-[#7c1f31]/60 to-[#612130]/80 opacity-80 hero-overlay" style={{ zIndex: 2 }} />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center sm:px-8">
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#f9f3eb]/74">Snap & Share</p>
            <h2 className="mt-8 text-4xl text-[#f9f3eb] md:text-5xl" style={{ fontFamily: "'Amoresa Aged', serif" }}>Capture The Love</h2>
            <p className="mt-5 wrap-break-word text-2xl leading-tight text-[#f9f3eb] sm:text-3xl">
              {clientInfo.social.hashtag}
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
