import { motion } from 'framer-motion';
import { Twitter, Mail, ArrowUpRight } from 'lucide-react';
import portrait from '@/assets/portrait.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative">
          {/* script overlay */}
          <motion.p
            initial={{ opacity: 0, y: -20, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.7 }}
            className="font-script pointer-events-none absolute -top-2 left-1/2 z-20 -translate-x-1/2 text-6xl text-black sm:text-8xl"
          >
            Ugc
          </motion.p>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="relative z-10 pb-4 pt-16 lg:pb-10">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-display leading-[0.9] text-[#f5a3c7]"
                style={{ fontSize: 'clamp(4.5rem, 14vw, 12.5rem)' }}
              >
                PORTF
                <span className="relative">
                  O
                </span>
                LIO
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base"
              >
                Authentic storytelling that connects crypto brands with audiences
                through relatable, timeline-native content.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href="https://x.com/vanshuETH"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-bold tracking-widest text-white transition-transform hover:scale-105"
                >
                  <Twitter size={14} /> @vanshuETH
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="mailto:gm@vanshu.eth"
                  className="flex items-center gap-2 rounded-full border-2 border-black px-6 py-3 text-xs font-bold tracking-widest text-black transition-colors hover:bg-black hover:text-white"
                >
                  <Mail size={14} /> RATE CARD
                </a>
              </motion.div>
            </div>

            {/* portrait */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative z-0 mx-auto -mt-24 w-[300px] sm:w-[360px] lg:-mt-40 lg:w-[420px]"
            >
              <img
                src={portrait}
                alt="Vanshika — content creator"
                className="w-full object-cover"
                style={{ maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="mt-2 overflow-hidden border-y-2 border-black bg-pink-brand py-3">
        <div className="animate-marquee flex w-max items-center gap-8">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex items-center gap-8">
              {['UGC VIDEOS', 'BANGER TWEETS', 'BRAND PROMOS', 'CRYPTO NATIVE', 'NFA', 'EXIT LIQUIDITY', 'TIMELINE MAGIC', 'gm'].map((t) => (
                <span key={t + r} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="font-display text-lg tracking-wide text-black">{t}</span>
                  <span className="text-black">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
