import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, LogOut, UserCircle, BellRing } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../UI/Logo';

interface HeaderProps {
  toggleSidebar: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Header = ({ toggleSidebar, isLoggedIn, setIsLoggedIn }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan Digital', path: '/digital-services' },
    { name: 'Data Penduduk', path: '/population-data' },
    { name: 'Bantuan Sosial', path: '/social-aid' },
    { name: 'Keuangan Desa', path: '/village-finance' },
    { name: 'Profil Desa', path: '/village-profile' },
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  return (
    <header 
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <button 
          className="lg:hidden text-blue-600 hover:text-blue-800 transition-colors"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Logo className="h-9 w-9 mr-2" />
            <span className="font-bold text-xl text-blue-600">LIL Digital</span>
          </Link>
        </div>

        <nav className="hidden lg:flex space-x-6">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`transition-colors px-3 py-2 rounded-md ${
                  isActive 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <BellRing size={20} />
              </motion.button>
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <UserCircle size={24} />
                </motion.button>
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                      style={{ transformOrigin: 'top right' }}
                    >
                      <Link 
                        to="/admin-profile" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        onClick={() => setShowDropdown(false)}
                      >
                        Profil Admin
                      </Link>
                      <Link 
                        to="/admin-settings" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                        onClick={() => setShowDropdown(false)}
                      >
                        Pengaturan
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut size={16} className="mr-2" />
                        <span>Keluar</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          ) : (
            <Link 
              to="/admin-login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium text-sm"
            >
              Masuk Admin
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;