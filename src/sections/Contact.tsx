import { motion } from 'framer-motion';
import { Twitter, Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="border-t-2 border-black bg-pink-brand py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <p className="font-script text-5xl text-black sm:text-6xl">let&apos;s work together</p>
        <h2 className="font-display mt-4 text-5xl text-black sm:text-7xl">
          READY TO TAKE OVER<br />THE TIMELINE?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base">
          UGC videos, sponsored tweets, unboxings, walkthroughs, monthly packages.
          Plus an explainer series breaking your project down from basics to advanced, one video at a time.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/70 sm:text-base">
          Rates on request. If it fits the vibe, the DMs are open.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://x.com/vanshuETH"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-black px-8 py-4 text-xs font-bold tracking-widest text-white transition-transform hover:scale-105"
          >
            <Twitter size={15} /> DM ME ON X <ArrowUpRight size={14} />
          </a>
          <a
            href="mailto:bajpaivanshika17@gmail.com"
            className="flex items-center gap-2 rounded-full border-2 border-black px-8 py-4 text-xs font-bold tracking-widest text-black transition-colors hover:bg-black hover:text-white"
          >
            <Mail size={15} /> SEND A MAIL
          </a>
        </div>
      </motion.div>
    </section>
  );
}
