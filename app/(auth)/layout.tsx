import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-primary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold text-primary-blue">
            OnlyBrands
          </Link>
          <p className="mt-2 text-sm text-text-secondary">
            The future of influencer marketing
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-surface-secondary py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-border-secondary">
          {children}
        </div>
      </div>
    </div>
  );
}
