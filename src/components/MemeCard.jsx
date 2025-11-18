export default function MemeCard({ title, caption, img, footer }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
      <div className="aspect-[4/3] overflow-hidden bg-black/20">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-white/70 text-sm mt-1">{caption}</p>
        {footer && <div className="mt-3 text-xs text-white/50">{footer}</div>}
      </div>
    </div>
  );
}
