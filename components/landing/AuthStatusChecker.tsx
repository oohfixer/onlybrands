'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthStatusChecker() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'loading') return;

    const isAuthPage = pathname?.startsWith('/login') || 
                      pathname?.startsWith('/register') ||
                      pathname?.startsWith('/verify-email');
    
    // Redirect unauthenticated users to login
    if (!session?.user && !isAuthPage) {
      router.push('/login');
      return;
    }

    // Redirect authenticated users away from auth pages
    if (session?.user && isAuthPage) {
      router.push('/dashboard');
      return;
    }

    // Check email verification status
    if (session?.user && !session.user.emailVerified && !pathname?.startsWith('/verify-email')) {
      router.push('/verify-email');
    }
  }, [session, status, pathname, router]);

  return null;
}