import MemeCard from "./MemeCard";

const memes = [
  {
    title: "When the beat drops",
    caption: "Eden: drops the Wi‑Fi instead",
    img: "https://upload.wikimedia.org/wikipedia/en/7/70/Surprised_Pikachu.jpg",
  },
  {
    title: "Left foot, right foot",
    caption: "Eden installed the update: feet not compatible",
    img: "https://upload.wikimedia.org/wikipedia/en/4/4e/Roll_Safe_meme.jpg",
  },
  {
    title: "Dance tutorial",
    caption: "Step 1: Panic. Step 2: Apologize to the floor",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8f/SuccessKid.jpg",
  },
  {
    title: "Freestyle mode",
    caption: "Eden buffering at 1% since 2009",
    img: "https://upload.wikimedia.org/wikipedia/en/4/4f/Dancing_baby.gif",
  },
  {
    title: "Find the rhythm",
    caption: "It’s hiding. We checked behind the couch",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
  },
  {
    title: "Choreography",
    caption: "The only move is Ctrl+Z",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Distracted_Boyfriend_meme.jpg",
  },
  {
    title: "Dance floor",
    caption: "Now featuring hazard signs",
    img: "https://upload.wikimedia.org/wikipedia/en/6/69/This_is_fine.png",
  },
  {
    title: "DJ request",
    caption: "Please play something with training wheels",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8d/Disaster_Girl.jpg",
  },
  {
    title: "Confidence level",
    caption: "Eden walked in like a firmware update",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Andras_Arato_aka_Hide_the_Pain_Harold.jpg",
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
