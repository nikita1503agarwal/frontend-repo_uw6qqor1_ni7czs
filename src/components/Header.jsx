import { Sparkles, Music2, Laugh } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-fuchsia-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -right-40 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>
      <div className="relative text-center py-16">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-xs text-white/80 tracking-wide">Certified Meme Zone</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Eden vs. The Rhythm
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          A lovingly chaotic museum of memes celebrating the legend of Eden’s mysterious inability to locate the beat.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 text-white/70">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Music2 className="w-4 h-4" />
            <span className="text-sm">Beat: Unknown</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Laugh className="w-4 h-4" />
            <span className="text-sm">Cringe: Expert</span>
          </div>
        </div>
      </div>
    </header>
  );
}
