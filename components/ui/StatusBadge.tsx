export function StatusBadge({ 
  status, 
  size = 'md' 
}: { 
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  size?: 'sm' | 'md' | 'lg';
}) {
  const statusConfig = {
    active: { color: 'bg-status-success', label: 'Active' },
    pending: { color: 'bg-status-warning', label: 'Pending' },
    completed: { color: 'bg-status-info', label: 'Completed' },
    cancelled: { color: 'bg-status-error', label: 'Cancelled' },
  };

  const sizeConfig = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={cn(
      'inline-flex items-center rounded-full font-medium text-white',
      statusConfig[status].color,
      sizeConfig[size]
    )}>
      {statusConfig[status].label}
    </span>
  );
}