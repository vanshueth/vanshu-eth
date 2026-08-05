import { motion } from 'framer-motion';
import portrait from '@/assets/portrait.jpg';

const niches = ['DeFi', 'Wallets', 'Hardware', 'L2s', 'Privacy', 'Memes'];

export default function Niche() {
  return (
    <section className="bg-black pb-24 pt-4 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="relative mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img src={portrait} alt="Vanshika" className="aspect-[3/4] w-full object-cover object-top" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          <h2 className="font-display text-5xl text-[#f5a3c7] sm:text-7xl">MY NICHE</h2>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-neutral-300 sm:text-base">
            As a crypto UGC creator, I bring an authentic and relatable perspective that connects
            with a wide range of audiences — from first-time wallet users to full-time degens.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-300 sm:text-base">
            I&apos;ve partnered with brands across the ecosystem, from early-stage privacy projects
            to established wallets and L2s, bringing the same level of creativity and
            professionalism to every collaboration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {niches.map((n) => (
              <span
                key={n}
                className="rounded-full border-2 border-[#f5a3c7] px-5 py-2 text-xs font-bold tracking-widest text-white transition-colors hover:bg-pink-brand hover:text-black"
              >
                {n}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
