import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FallingPetals from "../components/FallingPetals";
import { clientInfo } from "../data/clientInfo";

const floralDivider = "/assets/floral-divider.svg";
const iconDetails = "/assets/icon-details.svg";

const buildMapsSearchUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

type AttireDetail = {
  role: string;
  attire: string;
  restrictions?: string;
};

const attireDetails: AttireDetail[] = [
  clientInfo.attireAndColorPalette.ninong,
  clientInfo.attireAndColorPalette.ninang,
  clientInfo.attireAndColorPalette.guestMale,
  clientInfo.attireAndColorPalette.guestWomen,
];

const paletteShades = [
  { hex: "#f2f1ec", border: "#d6d2ca", label: "Cream" },
  { hex: "#e8ddd2", border: "#cec0b2", label: "Beige" },
  { hex: "#fbeee5", border: "#dfccc0", label: "Blush" },
  { hex: "#f1e3d8", border: "#d4beb1", label: "Nude" },
  { hex: "#e9cec6", border: "#caa9a1", label: "Taupe" },
];

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

const quickDetails = [
  {
    title: "Date",
    body: clientInfo.eventDetails.date,
  },
  {
    title: "Time",
    body: clientInfo.eventDetails.time,
  },
  {
    title: "RSVP By",
    body: clientInfo.rsvp.cutoffDate,
  },
];

const principalSponsorGroups = [
  {
    key: "male",
    names: clientInfo.principalSponsors.male,
  },
  {
    key: "female",
    names: clientInfo.principalSponsors.female,
  },
];
const principalSponsorPairs = clientInfo.principalSponsors.male.map((name, index) => ({
  male: name,
  female: clientInfo.principalSponsors.female[index],
}));

