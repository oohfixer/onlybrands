export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('text-center py-12', className)}>
      {icon && (
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bg-tertiary">
          {icon}
        </div>
      )}
      <Typography as="h3" variant="h3" className="mb-2">
        {title}
      </Typography>
      {description && (
        <Typography variant="body" className="text-text-secondary mb-6 max-w-md mx-auto">
          {description}
        </Typography>
      )}
      {action}
    </div>
  );
}