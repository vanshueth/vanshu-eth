import { Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-display font-bold">
          vanshu<span className="text-violet-400">.eth</span>
        </div>
        <p className="font-mono2 text-xs text-zinc-600">
          © 2026 Vanshika✨ · all tweets are NFA · past performance is a meme
        </p>
        <a
          href="https://x.com/vanshuETH"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <Twitter size={15} /> @vanshuETH
        </a>
      </div>
    </footer>
  );
}
