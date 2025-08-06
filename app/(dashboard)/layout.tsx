'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Megaphone,
  Target,
  Users,
  Settings,
  Bell,
  Menu,
  X,
  User,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string;
}

// Mock user data - replace with actual auth
const mockUser = {
  id: '1',
  displayName: 'Demo User',
  email: 'demo@onlybrands.com',
  role: 'brand', // This would come from authentication
  avatar: null
};

const getNavigationItems = (role: string): NavItem[] => {
  const commonItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      href: '/dashboard/settings'
    }
  ];

  const roleSpecificItems: Record<string, NavItem[]> = {
    brand: [
      {
        id: 'campaigns',
        label: 'Campaigns',
        icon: Megaphone,
        href: '/dashboard/campaigns'
      },
      {
        id: 'bids',
        label: 'Bids',
        icon: Target,
        href: '/dashboard/bids',
        badge: '3'
      }
    ],
    influencer: [
      {
        id: 'browse',
        label: 'Browse Campaigns',
        icon: Target,
        href: '/dashboard/browse'
      },
      {
        id: 'my-bids',
        label: 'My Bids',
        icon: Megaphone,
        href: '/dashboard/bids'
      }
    ],
    admin: [
      {
        id: 'users',
        label: 'Users',
        icon: Users,
        href: '/dashboard/users'
      },
      {
        id: 'campaigns',
        label: 'All Campaigns',
        icon: Megaphone,
        href: '/dashboard/campaigns'
      }
    ]
  };

  return [
    ...commonItems.slice(0, 1), // Dashboard first
    ...(roleSpecificItems[role] || []),
    ...commonItems.slice(1) // Settings last
  ];
};

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, currentPath }) => {
  const navigationItems = getNavigationItems(mockUser.role);

  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          x: isOpen ? 0 : -320,
        }}
        className={`fixed left-0 top-0 h-full w-80 bg-surface-secondary border-r border-border-secondary z-50 md:relative md:translate-x-0 md:z-auto`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border-secondary">
            <Link href="/" className="text-2xl font-bold text-primary-blue">
              OnlyBrands
            </Link>
            <button
              onClick={onToggle}
              className="md:hidden p-2 hover:bg-surface-primary rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-blue/10 text-primary-blue'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-primary'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-primary-blue text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-6 border-t border-border-secondary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-blue/10 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-primary-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-text-primary truncate">
                  {mockUser.displayName}
                </p>
                <p className="text-sm text-text-secondary truncate">
                  {mockUser.email}
                </p>
              </div>
            </div>
            <Link href="/dashboard/settings/profile">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Profile Settings
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

interface HeaderProps {
  onMobileMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMobileMenuToggle }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="bg-surface-secondary border-b border-border-secondary">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden p-2 hover:bg-surface-primary rounded-lg"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold text-text-primary">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 hover:bg-surface-primary rounded-lg relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-blue/10 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-primary-blue" />
            </div>
            <span className="text-sm font-medium text-text-primary hidden sm:block">
              {mockUser.displayName}
            </span>
            <ChevronDown className="h-4 w-4 text-text-secondary" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-surface-primary">
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
          currentPath={pathname}
        />
        
        <div className="flex-1 flex flex-col min-w-0">
          <Header onMobileMenuToggle={toggleSidebar} />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
