
import React, { useState, useEffect } from 'react';
import { SERVICES, CONTACT } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about'>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderHome = () => (
    <>
      <section className="relative h-screen min-h-[700px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-blue-600 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              Dépanneur Expert à {CONTACT.city}
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight mb-6">
              Service de Réparation Électroménager à Essaouira
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-light">
              <strong>Allo Zohair</strong> assure le dépannage rapide et professionnel de vos appareils ménagers à <strong>{CONTACT.city}</strong>. Réparation garantie pour frigos, lave-linge et climatisations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl transition-all hover:-translate-y-1"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Express</span>
              </a>
              <button 
                onClick={() => setCurrentPage('services')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
              >
                Services Disponibles
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900 border-t border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-white text-center">
          <div className="space-y-4">
             <div className="text-blue-500 text-5xl">⚡</div>
             <h3 className="text-2xl font-bold">Urgence Essaouira</h3>
             <p className="text-gray-400">Dépannage prioritaire pour vos pannes urgentes en moins de 24h.</p>
          </div>
          <div className="space-y-4">
             <div className="text-blue-500 text-5xl">🛡️</div>
             <h3 className="text-2xl font-bold">Travail Garanti</h3>
             <p className="text-gray-400">Pièces de rechange de qualité pour une réparation durable.</p>
          </div>
          <div className="space-y-4">
             <div className="text-blue-500 text-5xl">💎</div>
             <h3 className="text-2xl font-bold">Expert Qualifié</h3>
             <p className="text-gray-400">Des années d'expérience dans l'électroménager multi-marques.</p>
          </div>
        </div>
      </section>
    </>
  );

  const renderServicesPage = () => (
    <section className="pt-32 pb-24 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black font-heading mb-6">Nos Services de Dépannage</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise technique à Essaouira pour la réparation de toutes vos machines domestiques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center text-center hover:border-blue-500/50 transition-colors group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <div className="mt-auto pt-6 border-t border-white/10 w-full text-blue-500 font-bold">
                Réparation {service.title.toLowerCase()}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-[3rem] p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-black mb-6">Besoin d'un technicien à Essaouira ?</h2>
          <p className="text-xl text-blue-100 mb-8">Diagnostic rapide et devis transparent pour tout dépannage.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="bg-white text-black px-10 py-4 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all">
              Appeler le Expert
            </a>
            <a href={CONTACT.whatsapp} className="bg-black text-white px-10 py-4 rounded-2xl font-black text-xl hover:bg-zinc-900 transition-all">
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  const renderAboutPage = () => (
    <section className="pt-32 pb-24 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black font-heading mb-10">Votre Technicien à Essaouira</h1>
          <div className="space-y-8 text-xl text-gray-400 leading-relaxed">
            <p>
              <strong>Allo Zohair</strong> est votre solution locale pour le <strong>dépannage électroménager à Essaouira</strong>. Spécialisé dans les systèmes complexes, nous intervenons sur les plus grandes marques de réfrigérateurs, lave-vaisselle et climatiseurs.
            </p>
            <p>
              Pourquoi nous faire confiance ? Car nous privilégions la <strong>durabilité</strong>. Chaque intervention est une mission pour sauver votre appareil et vous éviter un rachat coûteux. Notre réputation à Essaouira s'est bâtie sur l'honnêteté et le professionnalisme.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-white font-bold text-2xl mb-4">Savoir-faire</h3>
                <p>Maîtrise des dernières technologies de froid, lavage et chauffage pour un diagnostic précis.</p>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-white font-bold text-2xl mb-4">Proximité</h3>
                <p>Réponse immédiate pour tous les quartiers de la ville d'Essaouira et alentours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black transition-colors duration-500">
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl py-2 md:py-3 border-b border-white/10' : 'bg-black/20 md:bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-2 md:space-x-3 group text-left">
            <div className="bg-blue-600 p-1.5 md:p-2 rounded-lg md:rounded-xl group-hover:scale-110 transition-transform shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
              </svg>
            </div>
            <div>
              <span className="text-lg md:text-2xl font-black tracking-tighter font-heading text-white block leading-none">{CONTACT.name}</span>
              <span className="text-[8px] md:text-[10px] text-blue-400 uppercase font-bold tracking-[0.2em]">Expert Essaouira</span>
            </div>
          </button>
          
          <nav className="hidden lg:flex space-x-8">
            <button onClick={() => setCurrentPage('services')} className={`font-semibold transition-all ${currentPage === 'services' ? 'text-blue-500' : 'text-white/80 hover:text-white'}`}>Services</button>
            <button onClick={() => setCurrentPage('about')} className={`font-semibold transition-all ${currentPage === 'about' ? 'text-blue-500' : 'text-white/80 hover:text-white'}`}>Expertise</button>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-white/80 hover:text-white transition-all">WhatsApp</a>
          </nav>

          <a href={`tel:${CONTACT.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold transition-all shadow-lg active:scale-95 flex items-center space-x-2 text-sm md:text-base">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.529 4.53l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            <span className="whitespace-nowrap">Dépannage</span>
          </a>
        </div>
      </header>

      <main className="animate-in fade-in duration-700">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'services' && renderServicesPage()}
        {currentPage === 'about' && renderAboutPage()}
      </main>

      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/10 text-center">
            <h2 className="text-3xl md:text-5xl font-black font-heading text-white mb-6">Réparation Rapide à Essaouira</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              Besoin d'un dépannage immédiat ? <strong>Allo Zohair</strong> intervient chez vous pour tout problème électroménager.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href={`tel:${CONTACT.phone}`} 
                className="w-full md:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 hover:bg-gray-200 transition-all shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>{CONTACT.phone}</span>
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 hover:bg-green-600 transition-all shadow-xl">
                <span>WhatsApp Dépannage</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/5 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
             <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
             </div>
             <h2 className="text-3xl font-black font-heading text-white">{CONTACT.name}</h2>
          </div>
          <p className="text-gray-500 mb-8 text-lg">Dépanneur électroménager de confiance à <strong>Essaouira</strong>, Maroc.</p>
          <div className="flex justify-center space-x-4 md:space-x-8 mb-8 text-sm md:text-base">
            <button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white transition-colors">Accueil</button>
            <button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-white transition-colors">Nos Services</button>
            <button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-white transition-colors">Qui sommes-nous</button>
          </div>
          <p className="text-gray-600 text-[10px] md:text-sm">
            &copy; {new Date().getFullYear()} {CONTACT.name}. Spécialiste <strong>Réparation Électroménager Essaouira</strong>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
