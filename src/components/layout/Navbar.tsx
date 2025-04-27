
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-electric-blue">Grid<span className="text-electric-yellow">+</span>Electric</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-base font-medium text-gray-700 hover:text-electric-blue transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-electric-blue hover:bg-electric-dark">
              <Link to="/contact" className="flex items-center gap-2">
                <Phone size={16} />
                <span className="hidden lg:inline">916-662-1394</span>
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-background md:hidden transition-transform duration-300 ease-in-out transform",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="text-gray-700"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Close menu</span>
            <X size={24} />
          </button>
        </div>
        <nav className="mt-5 px-4 flex flex-col space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-medium text-center text-gray-700 hover:text-electric-blue transition-colors"
              onClick={toggleMobileMenu}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="w-full bg-electric-blue hover:bg-electric-dark">
            <Link to="/contact" className="flex items-center justify-center gap-2" onClick={toggleMobileMenu}>
              <Phone size={16} />
              <span>916-662-1394</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
