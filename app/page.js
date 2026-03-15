"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Heart, Clock } from "lucide-react";

export default function WeddingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-ivory/40" /> {/* Soft Overlay */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-4"
        >
          <span className="uppercase tracking-[0.4em] text-gold text-sm mb-6 block">The Wedding of</span>
          <h1 className="font-serif text-7xl md:text-9xl text-zinc-900 mb-4">Aria & Ethan</h1>
          <p className="font-serif italic text-2xl text-zinc-700">"Where Destiny Arranged Love"</p>
          <div className="mt-12 inline-block border-y border-gold/40 py-4 px-8 tracking-[0.2em] text-zinc-800">
            24 . 10 . 2026
          </div>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <Heart className="mx-auto text-gold mb-6" size={32} />
          <h2 className="font-serif text-5xl mb-12">Our Journey</h2>
          <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold/30 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gold bg-ivory shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gold/10 shadow-sm">
                <h4 className="font-serif text-2xl text-gold">The Families Meet</h4>
                <p className="mt-2 text-zinc-600">A traditional beginning that felt surprisingly modern from the very first hello.</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gold bg-ivory shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gold/10 shadow-sm">
                <h4 className="font-serif text-2xl text-gold">The Spark</h4>
                <p className="mt-2 text-zinc-600">The moment we realized our families hadn't just found a match—they'd found our soulmate.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* EVENT CARDS */}
      <section className="py-24 bg-blush/20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { name: "Sangeet", date: "Oct 22", loc: "The Grand Palace" },
            { name: "Ceremony", date: "Oct 24", loc: "Royal Gardens" },
            { name: "Reception", date: "Oct 25", loc: "The Ritz" }
          ].map((event, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 border border-gold/20 bg-ivory text-center rounded-sm shadow-xl shadow-gold/5"
            >
              <h3 className="font-serif text-3xl mb-4">{event.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-2 text-gold"><Calendar size={16}/> {event.date}</div>
              <div className="flex items-center justify-center gap-2 mb-6 text-zinc-500"><MapPin size={16}/> {event.loc}</div>
              <button className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-all uppercase text-xs tracking-widest">View Map</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-gold/10 text-center opacity-60 italic font-serif">
        <p>Aria & Ethan — 2026</p>
      </footer>
    </main>
  );
}
