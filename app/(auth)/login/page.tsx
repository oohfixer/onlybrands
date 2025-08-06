'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // TODO: Replace with actual authentication logic
      // For now, simulate login with demo redirect
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock role-based redirect - replace with actual auth
      const demoRole = formData.email.includes('brand') ? 'brand' : 
                      formData.email.includes('admin') ? 'admin' : 'influencer';
      
      // Redirect based on role
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Sign in to your account</h2>
        <p className="mt-2 text-sm text-text-secondary">
          Don't have an account?{' '}
          <Link href="/register" className="text-primary-blue hover:underline">
            Sign up here
          </Link>
        </p>
      </div>

      {error && (
        <Alert className="mb-4 border-red-600 bg-red-50 dark:bg-red-900/10">
          <AlertDescription className="text-red-600">{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="mt-1 relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="pl-10"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="mt-1 relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              className="pl-10 pr-10"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-text-muted hover:text-text-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary-blue border-border-secondary rounded"
            />
            <Label htmlFor="remember-me" className="ml-2 text-sm">
              Remember me
            </Label>
          </div>

          <Link
            href="/forgot-password"
            className="text-sm text-primary-blue hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary-blue hover:bg-primary-blue/90"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border-secondary" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-surface-secondary text-text-secondary">
              Demo Accounts
            </span>
          </div>
        </div>

        <div className="mt-4 grid gap-2 text-xs text-text-secondary">
          <p>Demo emails for testing:</p>
          <p>• brand@demo.com (Brand Dashboard)</p>
          <p>• influencer@demo.com (Influencer Dashboard)</p>
          <p>• admin@demo.com (Admin Dashboard)</p>
          <p className="text-text-muted">Password: demo123</p>
        </div>
      </div>
    </div>
  );
}
