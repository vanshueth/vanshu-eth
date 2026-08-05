import { motion } from 'framer-motion';
import cakeWallet from '@/assets/brands/cake-wallet.png';
import fhenix from '@/assets/brands/fhenix.png';
import tangem from '@/assets/brands/tangem.png';
import base from '@/assets/brands/base.png';
import polymarket from '@/assets/brands/polymarket.png';
import moonpay from '@/assets/brands/moonpay.png';
import fluton from '@/assets/brands/fluton.png';

const brands = [
  { name: 'Cake Wallet', logo: cakeWallet },
  { name: 'Fhenix', logo: fhenix },
  { name: 'Tangem', logo: tangem },
  { name: 'Base', logo: base },
  { name: 'Polymarket', logo: polymarket },
  { name: 'MoonPay', logo: moonpay },
  { name: 'Fluton', logo: fluton },
];

export default function Brands() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-black py-14 text-white">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#f5a3c7]"
      >
        brands i've worked with
      </motion.p>

      <div className="relative mt-10">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

        <div className="flex w-max animate-[brands-scroll_40s_linear_infinite] gap-10 pr-10">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="flex flex-col items-center gap-3">
              <div className="h-20 w-20 overflow-hidden rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-transform duration-300 hover:scale-110 sm:h-24 sm:w-24">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brands-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}
