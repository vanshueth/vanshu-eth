import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function Collab() {
  return (
    <section id="collab" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p className="font-mono2 mb-4 text-sm uppercase tracking-widest text-violet-400">/ work with me</p>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          want your project on <br />
          <span className="text-gradient">the timeline?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Sponsored posts, prediction-market partnerships, exchange promos, event coverage —
          if it fits the vibe, the DMs are open. If it doesn&apos;t, i&apos;ll be gentle pls.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://x.com/vanshuETH"
            target="_blank"
            rel="noreferrer"
            className="glow-purple group flex items-center gap-2 rounded-full bg-violet-500 px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
          >
            DM me on X
            <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:gm@vanshu.eth"
            className="flex items-center gap-2 rounded-full glass px-8 py-4 font-semibold text-zinc-200 transition-colors hover:bg-white/10"
          >
            <Mail size={17} /> send a mail
          </a>
        </div>
      </motion.div>
    </section>
  );
}