const Info: React.FC = () => {
  return (
    <div className="relative flex min-h-screen justify-center overflow-hidden px-4 py-10 sm:px-6 md:px-10">
      <div className="ornament-bg" />
      <FallingPetals />
      <div className="romantic-ring -left-16 top-16 h-44 w-44" />
      <div className="romantic-ring bottom-12 -right-12 h-56 w-56" />

      <motion.main
        className="paper-panel w-full max-w-5xl p-7 md:p-9"
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
        <p className="mt-4 max-w-3xl font-['Manrope'] text-sm leading-relaxed text-[#612130]/74 md:text-base">
          Everything you need for the celebration, from ceremony timing and venue directions to RSVP
          reminders, dress guidance, and our wedding hashtag.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {quickDetails.map((block, index) => (
            <motion.section
              key={block.title}
              className="rounded-2xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
            >
              <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">
                {block.title}
              </p>
              <h2 className="mt-2 text-3xl text-[#612130]">{block.body}</h2>
            </motion.section>
          ))}
        </div>
        <div className="mt-6 grid gap-4">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6 lg:col-span-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Couple</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Bride And Groom</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Groom</p>
                <h3 className="mt-1 text-4xl text-[#612130]">{clientInfo.couple.groom.preferredName}</h3>
                <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/72">
                  {clientInfo.couple.groom.fullName}
                </p>
                <p className="mt-3 font-['Manrope'] text-[11px] uppercase tracking-[0.18em] text-[#7c1f31]/68">
                  Father of the Groom
                </p>
                <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/72">
                  {clientInfo.parents.groom[0]}
                </p>
                <p className="mt-3 font-['Manrope'] text-[11px] uppercase tracking-[0.18em] text-[#7c1f31]/68">
                  Mother of the Groom
                </p>
                <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/72">
                  {clientInfo.parents.groom[1]}
                </p>
              </div>
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Bride</p>
                <h3 className="mt-1 text-4xl text-[#612130]">{clientInfo.couple.bride.preferredName}</h3>
                <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/72">
                  {clientInfo.couple.bride.fullName}
                </p>
                <p className="mt-3 font-['Manrope'] text-[11px] uppercase tracking-[0.18em] text-[#7c1f31]/68">
                  Father of the Bride
                </p>
                <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/72">
                  {clientInfo.parents.bride[0]}
                </p>
                <p className="mt-3 font-['Manrope'] text-[11px] uppercase tracking-[0.18em] text-[#7c1f31]/68">
                  Mother of the Bride
                </p>
                <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/72">
                  {clientInfo.parents.bride[1]}
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Schedule</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Wedding Day</h2>
            <div className="mt-4 rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
              <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Ceremony</p>
              <p className="mt-2 text-2xl text-[#612130]">{clientInfo.eventDetails.date}</p>
              <p className="mt-1 font-['Manrope'] text-sm text-[#612130]/74">
                Ceremony begins at {clientInfo.eventDetails.time}.
              </p>
            </div>
            <div className="mt-4 rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
              <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">For Guests</p>
              <p className="mt-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                Please arrive with enough time to be seated before the ceremony starts and proceed to
                the reception after the service.
              </p>
            </div>
          </motion.section>

          <motion.section
            className="flex h-full flex-col rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">RSVP</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Response Requested</h2>
            <div className="mt-4 grid flex-1 gap-3">
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Deadline</p>
                <p className="mt-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  Initial RSVP deadline: {clientInfo.rsvp.deadline}
                </p>
                <p className="mt-1 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  Final cutoff: {clientInfo.rsvp.cutoffDate}
                </p>
              </div>
              <div className="flex h-full flex-col rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Contact</p>
                <p className="mt-2 flex-1 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  Please RSVP through {clientInfo.rsvp.contactMethod} <br/> Or contact{" "}
                  <span className="font-semibold text-[#7c1f31]">{clientInfo.rsvp.contactPerson}</span> at{" "}
                  <span className="font-semibold text-[#7c1f31]">{clientInfo.rsvp.contactNumber}</span>.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6 lg:col-span-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Locations</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Wedding Venues</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {venueCards.map((venue) => (
                <div
                  key={venue.label}
                  className="flex h-full flex-col rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4"
                >
                  <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">
                    {venue.label}
                  </p>
                  <h3 className="mt-1 text-2xl text-[#612130]">{venue.name}</h3>
                  <p className="mt-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/72">
                    {venue.address}
                  </p>
                  <a
                    href={buildMapsSearchUrl(venue.query)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-fit self-start rounded-full border border-[#7c1f31]/35 px-4 py-2 font-['Manrope'] text-xs uppercase tracking-[0.18em] text-[#612130] transition hover:bg-white"
                  >
                    Open in Maps
                  </a>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6 lg:col-span-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Wedding Palette</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Cream, Beige, Blush, Nude, And Taupe</h2>
            <p className="mt-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
              Formal attire in the full wedding palette of cream, beige, blush, nude, and taupe is requested for the celebration.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {paletteShades.map((shade) => (
                <div key={shade.label} className="flex items-center gap-3 rounded-full border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-2">
                  <span
                    className="h-8 w-8 rounded-full border-[3px]"
                    style={{ backgroundColor: shade.hex, borderColor: shade.border }}
                  />
                  <span className="font-['Manrope'] text-xs uppercase tracking-[0.18em] text-[#612130]/76">
                    {shade.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6 lg:col-span-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.33, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Dress Code</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Attire Guide</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {attireDetails.map((entry) => (
                <div
                  key={entry.role}
                  className="flex h-full flex-col rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4"
                >
                  <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">
                    {entry.role}
                  </p>
                  <p className="mt-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                    {entry.attire}
                  </p>
                  {entry.restrictions ? (
                    <p className="mt-auto rounded-2xl border border-[#7c1f31]/10 bg-white/70 px-3 py-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/68">
                      Restrictions: {entry.restrictions}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6 lg:col-span-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.4 }}
          >
            <h2 className="mt-2 text-4xl text-[#612130]">Nuptial Entourage</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4 md:col-span-2">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Principal Sponsors</p>
                <div className="mt-3">
                  <div className="space-y-2 md:hidden">
                    {principalSponsorGroups.map((group) =>
                      group.names.map((name) => (
                        <p key={`${group.key}-${name}`} className="font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                          {name}
                        </p>
                      )),
                    )}
                  </div>
                  <div className="hidden space-y-2 md:block">
                    {principalSponsorPairs.map((pair) => (
                      <div key={`${pair.male}-${pair.female}`} className="grid grid-cols-2 items-center gap-3">
                        <p className="font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                          {pair.male}
                        </p>
                        <p className="font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                          {pair.female}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Best Man</p>
                <div className="mt-3 space-y-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  <p>{clientInfo.wedding_party.bestMan}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Maid of Honor</p>
                <div className="mt-3 space-y-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  <p>{clientInfo.wedding_party.maidOfHonor}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Ring Bearer</p>
                <div className="mt-3 space-y-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  <p>{clientInfo.wedding_party.ringBearer}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Flower Girls</p>
                <div className="mt-3 space-y-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  {clientInfo.wedding_party.flowerGirls.map((person) => (
                    <p key={person}>{person}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Groomsmen</p>
                <div className="mt-3 space-y-2">
                  {clientInfo.wedding_party.groomsmen.map((person) => (
                    <p key={person} className="font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                      {person}
                    </p>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Bridesmaids</p>
                <div className="mt-3 space-y-2">
                  {clientInfo.wedding_party.bridesmaids.map((person) => (
                    <p key={person} className="font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                      {person}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6 lg:col-span-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.39, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Important Information</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Guest Reminders</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Attendance</p>
                <p className="mt-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  Our wedding will be an intimate gathering. We kindly ask guests not to bring additional companions.
                </p>
              </div>
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">Ceremony Etiquette</p>
                <p className="mt-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  We kindly request that mobile devices are not used during the ceremony, to help make this special moment truly memorable for everyone.
                </p>
              </div>
              <div className="rounded-3xl border border-[#7c1f31]/12 bg-[#fffaf5] px-4 py-4">
                <p className="font-['Manrope'] text-xs uppercase tracking-[0.22em] text-[#7c1f31]/72">RSVP</p>
                <p className="mt-2 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
                  Please respond on or before {clientInfo.rsvp.cutoffDate} so we can finalize seating and reception arrangements.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="rounded-4xl border border-[#7c1f31]/15 bg-white/72 p-5 text-center shadow-[0_14px_30px_rgba(102,49,64,0.1)] md:p-6 lg:col-span-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.4 }}
          >
            <p className="font-['Manrope'] text-xs uppercase tracking-[0.28em] text-[#7c1f31]/75">Snap & Share</p>
            <h2 className="mt-2 text-4xl text-[#612130]">Capture The Love</h2>
            <p className="mt-3 font-['Manrope'] text-sm leading-relaxed text-[#612130]/74">
              {clientInfo.social.snapAndShareNote}
            </p>
            <p className="mt-4 break-words text-2xl leading-tight text-[#7c1f31] sm:text-3xl">
              {clientInfo.social.hashtag}
            </p>
          </motion.section>
        </div>
        </div>

        <Link
          to="/home"
          reloadDocument
          className="mt-7 inline-block rounded-full border border-[#7c1f31]/35 bg-[#7c1f31] px-6 py-2 font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#f9f3eb] transition hover:bg-[#9b2a3f]"
        >
          Back Home
        </Link>
      </motion.main>
    </div>
  );
};

export default Info;
