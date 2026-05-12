export default function Invite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-stone-950 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-bounce opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              fontSize: `${10 + Math.random() * 18}px`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Balloons */}
      <div className="absolute top-6 left-0 right-0 flex justify-center gap-6 z-10">
        {["🎈", "🎈", "🎈", "🎈", "🎈"].map((b, i) => (
          <div
            key={i}
            className={`text-6xl ${
              i % 3 === 0
                ? "text-yellow-400"
                : i % 2 === 0
                ? "text-red-700"
                : "text-green-700"
            } animate-pulse`}
          >
            {b}
          </div>
        ))}
      </div>

      {/* Card */}
      <div className="max-w-5xl w-full bg-gradient-to-b from-zinc-950 to-black rounded-[40px] border border-yellow-700 shadow-2xl overflow-hidden relative z-20">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left image */}
          <div className="relative min-h-[700px] bg-black">
            <img
              src="https://images.unsplash.com/photo-1520975922203-b3a0b4a5b3b8?auto=format&fit=crop&w=1200&q=80"
              alt="William Bubby Davis"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 text-center">
              <p className="text-yellow-400 tracking-[0.4em] uppercase text-sm mb-3">
                A Father’s Day Celebration
              </p>
              <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight drop-shadow-xl">
                William
                <span className="block text-yellow-400 italic">“Bubby” Davis</span>
              </h1>
            </div>
          </div>

          {/* Right content */}
          <div className="p-8 md:p-12 flex flex-col justify-center text-center bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.4),transparent_60%)]" />

            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm mb-4 relative z-10">
              Please Join Us In Celebrating
            </p>

            <h2 className="text-6xl md:text-7xl font-bold text-white mb-2 relative z-10">
              75
            </h2>

            <p className="text-2xl text-zinc-200 mb-6 relative z-10">
              Years of Life, Wisdom & Legacy
            </p>

            <div className="space-y-5 text-zinc-200 text-lg relative z-10">
              <div>
                <p className="text-yellow-400 uppercase tracking-widest text-sm mb-1">Date</p>
                <p>Sunday, June 21st, 2026</p>
              </div>

              <div>
                <p className="text-yellow-400 uppercase tracking-widest text-sm mb-1">Time</p>
                <p>5 PM — Until</p>
              </div>

              <div>
                <p className="text-yellow-400 uppercase tracking-widest text-sm mb-1">Location</p>
                <p>FOP Lodge</p>
                <p>693 S. Broadway</p>
                <p>Pennsville, NJ 08070</p>
              </div>

              <div>
                <p className="text-yellow-400 uppercase tracking-widest text-sm mb-1">Attire</p>
                <p>Dress To Impress</p>
              </div>
            </div>

            {/* RSVP */}
            <div className="mt-8 relative z-10">
              <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm mb-3">
                RSVP
              </p>

              <div className="bg-zinc-950/80 border border-yellow-700 rounded-2xl p-5 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                />

                <input
                  type="text"
                  placeholder="Phone or Email"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                />

                <input
                  type="number"
                  placeholder="Guest Count"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href="sms:4402584760?body=I would love to attend William 'Bubby' Davis 75th Birthday Celebration."
                    className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold py-3 px-4 rounded-xl hover:scale-105 transition text-center"
                  >
                    Joyfully Accepts
                  </a>

                  <a
                    href="sms:4402584760?body=Regretfully, I cannot attend William 'Bubby' Davis 75th Birthday Celebration."
                    className="bg-gradient-to-r from-red-900 to-red-700 text-white font-semibold py-3 px-4 rounded-xl hover:scale-105 transition text-center"
                  >
                    Regretfully Declines
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 text-sm mt-4">
                RSVP to Debra Davis • 440-258-4760
              </p>
            </div>

            <div className="mt-8 text-yellow-400 text-4xl animate-pulse relative z-10">
              🎉 🎂 🎈
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
