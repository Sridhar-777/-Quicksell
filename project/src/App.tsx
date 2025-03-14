import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Home, Grid, Info, PlusCircle } from 'lucide-react';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import SellPage from './pages/SellPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-emerald-50">
        {/* Navigation Bar */}
        <nav className="bg-emerald-600 text-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
                <ShoppingBag className="h-8 w-8" />
                <span>Quick Sell</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Home" />
                <NavLink to="/categories" icon={<Grid className="h-5 w-5" />} text="Categories" />
                <NavLink to="/about" icon={<Info className="h-5 w-5" />} text="About" />
                <NavLink to="/sell" icon={<PlusCircle className="h-5 w-5" />} text="Sell" />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden pb-4">
                <MobileNavLink to="/" text="Home" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/categories" text="Categories" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/about" text="About" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink to="/sell" text="Sell" onClick={() => setIsMenuOpen(false)} />
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 hover:text-emerald-200 transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ to, text, onClick }: { to: string; text: string; onClick: () => void }) {
  return (
    <Link
      to={to}
      className="block py-2 hover:bg-emerald-700 px-4 rounded transition-colors duration-200"
      onClick={onClick}
    >
      {text}
    </Link>
  );
}

export default App;