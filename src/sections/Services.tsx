import { motion } from 'framer-motion';
import { Clapperboard, MessageCircleHeart, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Clapperboard,
    title: 'UGC Videos',
    desc: 'Short-form unboxings, walkthroughs and product demos filmed & edited to feel native to the timeline — wallets, apps, hardware and more.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Banger Tweets & Threads',
    desc: 'Relatable crypto content engineered for engagement — the kind of posts that pull 800K views without feeling like an ad.',
  },
  {
    icon: Megaphone,
    title: 'Brand Promos',
    desc: 'Authentic promo integrations for web3 brands — clearly tagged, on-voice, and built to convert scrollers into users.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-center text-5xl text-[#f5a3c7] sm:text-7xl"
        >
          SERVICES
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group rounded-2xl border-2 border-black p-8 transition-all hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-brand text-black">
                <s.icon size={24} />
              </div>
              <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
