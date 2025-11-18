import MemeCard from "./MemeCard";

// Switched to reliable, hotlink-friendly meme-style images via cataas.com
// Each image overlays playful text to match the joke so the vibe stays silly.
const memes = [
  {
    title: "When the beat drops",
    caption: "Eden: drops the Wi‑Fi instead",
    img: "https://cataas.com/cat/says/Beat%20dropped.%20Wi-Fi%20too?fontSize=40&width=900&height=675&rand=1",
  },
  {
    title: "Left foot, right foot",
    caption: "Eden installed the update: feet not compatible",
    img: "https://cataas.com/cat/says/Left.%20Right.%20Error%20404%20Feet%20Not%20Found?fontSize=38&width=900&height=675&rand=2",
  },
  {
    title: "Dance tutorial",
    caption: "Step 1: Panic. Step 2: Apologize to the floor",
    img: "https://cataas.com/cat/says/Dance%20Tutorial:%201)%20Panic%202)%20Sorry%20Floor?fontSize=36&width=900&height=675&rand=3",
  },
  {
    title: "Freestyle mode",
    caption: "Eden buffering at 1% since 2009",
    img: "https://cataas.com/cat/gif/says/Loading...%201%%20Freestyle?fontSize=36&width=900&height=675&rand=4",
  },
  {
    title: "Find the rhythm",
    caption: "It’s hiding. We checked behind the couch",
    img: "https://cataas.com/cat/says/Anyone%20seen%20the%20rhythm%3F?fontSize=40&width=900&height=675&rand=5",
  },
  {
    title: "Choreography",
    caption: "The only move is Ctrl+Z",
    img: "https://cataas.com/cat/says/Choreography:%20Ctrl%2BZ%20Only?fontSize=40&width=900&height=675&rand=6",
  },
  {
    title: "Dance floor",
    caption: "Now featuring hazard signs",
    img: "https://cataas.com/cat/says/Dance%20Floor:%20Proceed%20with%20Caution%20%F0%9F%9A%A7?fontSize=36&width=900&height=675&rand=7",
  },
  {
    title: "DJ request",
    caption: "Please play something with training wheels",
    img: "https://cataas.com/cat/says/DJ%3A%20Got%20anything%20with%20training%20wheels%3F?fontSize=34&width=900&height=675&rand=8",
  },
  {
    title: "Confidence level",
    caption: "Eden walked in like a firmware update",
    img: "https://cataas.com/cat/says/Confidence%20Installed.%20Reboot%20Required.?fontSize=36&width=900&height=675&rand=9",
  },
];

export default function MemeGrid() {
  return (
    <section className="py-6 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {memes.map((m, i) => (
          <MemeCard key={i} {...m} />
        ))}
      </div>
    </section>
  );
}
