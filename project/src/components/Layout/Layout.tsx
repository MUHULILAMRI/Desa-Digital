import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Layout = ({ children, isLoggedIn, setIsLoggedIn }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        isLoggedIn={isLoggedIn}
        className="lg:hidden" 
      />
      
      {/* Desktop sidebar - always visible on large screens */}
      <Sidebar 
        isOpen={true} 
        setIsOpen={() => {}} 
        isLoggedIn={isLoggedIn}
        className="hidden lg:block" 
      />
      
      <div className="flex flex-col flex-1">
        <Header 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <main className="flex-1 px-4 py-8 md:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;