import MemeCard from "./MemeCard";

const memes = [
  {
    title: "When the beat drops",
    caption: "Eden: drops the Wi‑Fi instead",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Left foot, right foot",
    caption: "Eden installed the update: feet not compatible",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Dance tutorial",
    caption: "Step 1: Panic. Step 2: Apologize to the floor",
    img: "https://images.unsplash.com/photo-1520975682031-0f2f63fbe0af?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Freestyle mode",
    caption: "Eden buffering at 1% since 2009",
    img: "https://images.unsplash.com/photo-1512427691650-7446598f1124?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Find the rhythm",
    caption: "It’s hiding. We checked behind the couch",
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Choreography",
    caption: "The only move is Ctrl+Z",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Dance floor",
    caption: "Now featuring hazard signs",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "DJ request",
    caption: "Please play something with training wheels",
    img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Confidence level",
    caption: "Eden walked in like a firmware update",
    img: "https://images.unsplash.com/photo-1532635048-6e5d6c5f3667?q=80&w=1600&auto=format&fit=crop",
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
