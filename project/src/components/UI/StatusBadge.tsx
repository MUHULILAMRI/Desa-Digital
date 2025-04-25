import { ReactNode } from 'react';

type StatusType = 'pending' | 'processing' | 'completed' | 'rejected' | 'success' | 'warning' | 'error' | 'info';

interface StatusBadgeProps {
  status: StatusType;
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StatusBadge = ({
  status,
  children,
  size = 'md',
  className = '',
}: StatusBadgeProps) => {
  // Status specific styling
  const statusClasses = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    processing: 'bg-blue-100 text-blue-800 border-blue-200',
    completed: 'bg-green-100 text-green-800 border-green-200',
    rejected: 'bg-red-100 text-red-800 border-red-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-orange-100 text-orange-800 border-orange-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  // Size specific styling
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  // Status labels if no children provided
  const statusLabels = {
    pending: 'Pending',
    processing: 'Processing',
    completed: 'Completed',
    rejected: 'Rejected',
    success: 'Success',
    warning: 'Warning',
    error: 'Error',
    info: 'Info',
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium border
        ${statusClasses[status]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children || statusLabels[status]}
    </span>
  );
};

export default StatusBadge;