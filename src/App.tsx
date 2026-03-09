import { Header } from './components/ui/Header';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';

function App() {
  return (
    <div className="min-h-screen selection:bg-purple-500/30">
      <Header />

      <main>
        <Hero />

        <Projects />
      </main>

      <footer className="py-8 border-t border-[var(--border)] mt-24 text-center text-[var(--text-secondary)] text-sm">
        <p>© {new Date().getFullYear()} Pablo Velazquez Bremont. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
