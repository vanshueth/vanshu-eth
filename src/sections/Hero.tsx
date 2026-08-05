import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, Sparkles } from 'lucide-react';

const stats = [
  { value: '21K+', label: 'posts' },
  { value: '6.9K', label: 'followers' },
  { value: '45K', label: 'likes' },
  { value: '1M+', label: 'impressions' },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />

      {/* floating chart line */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-1/3 h-64 w-full opacity-20"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 150 L100 120 L200 140 L320 80 L420 110 L540 60 L660 90 L780 40 L900 70 L1020 30 L1120 55 L1200 20"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-zinc-300"
        >
          <Sparkles size={14} className="text-violet-400" />
          crypto twitter · content creator · NFA enjoyer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
        >
          gm, i&apos;m <span className="text-gradient">Vanshika</span>
          <span className="animate-blink text-violet-400">_</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          i am the <span className="text-white">exit liquidity</span> they talk about.
          <br />
          tweeting through every pump, dump &amp; liquidation so you don&apos;t have to.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://x.com/vanshuETH"
            target="_blank"
            rel="noreferrer"
            className="glow-purple group flex items-center gap-2 rounded-full bg-violet-500 px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105"
          >
            <BadgeCheck size={18} />
            @vanshuETH
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#tweets"
            className="rounded-full glass px-7 py-3.5 font-semibold text-zinc-200 transition-colors hover:bg-white/10"
          >
            see the tweets ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-white">{s.value}</div>
              <div className="font-mono2 text-xs uppercase tracking-widest text-zinc-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
