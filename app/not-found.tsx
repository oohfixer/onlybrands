
// ============================================
// app/not-found.tsx - 404 Page
// ============================================
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-primary flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-primary-blue hover:bg-primary-blue-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
