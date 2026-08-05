import { motion } from 'framer-motion';
import cutout from '@/assets/vanshika_cutout.webp';
import photo from '@/assets/vanshika_photo.jpg';

const stickers = [
  { text: 'personal branding', className: 'left-[2%] top-[34%] -rotate-6 sm:left-[8%]' },
  { text: 'video creator', className: 'right-[2%] top-[30%] rotate-3 sm:right-[9%]' },
  { text: 'chronically online', className: 'left-[4%] bottom-[22%] rotate-2 sm:left-[14%]' },
  { text: 'marketing', className: 'right-[3%] bottom-[16%] -rotate-3 sm:right-[12%]' },
];

function DuotonePanel({ className }: { className: string }) {
  return (
    <div className={`relative overflow-hidden bg-red-900 ${className}`}>
      <img
        src={photo}
        alt=""
        className="h-full w-full object-cover object-top opacity-90 grayscale mix-blend-luminosity"
      />
      <div className="pointer-events-none absolute inset-0 bg-red-600/30 mix-blend-multiply" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-16">
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center justify-center px-6">
        {/* red duotone background panels */}
        <div className="absolute inset-0 hidden grid-cols-3 gap-1 opacity-80 md:grid">
          <div className="relative"><DuotonePanel className="h-full w-full" /></div>
          <div className="relative"><DuotonePanel className="h-full w-full" /></div>
          <div className="relative"><DuotonePanel className="h-full w-full" /></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        {/* giant name behind */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none text-center leading-none text-[#f5a3c7]"
          style={{ fontSize: 'clamp(5rem, 17vw, 15rem)' }}
        >
          vanshueth
        </motion.h1>

        {/* cutout */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative z-10 mt-24"
        >
          {/* white sticker outline */}
          <img
            src={cutout}
            alt=""
            aria-hidden
            className="absolute inset-0 h-[62vh] w-auto origin-bottom scale-[1.04] object-contain object-bottom brightness-0 invert sm:h-[74vh]"
          />
          <img
            src={cutout}
            alt="Vanshika — crypto content creator"
            className="relative h-[62vh] w-auto object-contain object-bottom sm:h-[74vh]"
          />
        </motion.div>

        {/* stickers */}
        {stickers.map((s, i) => (
          <motion.span
            key={s.text}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
            className={`absolute z-20 rounded-xl bg-white px-4 py-2 font-display text-sm tracking-wide text-red-800 shadow-[4px_4px_0_rgba(0,0,0,0.6)] sm:text-lg ${s.className}`}
          >
            {s.text}
          </motion.span>
        ))}

      </div>

      {/* marquee strip */}
      <div className="overflow-hidden border-y-2 border-black bg-pink-brand py-3">
        <div className="animate-marquee flex w-max items-center gap-8">
          {[...Array(4)].map((_, r) => (
            <div key={r} className="flex items-center gap-8">
              {['MARKETING', 'GROWTH', 'BUSINESS DEVELOPMENT', 'CRYPTO CREATOR', 'VIBE CODER'].map((t) => (
                <span key={t + r} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="font-display text-lg tracking-wide text-black">{t}</span>
                  <span className="text-black">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
