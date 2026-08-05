import { motion } from 'framer-motion';
import { BadgeCheck, Heart, MessageCircle, Repeat2, Eye, ArrowUpRight } from 'lucide-react';

const tweets = [
  {
    text: 'I am 34 years old\nnew to crypto can you give me some advice?',
    likes: '9.4K', replies: '2.2K', views: '822K',
    tag: 'the banger', url: 'https://x.com/vanshuETH/status/1988671457816359384',
  },
  {
    text: 'looking for someone who can teach me leverage trading (be gentle pls)',
    likes: '969', replies: '127', views: '31K',
    tag: 'community fav', url: 'https://x.com/vanshuETH/status/2081329820689141858',
  },
  {
    text: 'official Uganda Govt. shilled 3 tokens on X\n\nnone of them lasted more than 30 minutes\n\nbear market is so brutal even the hackers couldn\u2019t make money\n\nGG, Wakanda forever 😭',
    likes: '—', replies: '—', views: '—',
    tag: 'news desk', url: 'https://x.com/vanshuETH',
  },
  {
    text: '39 million indians trade crypto\n$2.1 billion sitting in indian wallets\n\nthat\u2019s the group this headline is about',
    likes: '—', replies: '—', views: '—',
    tag: 'on-chain takes', url: 'https://x.com/vanshuETH/status/2074858717846311203',
  },
  {
    text: 'it took me 23 years to realise that only people making money in crypyo are scammers, gamblers and engagement botters',
    likes: '172', replies: '—', views: '—',
    tag: 'pain posting', url: 'https://x.com/vanshuETH/status/2081629248021033378',
  },
  {
    text: 'the way we out here getting geo blocked from moonpay AND then getting suspended from exchanges for living in the wrong country',
    likes: '84', replies: '38', views: '—',
    tag: 'relatable', url: 'https://x.com/vanshuETH/status/2083213862283989390',
  },
];

export default function Tweets() {
  return (
    <section id="tweets" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="font-mono2 mb-4 text-sm uppercase tracking-widest text-violet-400">/ signature content</p>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          tweets that <span className="text-gradient">hit different</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          market chaos, degen confessions and the occasional 800K-view banger — straight from the timeline.
        </p>
      </motion.div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {tweets.map((t, i) => (
          <motion.a
            key={i}
            href={t.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
            className="glass group mb-6 block break-inside-avoid rounded-2xl p-6 transition-all hover:border-violet-500/40 hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-emerald-400 text-sm font-bold text-black">
                  V✨
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm font-semibold">
                    Vanshika✨ <BadgeCheck size={13} className="text-sky-400" />
                  </div>
                  <div className="text-xs text-zinc-500">@vanshuETH</div>
                </div>
              </div>
              <span className="font-mono2 rounded-full border border-violet-500/30 px-2.5 py-1 text-[10px] uppercase tracking-wider text-violet-300">
                {t.tag}
              </span>
            </div>

            <p className="mt-4 whitespace-pre-line leading-relaxed text-zinc-200">{t.text}</p>

            <div className="mt-5 flex items-center justify-between text-xs text-zinc-500">
              <span className="flex items-center gap-1.5"><MessageCircle size={13} /> {t.replies}</span>
              <span className="flex items-center gap-1.5"><Repeat2 size={13} /> ↻</span>
              <span className="flex items-center gap-1.5"><Heart size={13} /> {t.likes}</span>
              <span className="flex items-center gap-1.5"><Eye size={13} /> {t.views}</span>
              <ArrowUpRight size={14} className="text-zinc-600 transition-colors group-hover:text-violet-400" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
