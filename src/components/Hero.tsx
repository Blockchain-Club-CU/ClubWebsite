import { ArrowRight } from 'lucide-react';
import HeroVid from '/HeroVid.mp4';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 min-w-full min-h-full object-cover z-0 size-[115%]"
      >
        <source src={HeroVid} type="video/mp4" />
      </video>

      <div>
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Blockchain Club
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
          Empowering students through technology, innovation, and collaboration
        </p>
        <button
          onClick={scrollToContact}
          className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          Join Us
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
