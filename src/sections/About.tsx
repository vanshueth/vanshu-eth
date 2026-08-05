import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono2 mb-4 text-sm uppercase tracking-widest text-violet-400">/ about</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            the girl behind <br /> the <span className="text-gradient">tweets</span>
          </h2>
          <p className="mt-6 leading-relaxed text-zinc-400">
            Vanshika is a crypto-native content creator living rent-free on your timeline since
            October 2023. Part market commentator, part meme connoisseur, part professional
            bag-holder — she turns the chaos of crypto into content people actually stop scrolling for.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-400">
            From Indian crypto adoption headlines to leverage-trading confessionals, her timeline is
            a front-row seat to the markets — funny, sharp, and always <span className="text-white">NFA</span>.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-zinc-500">
            <BadgeCheck size={16} className="text-sky-400" />
            verified on X · joined oct 2023 · tweets in lowercase on principle
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="animate-float glass glow-purple relative rounded-3xl p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-emerald-400 font-display text-2xl font-bold text-black">
                V✨
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-semibold">
                  Vanshika✨ <BadgeCheck size={16} className="text-sky-400" />
                </div>
                <div className="text-sm text-zinc-500">@vanshuETH</div>
              </div>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-zinc-200">
              i am the exit liquidity they talk about | NFA
            </p>
            <div className="font-mono2 mt-6 flex gap-6 text-sm text-zinc-500">
              <span><b className="text-white">21.4K</b> posts</span>
              <span><b className="text-white">6.9K</b> followers</span>
              <span><b className="text-white">761</b> following</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 -z-10 h-full w-full rounded-3xl border border-violet-500/20" />
        </motion.div>
      </div>
    </section>
  );
}
