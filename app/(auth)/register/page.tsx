'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, Mail, Lock, User, Building, Users } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: '',
    role: '' as 'brand' | 'influencer'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!formData.role) {
      setError('Please select your account type');
      setLoading(false);
      return;
    }

    try {
      // TODO: Replace with actual registration logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to dashboard after registration
      router.push('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
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

  const handleRoleSelect = (role: 'brand' | 'influencer') => {
    setFormData({
      ...formData,
      role
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Create your account</h2>
        <p className="mt-2 text-sm text-text-secondary">
          Already have an account?{' '}
          <Link href="/login" className="text-primary-blue hover:underline">
            Sign in here
          </Link>
        </p>
      </div>

      {error && (
        <Alert className="mb-4 border-red-600 bg-red-50 dark:bg-red-900/10">
          <AlertDescription className="text-red-600">{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role Selection */}
        <div>
          <Label>I am a...</Label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleRoleSelect('brand')}
              className={`p-4 border rounded-lg text-left transition-colors ${
                formData.role === 'brand'
                  ? 'border-primary-blue bg-primary-blue/10'
                  : 'border-border-secondary hover:border-primary-blue/50'
              }`}
            >
              <Building className="h-5 w-5 mb-2 text-primary-blue" />
              <div className="font-medium text-text-primary">Brand</div>
              <div className="text-sm text-text-secondary">
                Create campaigns and hire influencers
              </div>
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('influencer')}
              className={`p-4 border rounded-lg text-left transition-colors ${
                formData.role === 'influencer'
                  ? 'border-primary-blue bg-primary-blue/10'
                  : 'border-border-secondary hover:border-primary-blue/50'
              }`}
            >
              <Users className="h-5 w-5 mb-2 text-primary-blue" />
              <div className="font-medium text-text-primary">Influencer</div>
              <div className="text-sm text-text-secondary">
                Find campaigns and showcase your work
              </div>
            </button>
          </div>
        </div>

        <div>
          <Label htmlFor="displayName">Display Name</Label>
          <div className="mt-1 relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="displayName"
              name="displayName"
              type="text"
              required
              className="pl-10"
              placeholder="Your name or company name"
              value={formData.displayName}
              onChange={handleChange}
            />
          </div>
        </div>

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
              autoComplete="new-password"
              required
              className="pl-10 pr-10"
              placeholder="Create a password"
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

        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="mt-1 relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-text-muted" />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="pl-10"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-primary-blue border-border-secondary rounded"
          />
          <Label htmlFor="terms" className="ml-2 text-sm">
            I agree to the{' '}
            <Link href="/terms" className="text-primary-blue hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary-blue hover:underline">
              Privacy Policy
            </Link>
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary-blue hover:bg-primary-blue/90"
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
    </div>
  );
}
