import { motion } from 'framer-motion';
import { TrendingUp, Laugh, MessagesSquare, Handshake } from 'lucide-react';

const cards = [
  {
    icon: TrendingUp,
    title: 'Market Commentary',
    desc: 'Real-time takes on pumps, dumps, hacks and headlines — translated from chart-speak into human.',
  },
  {
    icon: Laugh,
    title: 'Crypto Memes & Culture',
    desc: 'Degen humor that actually lands. The timeline\u2019s favorite coping mechanism, daily.',
  },
  {
    icon: MessagesSquare,
    title: 'Community & Threads',
    desc: 'Conversations, reply-guy diplomacy and threads that make Indian & global crypto feel close.',
  },
  {
    icon: Handshake,
    title: 'Brand Collabs',
    desc: 'Authentic promos for prediction markets, exchanges and web3 products — always clearly tagged, never cringe.',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative border-y border-white/5 bg-white/[0.015] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono2 mb-4 text-sm uppercase tracking-widest text-violet-400">/ what i do</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            content that <span className="text-gradient">moves markets</span>
            <span className="text-zinc-600">*</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-600">*emotionally. still NFA.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl p-8 transition-all hover:border-violet-500/40"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 transition-colors group-hover:bg-violet-500/25">
                <c.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
