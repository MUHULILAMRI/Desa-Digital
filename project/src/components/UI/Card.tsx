import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  className?: string;
  noPadding?: boolean;
  hoverable?: boolean;
}

const Card = ({
  children,
  title,
  subtitle,
  footer,
  className = '',
  noPadding = false,
  hoverable = false,
}: CardProps) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-sm border border-gray-100
        ${hoverable ? 'transition-all hover:shadow-md' : ''}
        ${className}
      `}
    >
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-100">
          {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;