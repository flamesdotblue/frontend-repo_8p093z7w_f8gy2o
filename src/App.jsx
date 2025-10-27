import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
