import { motion } from 'framer-motion';
import cutout from '@/assets/vanshika_laptop_cutout.webp';

const stats = [
  { value: '7.0k', label: 'followers' },
  { value: '11M+', label: 'impressions' },
];

export default function WhoAmI() {
  return (
    <section id="who" className="overflow-hidden bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* kicker */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f5a3c7]"
        >
          the creator behind the timeline
        </motion.p>

        {/* giant title + overlapping photo + copy */}
        <div className="relative mt-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display relative z-0 text-center leading-none text-[#f5a3c7]"
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
          >
            WHO AM I
          </motion.h2>

          <div className="relative z-10 mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-[1.6fr_1.4fr] lg:gap-0">
            {/* photo cutout overlapping title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:-mt-32 lg:ml-[17%] lg:mr-0 lg:max-w-[400px]"
            >
              <img
                src={cutout}
                alt="Vanshika"
                className="relative z-10 w-full lg:-mr-16"
              />
              {/* soft ground shadow */}
              <div className="absolute bottom-1 left-1/2 z-0 h-10 w-4/5 -translate-x-1/2 rounded-full bg-pink-brand/30 blur-xl" />
            </motion.div>

            {/* copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:-ml-16 lg:max-w-[540px]"
            >
              <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                I&apos;m the person who can actually give your project real visibility. I make video
                content that hits, write banger tweets that make people stop scrolling, market projects
                to a wider CT audience, and bring in thousands of leads (just like I did for Polymarket).
                I help projects with content strategy, growth marketing, community building, and business
                development. The kind of stuff that actually moves the needle instead of just looking
                pretty on a pitch deck.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-neutral-300 sm:text-base">
                Whether it&apos;s turning your product into scroll-stopping content, running
                high-converting campaigns, or opening doors to the right audiences, I know how to make
                noise that converts.
              </p>

              <div className="mt-8 flex gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl text-[#f5a3c7]">{s.value}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
