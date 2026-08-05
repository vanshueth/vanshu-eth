import Nav from '@/sections/Nav';
import Hero from '@/sections/Hero';
import WhoAmI from '@/sections/WhoAmI';
import Services from '@/sections/Services';
import BangerTweets from '@/sections/BangerTweets';
import Videography from '@/sections/Videography';
import Niche from '@/sections/Niche';
import CaseStudy from '@/sections/CaseStudy';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />
      <main>
        <Hero />
        <WhoAmI />
        <Services />
        <BangerTweets />
        <Videography />
        <Niche />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
