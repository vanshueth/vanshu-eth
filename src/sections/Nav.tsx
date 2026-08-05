import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Tweets', href: '#tweets' },
  { label: 'What I Do', href: '#work' },
  { label: 'Collab', href: '#collab' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          vanshu<span className="text-violet-400">.eth</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://x.com/vanshuETH"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            <Twitter size={15} /> Follow
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mt-3 rounded-2xl p-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-zinc-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://x.com/vanshuETH"
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
          >
            <Twitter size={15} /> Follow on X
          </a>
        </div>
      )}
    </motion.header>
  );
}
