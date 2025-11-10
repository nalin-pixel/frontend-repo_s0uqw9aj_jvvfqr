import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DateSelector from "./components/DateSelector";
import Packages from "./components/Packages";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <DateSelector />
        <Packages />
        <WhyUs />
        <footer id="contact" className="border-t">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Menata Hati Tour & Travel. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900">Kebijakan Privasi</a>
              <a href="#" className="hover:text-gray-900">Syarat & Ketentuan</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
