import Header from "./components/Header";
import MemeGrid from "./components/MemeGrid";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />
      <main id="memes" className="relative max-w-6xl mx-auto px-4 md:px-6 pb-16">
        <MemeGrid />
        <CTA />
        <footer className="mt-10 text-center text-white/60 text-sm">
          Built for laughs. Be kind to Eden IRL.
        </footer>
      </main>
    </div>
  );
}

export default App;
