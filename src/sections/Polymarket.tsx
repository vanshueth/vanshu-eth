import { motion } from 'framer-motion';
import { BadgeCheck, Heart, MessageCircle, Repeat2, Bookmark, Eye, ArrowUpRight } from 'lucide-react';
import dashboard from '@/assets/polymarket_dashboard.png';

const tweets = [
  {
    date: '26 Oct 2025',
    text: '"If i make it from Polymarket\u2026" meme',
    views: '204,059', likes: '1,040', reposts: '15', replies: '104', bookmarks: '194',
    url: 'https://x.com/vanshuETH/status/1982425253377868032',
    featured: true,
  },
  {
    date: '8 Feb 2026',
    text: 'Polymarket affiliate analytics flex. $174k revenue generated',
    views: '68,552', likes: '477', reposts: '8', replies: '141', bookmarks: '133',
    url: 'https://x.com/vanshuETH/status/2020377179939631304',
    featured: true,
  },
  {
    date: '9 Nov 2025',
    text: '30-day recap. Got the Polymarket badge, merch and $19k+ revenue for PM',
    views: '48,713', likes: '403', reposts: '7', replies: '135', bookmarks: '88',
    url: 'https://x.com/vanshuETH/status/1987469172285333557',
  },
  {
    date: '29 Oct 2025',
    text: 'Just got the Polymarket airdrop',
    views: '43,481', likes: '303', reposts: '4', replies: '79', bookmarks: '32',
    url: 'https://x.com/vanshuETH/status/1983420684949958690',
  },
  {
    date: '24 Oct 2025',
    text: '"locked in Polymarket supercycle" meme',
    views: '23,641', likes: '332', reposts: '7', replies: '43', bookmarks: '47',
    url: 'https://x.com/vanshuETH/status/1981773921235218666',
  },
  {
    date: '9 Nov 2025',
    text: 'Lost the Polymarket badge, got a new pink one',
    views: '18,461', likes: '239', reposts: '1', replies: '97', bookmarks: '5',
    url: 'https://x.com/vanshuETH/status/1987378374743146697',
  },
  {
    date: '16 Oct 2025',
    text: 'crime not being on @polymarket',
    views: '15,843', likes: '200', reposts: '2', replies: '61', bookmarks: '18',
    url: 'https://x.com/vanshuETH/status/1978731619058921848',
  },
  {
    date: '18 Apr 2026',
    text: 'Quote-tweet about 2026 trading research that includes Polymarket',
    views: '10,516', likes: '110', reposts: '3', replies: '23', bookmarks: '81',
    url: 'https://x.com/vanshuETH/status/2045518827757371901',
  },
  {
    date: '10 Jun 2026',
    text: 'Long post comparing Kalshi vs Polymarket after India\u2019s ban',
    views: '9,905', likes: '97', reposts: '2', replies: '21', bookmarks: '5',
    url: 'https://x.com/vanshuETH/status/2064611313666711814',
  },
  {
    date: '1 Nov 2025',
    text: 'Halloween post calling out "another polymarket trader"',
    views: '8,466', likes: '139', reposts: '3', replies: '44', bookmarks: '6',
    url: 'https://x.com/vanshuETH/status/1984607274590224538',
  },
];

function TweetCard({ t, i }: { t: (typeof tweets)[number]; i: number }) {
  const tilt = i % 2 === 0 ? 'sm:-rotate-1' : 'sm:rotate-1';
  return (
    <motion.a
      href={t.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40, rotateX: -12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
      className={`group block rounded-2xl border-2 border-black p-5 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 ${tilt} ${
        t.featured
          ? 'bg-pink-brand shadow-[10px_10px_0_rgba(0,0,0,0.85)]'
          : 'bg-white shadow-[8px_8px_0_#f5a3c7] hover:shadow-[12px_12px_0_#f5a3c7]'
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-[#f5a3c7]">
            V✨
          </div>
          <div>
            <div className="flex items-center gap-1 text-[13px] font-bold text-black">
              Vanshika✨ <BadgeCheck size={12} className="text-sky-500" />
            </div>
            <div className="text-[11px] text-neutral-500">@vanshuETH · {t.date}</div>
          </div>
        </div>
        <ArrowUpRight size={15} className="text-black/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <p className="mt-3 text-sm font-medium leading-snug text-black">{t.text}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-semibold text-neutral-600">
        <span className="flex items-center gap-1"><Eye size={12} className="text-black" /> {t.views}</span>
        <span className="flex items-center gap-1"><Heart size={12} /> {t.likes}</span>
        <span className="flex items-center gap-1"><Repeat2 size={12} /> {t.reposts}</span>
        <span className="flex items-center gap-1"><MessageCircle size={12} /> {t.replies}</span>
        <span className="flex items-center gap-1"><Bookmark size={12} /> {t.bookmarks}</span>
      </div>
    </motion.a>
  );
}

export default function Polymarket() {
  return (
    <section id="polymarket" className="overflow-hidden bg-[#1c3a6f] py-24 text-white" style={{ perspective: '1200px' }}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
            5 months as a
          </p>
          <h2 className="font-display mt-4 text-5xl text-white sm:text-7xl">
            POLYMARKET AFFILIATE
          </h2>

          {/* overall stats */}
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-2 border-[#f5a3c7] px-8 py-4 font-display text-2xl text-white shadow-[6px_6px_0_#f5a3c7] sm:text-3xl">
              451,637 views
            </div>
            <div className="rounded-2xl border-2 border-[#f5a3c7] px-8 py-4 font-display text-2xl text-white shadow-[6px_6px_0_#f5a3c7] sm:text-3xl">
              2,000+ users onboarded
            </div>
          </div>
        </motion.div>

        {/* dashboard image on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-md lg:hidden"
        >
          <div className="rounded-2xl border-2 border-[#f5a3c7] bg-white p-2 shadow-[8px_8px_0_#f5a3c7]">
            <img src={dashboard} alt="Polymarket affiliate dashboard: 1,663 clicks, 554 leads, US$258,038.35 in sales" className="w-full rounded-xl" />
          </div>
          <p className="font-script mt-3 text-center text-xl text-[#f5a3c7]">my actual affiliate dashboard ↓</p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* tweet cards */}
          <div className="columns-1 gap-6 sm:columns-2 [&>*]:mb-6">
            {tweets.map((t, i) => (
              <div key={t.url} className="break-inside-avoid">
                <TweetCard t={t} i={i} />
              </div>
            ))}
          </div>

          {/* affiliate dashboard pinned right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto hidden w-full max-w-[620px] lg:sticky lg:top-28 lg:block"
          >
            <div className="rotate-1 rounded-2xl border-2 border-[#f5a3c7] bg-white p-3 shadow-[12px_12px_0_#f5a3c7] transition-transform duration-300 hover:rotate-0">
              <img src={dashboard} alt="Polymarket affiliate dashboard: 1,663 clicks, 554 leads, US$258,038.35 in sales" className="w-full rounded-xl" />
            </div>
            <p className="font-script mt-4 rotate-[-2deg] text-center text-3xl text-[#f5a3c7]">
              the dashboard behind these posts
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
