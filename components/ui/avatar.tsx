export function Avatar({ 
  src, 
  alt, 
  size = 'md',
  fallback 
}: {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}) {
  const [imgError, setImgError] = useState(false);
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const initials = fallback || getInitials(alt);

  return (
    <div className={cn(
      'relative inline-flex items-center justify-center rounded-full bg-bg-quaternary border border-border-primary overflow-hidden',
      sizeClasses[size]
    )}>
      {src && !imgError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="font-medium text-text-secondary">
          {initials}
        </span>
      )}
    </div>
  );
}