import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import { clientInfo } from "../data/clientInfo";

const floralDivider = "/assets/floral-divider.svg";
const iconDetails = "/assets/icon-details.svg";

const Info: React.FC = () => {
  const venueCards = [
    {
      label: "Ceremony",
      name: clientInfo.eventDetails.church.name,
      address: clientInfo.eventDetails.church.address,
    },
    {
      label: "Reception",
      name: clientInfo.eventDetails.reception.name,
      address: clientInfo.eventDetails.reception.address,
    },
  ];

  const quickDetails = [
    {
      title: "Date & Time",
      body: `${clientInfo.eventDetails.date} at ${clientInfo.eventDetails.time}`,
    },
    {
      title: "Ceremony",
      body: clientInfo.eventDetails.church.name,
    },
    {
      title: "Reception",
      body: clientInfo.eventDetails.reception.name,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-10 md:px-10">
      <div className="ornament-bg" />
      <FallingPetals />
      <div className="romantic-ring -left-16 top-16 h-44 w-44" />
      <div className="romantic-ring bottom-12 -right-12 h-56 w-56" />

      <motion.main
        className="paper-panel mx-auto w-full max-w-4xl p-7 md:p-9"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src={iconDetails} alt="" aria-hidden="true" className="h-8 w-8" />
        <p className="mt-3 font-['Manrope'] text-xs uppercase tracking-[0.3em] text-[#7c1f31]/75">
          Event Information
        </p>
        <h1 className="mt-2 text-5xl text-[#612130] md:text-6xl">Details</h1>
        <img src={floralDivider} alt="" aria-hidden="true" className="mt-3 w-56" />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {quickDetails.map((block, index) => (
            <motion.section
              key={block.title}
              className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
            >
              <h2 className="text-3xl text-[#612130]">{block.title}</h2>
              <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/72">{block.body}</p>
            </motion.section>
          ))}
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Locations</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Wedding Venues</h2>
            <div className="mt-4 space-y-4">
              {venueCards.map((venue) => (
                <div key={venue.label} className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                  <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">{venue.label}</p>
                  <h3 className="mt-1 text-2xl text-[#612130]">{venue.name}</h3>
                  <p className="mt-2 font-['Manrope'] text-sm text-[#612130]/72">{venue.address}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">RSVP</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Response Requested</h2>
            <p className="mt-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
              The favor of your response is requested {clientInfo.rsvp.cutoffDate}. Please RSVP through
              {" "}
              {clientInfo.rsvp.contactMethod}
              {" "}
              or contact us through SMS at
              {" "}
              <span className="font-semibold text-[#7c1f31]">
                {clientInfo.rsvp.contactPerson} - {clientInfo.rsvp.contactNumber}
              </span>
              .
            </p>

            <div className="mt-5 rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
              <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Dress Note</p>
              <p className="mt-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                Formal attire in the wedding palette is requested for the celebration.
              </p>
            </div>
          </motion.section>

          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6 lg:col-span-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Snap & Share</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Capture The Love</h2>
            <p className="mt-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
              {clientInfo.social.snapAndShareNote}
            </p>
            <p className="mt-4 wrap-break-word text-2xl leading-tight text-[#7c1f31] sm:text-3xl">
              {clientInfo.social.hashtag}
            </p>
          </motion.section>
        </div>

        <Link
          to="/home"
          className="mt-7 inline-block rounded-full border border-[#7c1f31]/35 bg-[#7c1f31] px-6 py-2 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#f9f3eb] transition hover:bg-[#9b2a3f]"
        >
          Back Home
        </Link>
      </motion.main>
    </div>
  );
};

export default Info;
