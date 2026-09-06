import { Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-script text-2xl text-[#f5a3c7]">vanshu.eth</div>
        <p className="text-[11px] tracking-widest text-neutral-500">
          © 2026 VANSHIKA✨ · ALL TWEETS ARE NFA
        </p>
        <a
          href="https://x.com/vanshuETH"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 transition-colors hover:text-[#f5a3c7]"
        >
          <Twitter size={14} /> @vanshuETH
        </a>
      </div>
    </footer>
  );
}
