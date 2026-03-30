import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import { clientInfo } from "../data/clientInfo";

const floralDivider = "/assets/floral-divider.svg";
const iconFaq = "/assets/icon-faq.svg";

const faqs = [
  {
    q: "What time does the ceremony begin?",
    a: `The wedding ceremony will begin at ${clientInfo.eventDetails.time} on ${clientInfo.eventDetails.date}. Please arrive early so you can be seated before the ceremony starts.`,
  },
  {
    q: "Where will the ceremony and reception be held?",
    a: `The ceremony will be at ${clientInfo.eventDetails.church.name}, ${clientInfo.eventDetails.church.address}. The reception will follow at ${clientInfo.eventDetails.reception.name}, ${clientInfo.eventDetails.reception.address}.`,
  },
  {
    q: "How do I confirm my attendance?",
    a: `Please submit your RSVP on or before ${clientInfo.rsvp.cutoffDate}. You may also contact ${clientInfo.rsvp.contactPerson} through ${clientInfo.rsvp.contactMethod} or at ${clientInfo.rsvp.contactNumber}.`,
  },
  {
    q: "Can I bring an additional guest or companion?",
    a: "Our wedding will be an intimate gathering. We kindly ask our guests not to bring additional companions unless specifically included in the invitation.",
  },
  {
    q: "What should I wear?",
    a: "Formal attire is requested. Guests are encouraged to follow the wedding palette and wear attire appropriate for the ceremony and reception.",
  },
  {
    q: "What is the attire guide for women guests?",
    a: `${clientInfo.attireAndColorPalette.guestWomen.attire}. Restrictions: ${clientInfo.attireAndColorPalette.guestWomen.restrictions}.`,
  },
  {
    q: "What is the attire guide for male guests?",
    a: `${clientInfo.attireAndColorPalette.guestMale.attire}. Restrictions: ${clientInfo.attireAndColorPalette.guestMale.restrictions}.`,
  },
  {
    q: "Are monetary gifts accepted?",
    a: "No monetary gifts, please. Your presence and prayers are already a meaningful gift to the couple.",
  },
  {
    q: "How can I share photos from the wedding?",
    a: `${clientInfo.social.snapAndShareNote} Use the hashtag ${clientInfo.social.hashtag}.`,
  },
];

const FAQ: React.FC = () => {
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
        <img src={iconFaq} alt="" aria-hidden="true" className="h-8 w-8" />
        <p className="mt-3 font-['Manrope'] text-xs uppercase tracking-[0.3em] text-[#7c1f31]/75">FAQ</p>
        <h1 className="mt-2 text-5xl text-[#612130] md:text-6xl">Questions</h1>
        <img src={floralDivider} alt="" aria-hidden="true" className="mt-3 w-56" />
        <p className="mt-4 max-w-3xl font-['Manrope'] text-sm leading-relaxed text-[#612130]/74 md:text-base">
          A quick guide for our guests covering attendance, venue details, dress guidance, gifts,
          and sharing memories from the day.
        </p>

        <div className="mt-6 space-y-3">
          {faqs.map((item, i) => (
            <motion.section
              key={item.q}
              className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * i, duration: 0.45 }}
            >
              <h2 className="text-2xl text-[#612130]">{item.q}</h2>
              <p className="mt-1 font-['Manrope'] text-sm leading-relaxed text-[#612130]/72">{item.a}</p>
            </motion.section>
          ))}
        </div>

        <Link
          to="/home"
          className="mt-7 inline-block rounded-full border border-[#7c1f31]/35 px-6 py-2 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#612130] transition hover:bg-white/60"
        >
          Back Home
        </Link>
      </motion.main>
    </div>
  );
};

export default FAQ;
