import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkTo?: string;
  color?: string;
  onClick?: () => void;
}

const FeatureCard = ({
  title,
  description,
  icon,
  linkTo,
  color = 'blue',
  onClick,
}: FeatureCardProps) => {
  // Color variations
  const colorVariants = {
    blue: {
      bgLight: 'bg-blue-50',
      bgIcon: 'bg-blue-100',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-100',
    },
    green: {
      bgLight: 'bg-green-50',
      bgIcon: 'bg-green-100',
      text: 'text-green-600',
      hover: 'hover:bg-green-100',
    },
    purple: {
      bgLight: 'bg-purple-50',
      bgIcon: 'bg-purple-100',
      text: 'text-purple-600',
      hover: 'hover:bg-purple-100',
    },
    orange: {
      bgLight: 'bg-orange-50',
      bgIcon: 'bg-orange-100',
      text: 'text-orange-600',
      hover: 'hover:bg-orange-100',
    },
    red: {
      bgLight: 'bg-red-50',
      bgIcon: 'bg-red-100',
      text: 'text-red-600',
      hover: 'hover:bg-red-100',
    },
    indigo: {
      bgLight: 'bg-indigo-50',
      bgIcon: 'bg-indigo-100',
      text: 'text-indigo-600',
      hover: 'hover:bg-indigo-100',
    },
  };

  const colorClasses = colorVariants[color as keyof typeof colorVariants] || colorVariants.blue;

  const CardContent = () => (
    <>
      <div className={`rounded-full p-3 inline-flex ${colorClasses.bgIcon}`}>
        <div className={colorClasses.text}>{icon}</div>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
      {linkTo && (
        <div className={`mt-4 flex items-center ${colorClasses.text} font-medium`}>
          <span>Learn more</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      )}
    </>
  );

  if (linkTo) {
    return (
      <a
        href={linkTo}
        className={`block p-6 rounded-xl ${colorClasses.bgLight} ${colorClasses.hover} transition-colors duration-200`}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div
      className={`p-6 rounded-xl ${colorClasses.bgLight} ${onClick ? colorClasses.hover + ' cursor-pointer' : ''} transition-colors duration-200`}
      onClick={onClick}
    >
      <CardContent />
    </div>
  );
};

export default FeatureCard;