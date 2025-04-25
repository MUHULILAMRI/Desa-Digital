import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { 
  HomeIcon, 
  FileText, 
  BarChart2, 
  Users, 
  DollarSign, 
  Globe, 
  UserCheck,
  Settings
} from 'lucide-react';
import Logo from '../UI/Logo';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  className?: string;
  isLoggedIn: boolean;
}

const Sidebar = ({ isOpen, setIsOpen, className = '', isLoggedIn }: SidebarProps) => {
  const location = useLocation();
  
  if (!isOpen) return null;

  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon size={20} /> },
    { name: 'Digital Services', path: '/digital-services', icon: <FileText size={20} /> },
    { name: 'Population Data', path: '/population-data', icon: <BarChart2 size={20} /> },
    { name: 'Social Aid', path: '/social-aid', icon: <Users size={20} /> },
    { name: 'Village Finance', path: '/village-finance', icon: <DollarSign size={20} /> },
    { name: 'Village Profile', path: '/village-profile', icon: <Globe size={20} /> },
    { name: 'Attendance System', path: '/attendance', icon: <UserCheck size={20} /> },
  ];

  // Admin-only items
  const adminItems = [
    { name: 'Admin Settings', path: '/admin-settings', icon: <Settings size={20} /> },
  ];

  const allItems = isLoggedIn ? [...navItems, ...adminItems] : navItems;

  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${className}`}>
      <div className="h-full flex flex-col">
        <div className="px-4 py-6 flex items-center justify-between border-b">
          <div className="flex items-center">
            <Logo className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl text-blue-600">LIL Digital</span>
          </div>
          <button 
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {allItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="border-t p-4">
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} LIL Digital
            <p className="mt-1">Version 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;