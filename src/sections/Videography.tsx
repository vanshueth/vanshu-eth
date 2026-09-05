import { motion } from 'framer-motion';
import { Eye, HeartHandshake } from 'lucide-react';

const videos = [
  { id: '2033939146675556733', client: 'CAKE WALLET', views: '27.3K', engagement: '419', note: 'wallet promo', ratio: 'aspect-video' },
  { id: '2049729795521663236', client: 'FHENIX VAULT', views: '15.2K', engagement: '297', note: 'vibe coded using fhenix coffee tech and claude', ratio: 'aspect-video' },
  { id: '2077419536329154699', client: 'TANGEM RING', views: '11.4K', engagement: '211', note: 'hardware wallet', ratio: 'aspect-video' },
  { id: '2075816718228918417', client: 'FHENIX UNBOXING', views: '10.5K', engagement: '240', note: 'merch unboxing video', ratio: 'aspect-video' },
  { id: '2073742340645421497', client: 'BASE APP', views: '9.6K', engagement: '228', note: 'how base is a all in one app', ratio: 'aspect-video' },
  { id: '2088145273705173120', client: 'FLAP.SH', views: '10.7K', engagement: '237', note: 'how memecoin pairing and dividend mechanics work on flap', ratio: 'aspect-video' },
  { id: '2026264585968439367', client: 'FLUTONIO', views: '8.7K', engagement: '201', note: 'brand promo', ratio: 'aspect-[9/16]' },
  { id: '2072946638734459047', client: 'BULLPEN', views: '85.5K', engagement: '448', note: 'how to get eligible for the $ANSEM airdrop', ratio: 'aspect-video' },
  { id: '1984248043999277164', client: 'POLYMARKET', views: '29.9K', engagement: '339', note: 'polymarket airdrop unboxing', ratio: 'aspect-[9/16]' },
];

function VideoPlayer({ id, ratio }: { id: string; ratio: string }) {
  return (
    <a
      href={`https://x.com/vanshuETH/status/${id}`}
      target="_blank"
      rel="noreferrer"
      className={`group relative block ${ratio} w-full overflow-hidden rounded-xl bg-neutral-900`}
    >
      <iframe
        src={`https://x.com/i/videos/${id}?embed_source=client`}
        title="video"
        className="pointer-events-none absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
      {/* cover X's in-player duration/views overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-9 w-64 rounded-xl bg-neutral-950/95" />
    </a>
  );
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
            Videos I made for projects I worked with. Press play and watch them right here.
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
              <div className="px-2 pb-4 pt-1">
                <div className="font-display text-xl tracking-wide text-white">{v.client}</div>
                <div className="mt-1 text-xs text-neutral-500">{v.note}</div>
                <div className="mt-3 flex items-center gap-5 text-xs font-semibold text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Eye size={13} className="text-[#f5a3c7]" /> {v.views} views
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HeartHandshake size={13} className="text-[#f5a3c7]" /> {v.engagement} engagement
                  </span>
                </div>
              </div>
              <VideoPlayer id={v.id} ratio={v.ratio} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
