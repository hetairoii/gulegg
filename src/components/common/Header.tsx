import React, { useState, useEffect } from 'react';
import { Menu, X, Egg } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-yellow-500">
            <Egg className="h-8 w-8" />
            <span className="font-extrabold">Gulegg</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" active={location.pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/preparations" active={location.pathname === '/preparations'}>
              Egg Preparations
            </NavLink>
            <NavLink to="/recipes" active={location.pathname === '/recipes'}>
              Recipes
            </NavLink>
            <NavLink to="/posts" active={location.pathname === '/posts'}>
              Community
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-600 hover:text-yellow-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" active={location.pathname === '/'}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/preparations" active={location.pathname === '/preparations'}>
                Egg Preparations
              </MobileNavLink>
              <MobileNavLink to="/recipes" active={location.pathname === '/recipes'}>
                Recipes
              </MobileNavLink>
              <MobileNavLink to="/posts" active={location.pathname === '/posts'}>
                Community
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`relative font-medium transition-colors hover:text-yellow-600 ${
      active ? 'text-yellow-600' : 'text-gray-700'
    }`}
  >
    {children}
    {active && (
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 rounded-full transition-all duration-300"></span>
    )}
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`py-2 px-4 block rounded-md transition-colors ${
      active 
        ? 'bg-yellow-100 text-yellow-600 font-medium'
        : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    {children}
  </Link>
);

export default Header;