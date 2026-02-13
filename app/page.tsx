"use client";

import { useEffect, useMemo, useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Happy Birthday Valen 🎂";

  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);
  const [surpriseOpen, setSurpriseOpen] = useState(false);

  const spotifyEmbed =
    "https://open.spotify.com/embed/track/3W1XPf7mvuQcWQB7U7MbTM?utm_source=generator";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!unlocked) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [unlocked]);

  const openWhenMessages = useMemo(
    () => [
      {
        title: "Open when you wake up 🌸",
        text: "Good morning birthday girl. Today you're allowed to be extra dramatic, extra cute, and extra annoying. Basically… just be you. Have the best day Val ❤️",
      },
      {
        title: "Open when you feel emotional 🥹",
        text: "Just a reminder: I’m genuinely grateful we reconnected after 3 years. The way you accepted me so warmly meant a lot. You have a rare heart, Valen.",
      },
      {
        title: "Open when you want to laugh 😭",
        text: "Happy birthday aunty. Congratulations on getting older while still acting like a menace. Stay cute, stay savage, stay annoying. Proud of you 💀❤️",
      },
      {
        title: "Open when you feel lonely 🫂",
        text: "Even if you're in Hyderabad and I'm in Delhi… you're not alone. Not today, not ever. Text me anytime and I’ll reply like I have no life.",
      },
      {
        title: "Open when you feel stressed 😤",
        text: "Pause. Breathe. You don’t need to fix your whole life in one day. You’re doing better than you think. And I believe in you, always.",
      },
      {
        title: "Open when you feel insecure 🪞",
        text: "Val, you’re genuinely rare. Not because you’re perfect… but because you’re real. Your vibe, your heart, your energy — everything. Never forget what you deserve.",
      },
      {
        title: "Open when someone disappoints you 🙃",
        text: "If anyone ruins your mood today… they’re dumb. You deserve love, effort, and softness. Also I hope their pillow stays warm forever.",
      },
      {
        title: "Open when you miss old times 🌙",
        text: "Some memories don’t fade. And honestly… it feels nice knowing someone who mattered still matters. That’s all.",
      },
      {
        title: "Open when you feel proud of yourself 🏆",
        text: "YES. Exactly. Be proud. You’ve grown so much and you don’t even realize it. I’m genuinely proud of you, Valen.",
      },
      {
        title: "Open when your birthday ends 🌙",
        text: "I hope you felt celebrated today. But even after the day ends… you’re still special. I’m really glad I got to wish you again after all these years ❤️",
      },
    ],
    []
  );

  const wishes = [
    "Peace — the kind that calms your mind.",
    "Happiness — the real one, not forced smiles.",
    "Success — because you deserve to win big.",
    "Love — real love, not temporary attention.",
    "Confidence — so you never doubt your worth again.",
    "Health — mentally and physically, always.",
    "Growth — so you become unstoppable this year.",
  ];

  function handleUnlock() {
    const pass = password.trim().toLowerCase();

    if (pass === "val" || pass === "valen" || pass === "valentina") {
      setUnlocked(true);
      setWrong(false);
      setShowConfetti(true);

      setTimeout(() => setShowConfetti(false), 5000);
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 500);
    }
  }

  // PASSWORD SCREEN
  if (!unlocked) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 flex items-center justify-center px-4 py-16 relative overflow-hidden">
        <FloatingHearts />

        <div
          className={`w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 sm:p-10 relative text-center transition ${
            wrong ? "animate-shake" : ""
          }`}
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Valen’s Birthday Page 🎀
          </h1>

          <p className="mt-3 text-gray-700 leading-relaxed">
            This page is locked.
            <br />
            Enter the password to unlock 😭
          </p>

          <p className="mt-3 text-sm text-gray-500 italic">
            hint: what do I call you?
          </p>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="type here..."
            className="mt-6 w-full px-4 py-3 rounded-xl border border-white/50 bg-white/70 outline-none focus:ring-2 focus:ring-pink-300 text-gray-900"
          />

          <button
            onClick={handleUnlock}
            className="mt-5 w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:scale-[1.02] transition"
          >
            Unlock 💗
          </button>

          {wrong && (
            <p className="mt-4 text-red-600 font-semibold">
              Wrong password 😭
            </p>
          )}

          <p className="mt-8 text-xs text-gray-500">
            Made with chaos and love from Delhi.
          </p>
        </div>

        <style jsx>{`
          @keyframes shake {
            0% {
              transform: translateX(0px);
            }
            25% {
              transform: translateX(-6px);
            }
            50% {
              transform: translateX(6px);
            }
            75% {
              transform: translateX(-6px);
            }
            100% {
              transform: translateX(0px);
            }
          }
          .animate-shake {
            animation: shake 0.35s ease-in-out;
          }
        `}</style>
      </main>
    );
  }

  // MAIN PAGE
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <FloatingHearts />

      {showConfetti && <Confetti />}

      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 sm:p-12 relative">
        {/* Banner */}
        <div className="absolute -top-8 sm:-top-9 left-1/2 -translate-x-1/2 px-12 sm:px-16 py-3 sm:py-4 rounded-full bg-white/70 border border-white/60 shadow-lg">
          <p className="text-base sm:text-lg font-bold text-gray-800 tracking-wide whitespace-nowrap">
            🎉 VALEN’S BIRTHDAY ZONE 🎉
          </p>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-600">
            from delhi to hyderabad ✨
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            {typedText}
            <span className="animate-pulse text-pink-500">|</span>
          </h1>

          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            Hey <span className="font-semibold">Val</span>, <br />
            I know this is a little extra… but you deserve extra.
            <br />
            And honestly, after <span className="font-semibold">3 years</span>,
            I’m just really grateful we’re here again.
          </p>
        </div>

        {/* Surprise */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            onClick={() => setSurpriseOpen(!surpriseOpen)}
            className="px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg rounded-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg active:scale-95 transition"
          >
            {surpriseOpen ? "Close Surprise 🙈" : "Click for a Surprise 🎁"}
          </button>
        </div>

        {surpriseOpen && (
          <div className="mt-6 bg-white/70 rounded-2xl p-5 sm:p-6 border border-white/50 shadow-md text-center animate-fade">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Okay listen Valen…
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-800 leading-relaxed">
              You’re genuinely one of the cutest and most special people I’ve
              ever known.
              <br />
              Funny, emotional, savage, annoying (sometimes, lol)…
              <br />
              basically perfect chaos 😭❤️
              <br />
              <br />
              And I’m really glad you’re back!
            </p>
          </div>
        )}

        {/* Spotify */}
        <div className="mt-10 sm:mt-12 bg-white/60 rounded-2xl p-5 sm:p-6 border border-white/50 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
            Your Birthday Soundtrack 🎧
          </h2>

          <p className="mt-3 text-base sm:text-lg text-base sm:text-lg text-gray-700 text-center">
            Play this while reading the page.
          </p>

          <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              style={{ borderRadius: "16px" }}
              src={spotifyEmbed}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 sm:mt-12 bg-white/60 rounded-2xl p-5 sm:p-6 border border-white/50 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
            A small note 💌
          </h2>

          <p className="mt-4 text-base sm:text-lg text-base sm:text-lg text-gray-800 leading-relaxed text-center">
            You’ve always been one of the cutest, funniest, most emotional-yet-savage
            people I’ve ever known.
            <br />
            You act like you don’t care… but you care deeply.
            <br />
            And that’s what makes you special.
          </p>
        </div>

        {/* Wishes */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
            7 Wishes for You ✨
          </h2>

          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
            {wishes.map((wish, idx) => (
              <div
                key={idx}
                className="bg-white/70 rounded-2xl p-4 sm:p-5 shadow-md border border-white/60 active:scale-95 sm:hover:scale-[1.02] transition"
              >
                <p className="text-sm sm:text-base text-sm sm:text-base text-gray-900 font-semibold">
                  {idx + 1}. {wish}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open When */}
        <div className="mt-12 sm:mt-14">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
            Open When 💗
          </h2>

          <div className="mt-6 space-y-3 sm:space-y-3 sm:space-y-4">
            {openWhenMessages.map((msg, idx) => (
              <OpenWhenCard key={idx} title={msg.title} text={msg.text} />
            ))}
          </div>
        </div>

        {/* Ending */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg text-gray-900 font-semibold">
            Happy Birthday again, Valen 🥹❤️
          </p>
          <p className="mt-2 text-sm sm:text-base text-sm sm:text-base text-gray-700">
            Made with love, chaos, and a little bit of missing you.
          </p>
          <p className="mt-6 text-sm text-gray-500">— AB</p>
        </div>
      </div>

      <style jsx>{`
        .animate-fade {
          animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </main>
  );
}

function OpenWhenCard({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/70 border border-white/60 shadow-md rounded-2xl overflow-hidden transition">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 sm:px-5 py-4 flex items-center justify-between active:bg-white/80 sm:hover:bg-white/80 transition min-h-[3.5rem]"
      >
        <span className="font-semibold text-sm sm:text-base text-gray-900 pr-2">{title}</span>
        <span className="text-xl sm:text-2xl text-gray-600 flex-shrink-0">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-4 sm:px-5 pb-5 text-sm sm:text-base text-gray-800 leading-relaxed">{text}</div>
      )}
    </div>
  );
}

function FloatingHearts() {
  const [mounted, setMounted] = useState(false);
  const [heartStyles, setHeartStyles] = useState<
    Array<{
      left: string;
      top: string;
      fontSize: string;
      animationDuration: string;
      animationDelay: string;
    }>
  >([]);

  useEffect(() => {
    setHeartStyles(
      Array.from({ length: 18 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${12 + Math.random() * 24}px`,
        animationDuration: `${6 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 5}s`,
      }))
    );
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {heartStyles.map((style, i) => (
        <span
          key={i}
          className="absolute text-pink-400 opacity-60 animate-float"
          style={style}
        >
          ♥
        </span>
      ))}

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-40px) translateX(10px);
            opacity: 0.9;
          }
          100% {
            transform: translateY(-90px) translateX(-10px);
            opacity: 0.2;
          }
        }
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
}
