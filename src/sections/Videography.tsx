import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, HeartHandshake, ArrowUpRight } from 'lucide-react';

declare global {
  interface Window {
    twttr?: {
      widgets: {
        createTweet: (
          id: string,
          el: HTMLElement,
          opts?: Record<string, unknown>
        ) => Promise<HTMLElement | undefined>;
      };
      ready?: (cb: () => void) => void;
    };
  }
}

const videos = [
  { id: '2033939146675556733', client: 'CAKE WALLET', views: '27.2K', engagement: '~470', note: 'wallet promo' },
  { id: '2049729795521663236', client: 'FHENIX VAULT', views: '15.1K', engagement: '~320', note: 'vibe coded using fhenix coffee tech and claude' },
  { id: '2077419536329154699', client: 'TANGEM RING', views: '10.9K', engagement: '~230', note: 'hardware wallet' },
  { id: '2075816718228918417', client: 'FHENIX UNBOXING', views: '10.2K', engagement: '~260', note: 'merch unboxing video' },
  { id: '2073742340645421497', client: 'BASE APP', views: '9.3K', engagement: '~250', note: 'how base is a all in one app' },
  { id: '2026264585968439367', client: 'FLUTONIO', views: '8.7K', engagement: '~220', note: 'brand promo' },
  { id: '2088145273705173120', client: 'FLAP.SH', note: 'how memecoin pairing and dividend mechanics work on flap' },
  { id: '2072946638734459047', client: 'ANSEM', note: 'how to get eligible for the $ANSEM airdrop' },
  { id: '1984248043999277164', client: 'POLYMARKET', note: 'polymarket airdrop unboxing' },
];

function TweetEmbed({ id, url }: { id: string; url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const mount = () => {
      if (!ref.current || !window.twttr) return;
      window.twttr.widgets
        .createTweet(id, ref.current, { theme: 'dark', align: 'center', dnt: true })
        .then((el) => {
          if (!cancelled && !el) setFailed(true);
        })
        .catch(() => !cancelled && setFailed(true));
    };

    if (window.twttr) {
      mount();
    } else {
      const timer = setInterval(() => {
        if (window.twttr) {
          clearInterval(timer);
          mount();
        }
      }, 300);
      setTimeout(() => {
        clearInterval(timer);
        if (!cancelled && !ref.current?.querySelector('iframe')) setFailed(true);
      }, 12000);
      return () => {
        cancelled = true;
        clearInterval(timer);
      };
    }
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (failed) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex aspect-[9/14] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-neutral-900 text-center transition-colors hover:bg-neutral-800"
      >
        <span className="text-4xl">▶️</span>
        <span className="text-sm font-semibold text-neutral-300">watch on X</span>
        <ArrowUpRight size={16} className="text-[#f5a3c7]" />
      </a>
    );
  }

  return <div ref={ref} className="min-h-[300px] w-full [&>div]:!w-full" />;
}

export default function Videography() {
  return (
    <section id="videos" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-5xl text-[#f5a3c7] sm:text-7xl">VIDEO CONTENT</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400">
            Videos I made for projects I worked with. All of them are live on X, press play
            and watch them right here.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-3"
            >
              <TweetEmbed id={v.id} url={`https://x.com/vanshuETH/status/${v.id}`} />
              <div className="px-2 pb-2 pt-4">
                <div className="font-display text-xl tracking-wide text-white">{v.client}</div>
                <div className="mt-1 text-xs text-neutral-500">{v.note}</div>
                {v.views && (
                  <div className="mt-3 flex items-center gap-5 border-t border-white/10 pt-3 text-xs font-semibold text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Eye size={13} className="text-[#f5a3c7]" /> {v.views} views
                    </span>
                    <span className="flex items-center gap-1.5">
                      <HeartHandshake size={13} className="text-[#f5a3c7]" /> {v.engagement} engagement
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
