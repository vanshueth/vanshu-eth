const items = [
  'gm ☀️', 'NFA', 'ETH maxi (derogatory)', 'exit liquidity', 'high conviction, low balance',
  'ser, this is a casino', 'up only (emotionally)', 'gm again', 'bags packed, dreams wrecked',
  'reply girl energy', 'charts & vibes', 'wagmi (allegedly)',
];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-4">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-mono2 text-sm text-zinc-500">{t}</span>
            <span className="text-violet-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
