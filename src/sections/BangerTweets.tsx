import { motion } from 'framer-motion';
import { BadgeCheck, Heart, MessageCircle, Eye, ArrowUpRight } from 'lucide-react';

const tweets = [
  {
    text: 'I am 34 years old\nnew to crypto can you give me some advice?',
    likes: '9.4K', replies: '2.2K', views: '822K',
    url: 'https://x.com/vanshuETH/status/1988671457816359384',
    featured: true,
  },
  {
    text: 'looking for someone who can teach me leverage trading (be gentle pls)',
    likes: '969', replies: '127', views: '31K',
    url: 'https://x.com/vanshuETH/status/2081329820689141858',
  },
  {
    text: 'official Uganda Govt. shilled 3 tokens on X\n\nnone of them lasted more than 30 minutes\n\nbear market is so brutal even the hackers couldn\u2019t make money\n\nGG, Wakanda forever 😭',
    likes: null, replies: null, views: null,
    url: 'https://x.com/vanshuETH',
  },
  {
    text: '39 million indians trade crypto\n$2.1 billion sitting in indian wallets\n\nthat\u2019s the group this headline is about',
    likes: null, replies: null, views: null,
    url: 'https://x.com/vanshuETH/status/2074858717846311203',
  },
  {
    text: 'it took me 23 years to realise that only people making money in crypyo are scammers, gamblers and engagement botters',
    likes: '172', replies: null, views: null,
    url: 'https://x.com/vanshuETH/status/2081629248021033378',
  },
  {
    text: 'the way we out here getting geo blocked from moonpay AND then getting suspended from exchanges for living in the wrong country',
    likes: '84', replies: '38', views: null,
    url: 'https://x.com/vanshuETH/status/2083213862283989390',
  },
];

function TweetCard({ t, i }: { t: (typeof tweets)[number]; i: number }) {
  return (
    <motion.a
      href={t.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
      className={`group mb-6 block break-inside-avoid rounded-2xl border-2 border-black p-6 transition-all hover:-translate-y-1 ${
        t.featured ? 'bg-pink-brand' : 'bg-white hover:bg-[#fdf0f6]'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-[#f5a3c7]">
            V✨
          </div>
          <div>
            <div className="flex items-center gap-1 text-sm font-bold text-black">
              Vanshika✨ <BadgeCheck size={13} className="text-sky-500" />
            </div>
            <div className="text-xs text-neutral-500">@vanshuETH</div>
          </div>
        </div>
        {t.featured && (
          <span className="rounded-full bg-black px-3 py-1 text-[10px] font-bold tracking-widest text-[#f5a3c7]">
            THE BANGER
          </span>
        )}
      </div>

      <p className="mt-4 whitespace-pre-line text-[15px] font-medium leading-relaxed text-black">
        {t.text}
      </p>

      <div className="mt-5 flex items-center gap-6 text-xs font-semibold text-neutral-600">
        <span className="flex items-center gap-1.5"><MessageCircle size={13} /> {t.replies ?? '—'}</span>
        <span className="flex items-center gap-1.5"><Heart size={13} /> {t.likes ?? '—'}</span>
        <span className="flex items-center gap-1.5"><Eye size={13} /> {t.views ?? '—'}</span>
        <ArrowUpRight size={14} className="ml-auto transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.a>
  );
}

export default function BangerTweets() {
  return (
    <section id="tweets" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-display text-5xl text-[#f5a3c7] sm:text-7xl">BANGER TWEETS</h2>
            <p className="mt-3 max-w-lg text-sm text-neutral-600">
              The posts that made the timeline stop scrolling — relatable, unhinged, and always NFA.
            </p>
          </div>
          <p className="font-script rotate-2 text-4xl text-black">straight from the timeline ↓</p>
        </motion.div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {tweets.map((t, i) => (
            <TweetCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
