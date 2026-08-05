import Nav from '@/sections/Nav';
import Hero from '@/sections/Hero';
import Ticker from '@/sections/Ticker';
import About from '@/sections/About';
import Tweets from '@/sections/Tweets';
import Work from '@/sections/Work';
import Collab from '@/sections/Collab';
import Footer from '@/sections/Footer';

export default function App() {
  return (
    <div className="grain min-h-screen bg-[#0a0a0f] text-zinc-100">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Tweets />
        <Work />
        <Collab />
      </main>
      <Footer />
    </div>
  );
}
