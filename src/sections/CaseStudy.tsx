import { motion } from 'framer-motion';
import { BadgeCheck, ArrowUpRight } from 'lucide-react';

const results = [
  { value: '+822K', label: 'views' },
  { value: '+9.4K', label: 'likes' },
  { value: '+2.2K', label: 'replies' },
];

export default function CaseStudy() {
  return (
    <section id="case" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* tweet card */}
          <div className="animate-float rounded-2xl border-2 border-black bg-white p-6 shadow-[8px_8px_0_#f5a3c7]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-bold text-[#f5a3c7]">
                V✨
              </div>
              <div>
                <div className="flex items-center gap-1 text-sm font-bold">
                  Vanshika✨ <BadgeCheck size={14} className="text-sky-500" />
                </div>
                <div className="text-xs text-neutral-500">@vanshuETH</div>
              </div>
            </div>
            <p className="mt-4 whitespace-pre-line text-lg font-medium leading-relaxed">
              I am 34 years old{'\n'}new to crypto can you give me some advice?
            </p>
            <div className="mt-4 flex gap-6 text-xs font-semibold text-neutral-500">
              <span>💬 2.2K</span>
              <span>❤️ 9.4K</span>
              <span>👁 822K</span>
            </div>
          </div>
          <p className="font-script absolute -right-4 -top-8 rotate-6 text-4xl text-[#f5a3c7]">
            viral!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h2 className="font-display text-5xl sm:text-7xl">
            CASE <span className="font-script text-6xl text-[#f5a3c7] sm:text-8xl">study</span>
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-neutral-600 sm:text-base">
            One relatable tweet. Zero ad spend. A simple question to the timeline turned into
            the post of the season — pulling in hundreds of thousands of views and thousands
            of replies from across crypto twitter.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600 sm:text-base">
            The campaign drove massive organic reach and new followers, proving that
            authenticity beats polished ads — every single time.
          </p>

          <div className="mt-8 flex gap-10">
            {results.map((r) => (
              <div key={r.label}>
                <div className="font-display text-4xl text-[#f5a3c7]">{r.value}</div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">{r.label}</div>
              </div>
            ))}
          </div>

          <a
            href="https://x.com/vanshuETH/status/1988671457816359384"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-bold tracking-widest text-white transition-transform hover:scale-105"
          >
            VIEW THE TWEET <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
