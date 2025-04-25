import { Database } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`text-blue-600 ${className}`}>
      <Database />
    </div>
  );
};

export default Logo;