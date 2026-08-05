import { motion } from 'framer-motion';
import portrait from '@/assets/portrait.jpg';

const stats = [
  { value: '21K+', label: 'posts' },
  { value: '6.9K', label: 'followers' },
  { value: '1M+', label: 'impressions' },
];

const brands = ['CAKE WALLET', 'FHENIX', 'TANGEM', 'BASE', 'FLUTONIO'];

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
            As a crypto-native UGC creator, I bring an authentic and relatable perspective
            that connects with the timeline — the degens, the newcomers and everyone in between.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-300 sm:text-base">
            I&apos;ve partnered with wallets, L2s and web3 brands to create short-form videos
            and tweets that actually feel native to crypto twitter — not like an ad.
            From unboxings to vault walkthroughs, every piece is built to stop the scroll.
            Also yes — <span className="pink">i am the exit liquidity they talk about. NFA.</span>
          </p>

          <div className="mt-8 flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-[#f5a3c7]">{s.value}</div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6">
            {brands.map((b) => (
              <span key={b} className="text-[11px] font-bold tracking-[0.25em] text-neutral-500">
                {b}
              </span>
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
          <p className="font-script absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-5xl text-[#f5a3c7]">
            Vanshika✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
