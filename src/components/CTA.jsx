import { PartyPopper, Share2 } from "lucide-react";

export default function CTA() {
  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied! Send it to Eden so they can practice. Maybe.");
    } catch (e) {
      alert("Couldn't copy, but you can still roast respectfully.");
    }
  };

  return (
    <section className="my-10 text-center">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Send this to a friend who thinks they're a better dancer than Eden
        </h2>
        <p className="text-white/70 mt-2">
          New memes added automatically when the DJ sighs.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <button onClick={share} className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-xl transition-colors">
            <Share2 className="w-4 h-4" />
            Share the roast
          </button>
          <a href="#memes" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition-colors">
            <PartyPopper className="w-4 h-4" />
            See the chaos
          </a>
        </div>
      </div>
    </section>
  );
}
