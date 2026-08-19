import { motion } from 'framer-motion';
import { Clapperboard, Eye, HeartHandshake, ArrowUpRight } from 'lucide-react';
import cakeWallet from '@/assets/brands/cake-wallet.png';
import fhenix from '@/assets/brands/fhenix.png';
import tangem from '@/assets/brands/tangem.png';
import base from '@/assets/brands/base.png';
import fluton from '@/assets/brands/fluton.png';
import polymarket from '@/assets/brands/polymarket.png';
import flap from '@/assets/brands/flapdotsh.png';
import bullpen from '@/assets/brands/bullpen.png';

const videos = [
  { client: 'Cake Wallet', logo: cakeWallet, note: 'wallet promo', views: '27.2K', engagement: '~470' },
  { client: 'Fhenix Vault', logo: fhenix, note: 'vibe coded using fhenix coffee tech and claude', views: '15.1K', engagement: '~320' },
  { client: 'Tangem Ring', logo: tangem, note: 'hardware wallet', views: '10.9K', engagement: '~230' },
  { client: 'Fhenix Unboxing', logo: fhenix, note: 'merch unboxing video', views: '10.2K', engagement: '~260' },
  { client: 'Base App', logo: base, note: 'how base is a all in one app', views: '9.3K', engagement: '~250' },
  { client: 'Fluton', logo: fluton, note: 'brand promo', views: '8.7K', engagement: '~220' },
  { client: 'Flap.sh', logo: flap, note: 'how memecoin pairing and dividend mechanics work on flap', views: '6.4K', engagement: '~237' },
  { client: 'Bullpen', logo: bullpen, note: 'how to get eligible for the $ANSEM airdrop', views: '85.4K', engagement: '~448' },
  { client: 'Polymarket', logo: polymarket, note: 'polymarket airdrop unboxing', views: '29.9K', engagement: '~339' },
];

const totals = [
  { icon: Clapperboard, value: '9', label: 'featured brand videos' },
  { icon: Eye, value: '203.3K+', label: 'total views generated' },
  { icon: HeartHandshake, value: '2.8K+', label: 'total engagement' },
];

export default function CaseStudy() {
  return (
    <section id="case" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-display text-5xl text-[#f5a3c7] sm:text-7xl">PROOF OF WORK</h2>
            <p className="mt-3 max-w-lg text-sm text-neutral-600 sm:text-base">
              Every video is written, shot and edited by me.
              Here is what they pulled in for the brands behind them.
            </p>
          </div>
        </motion.div>

        {/* totals */}
        <div className="grid gap-6 md:grid-cols-3">
          {totals.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl border-2 border-black p-8 text-center transition-all hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-brand text-black">
                <t.icon size={24} />
              </div>
              <div className="font-display text-5xl text-[#f5a3c7]">{t.value}</div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                {t.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* per-video breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl border-2 border-black"
        >
          {videos.map((v, i) => (
            <div
              key={v.client}
              className={`flex flex-wrap items-center justify-between gap-3 px-6 py-5 transition-colors hover:bg-[#fdf0f6] ${
                i !== videos.length - 1 ? 'border-b border-black/10' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={v.logo}
                  alt={v.client}
                  className="h-11 w-11 rounded-full border border-black/10 object-cover"
                />
                <div>
                  <div className="font-display text-xl tracking-wide">{v.client}</div>
                  <div className="text-xs text-neutral-500">{v.note}</div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-xs font-semibold text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <Eye size={14} className="text-[#f5a3c7]" /> {v.views} views
                </span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake size={14} className="text-[#f5a3c7]" /> {v.engagement} engagement
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <a
            href="https://x.com/vanshuETH"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-bold tracking-widest text-white transition-transform hover:scale-105"
          >
            SEE THEM ON X <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
