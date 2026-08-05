import { motion } from 'framer-motion';
import portrait from '@/assets/vanshika_laptop.jpg';

const stats = [
  { value: '21K+', label: 'posts' },
  { value: '6.9K', label: 'followers' },
  { value: '1M+', label: 'impressions' },
];

export default function WhoAmI() {
  return (
    <section id="who" className="bg-black py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-5xl text-[#f5a3c7] sm:text-7xl">WHO AM I</h2>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-neutral-300 sm:text-base">
            I&apos;m the person who can actually give your project real visibility. I make video
            content that hits, write banger tweets that make people stop scrolling, market projects
            to a wider CT audience, and bring in thousands of leads (just like I did for Polymarket).
            I help projects with content strategy, growth marketing, community building, and business
            development — the kind of stuff that actually moves the needle instead of just looking
            pretty on a pitch deck.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-300 sm:text-base">
            Whether it&apos;s turning your product into scroll-stopping content, running
            high-converting campaigns, or opening doors to the right audiences, I know how to make
            noise that converts.
          </p>

          <div className="mt-8 flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-[#f5a3c7]">{s.value}</div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-2xl">
            <img src={portrait} alt="Vanshika" className="aspect-[3/4] w-full object-cover object-top" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
