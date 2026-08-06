import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'WHO AM I', href: '#who' },
  { label: 'VIDEO CONTENT', href: '#videos' },
  { label: 'PROOF OF WORK', href: '#case' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-black text-white transition-all ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="font-script text-3xl pink">
          vanshu<span className="text-white">.eth</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-semibold tracking-[0.2em] text-neutral-300 transition-colors hover:text-[#f5a3c7]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://x.com/vanshuETH"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-pink-brand px-5 py-2 text-[11px] font-bold tracking-widest text-black transition-transform hover:scale-105"
          >
            FOLLOW
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-semibold tracking-widest text-neutral-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
