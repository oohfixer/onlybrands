'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart3,
  DollarSign,
  Eye,
  Megaphone,
  Plus,
  Target,
  TrendingUp,
  Users,
  Activity,
  Clock,
  CheckCircle
} from 'lucide-react';

// Mock user data - in real app, this would come from authentication
const mockUser = {
  id: '1',
  displayName: 'Demo User',
  email: 'demo@onlybrands.com',
  role: 'brand' as const, // Change to 'influencer' or 'admin' to test different views
  avatar: null
};

// Mock data for different roles
const mockBrandData = {
  stats: {
    totalCampaigns: 12,
    activeCampaigns: 4,
    totalSpent: 45000,
    avgBidPrice: 2500
  },
  recentCampaigns: [
    {
      id: '1',
      title: 'Summer Collection Launch',
      status: 'active',
      budget: 5000,
      bids: 8,
      createdAt: '2025-01-15'
    },
    {
      id: '2',
      title: 'Brand Awareness Q1',
      status: 'draft',
      budget: 3000,
      bids: 0,
      createdAt: '2025-01-10'
    }
  ],
  recentBids: [
    {
      id: '1',
      campaignTitle: 'Summer Collection Launch',
      influencerName: 'Sarah Johnson',
      amount: 2800,
      status: 'pending'
    },
    {
      id: '2',
      campaignTitle: 'Product Review Campaign',
      influencerName: 'Mike Chen',
      amount: 1500,
      status: 'accepted'
    }
  ]
};

const mockInfluencerData = {
  stats: {
    totalBids: 15,
    activeBids: 3,
    totalEarnings: 12500,
    successRate: 73
  },
  availableCampaigns: [
    {
      id: '1',
      title: 'Tech Product Review',
      brand: 'TechCorp',
      budget: 2000,
      category: 'Technology',
      deadline: '2025-02-15'
    },
    {
      id: '2',
      title: 'Fashion Lifestyle Content',
      brand: 'StyleBrand',
      budget: 3500,
      category: 'Fashion',
      deadline: '2025-02-20'
    }
  ],
  myBids: [
    {
      id: '1',
      campaignTitle: 'Summer Collection Launch',
      amount: 2200,
      status: 'pending',
      submittedAt: '2025-01-12'
    },
    {
      id: '2',
      campaignTitle: 'Brand Awareness Q1',
      amount: 1800,
      status: 'rejected',
      submittedAt: '2025-01-08'
    }
  ]
};

const mockAdminData = {
  stats: {
    totalUsers: 1250,
    totalCampaigns: 89,
    totalBids: 425,
    platformRevenue: 35000
  },
  recentActivity: [
    {
      id: '1',
      type: 'user_signup',
      description: 'New brand registered: TechStartup Inc.',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      type: 'campaign_created',
      description: 'New campaign: "Product Launch Q1"',
      timestamp: '4 hours ago'
    }
  ]
};

const BrandDashboard = () => (
  <div className="space-y-6">
    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
          <Megaphone className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockBrandData.stats.totalCampaigns}</div>
          <p className="text-xs text-text-secondary">
            {mockBrandData.stats.activeCampaigns} active
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          <DollarSign className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${mockBrandData.stats.totalSpent.toLocaleString()}
          </div>
          <p className="text-xs text-text-secondary">
            +12% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg Bid Price</CardTitle>
          <Target className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${mockBrandData.stats.avgBidPrice.toLocaleString()}
          </div>
          <p className="text-xs text-text-secondary">
            -5% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Performance</CardTitle>
          <TrendingUp className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">89%</div>
          <p className="text-xs text-text-secondary">
            Campaign success rate
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Quick Actions */}
    <div className="flex flex-wrap gap-4">
      <Link href="/dashboard/campaigns/create">
        <Button className="bg-primary-blue hover:bg-primary-blue/90">
          <Plus className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </Link>
      <Link href="/dashboard/bids">
        <Button variant="outline">
          <Eye className="h-4 w-4 mr-2" />
          View Bids
        </Button>
      </Link>
    </div>

    {/* Recent Campaigns */}
    <Card>
      <CardHeader>
        <CardTitle>Recent Campaigns</CardTitle>
        <CardDescription>Your latest campaign activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockBrandData.recentCampaigns.map((campaign) => (
            <div key={campaign.id} className="flex items-center justify-between p-4 border border-border-secondary rounded-lg">
              <div>
                <h3 className="font-medium text-text-primary">{campaign.title}</h3>
                <p className="text-sm text-text-secondary">
                  Budget: ${campaign.budget.toLocaleString()} • {campaign.bids} bids
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  campaign.status === 'active' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {campaign.status}
                </span>
                <Link href={`/dashboard/campaigns/${campaign.id}`}>
                  <Button size="sm" variant="outline">View</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const InfluencerDashboard = () => (
  <div className="space-y-6">
    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Bids</CardTitle>
          <Target className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockInfluencerData.stats.totalBids}</div>
          <p className="text-xs text-text-secondary">
            {mockInfluencerData.stats.activeBids} active
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
          <DollarSign className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${mockInfluencerData.stats.totalEarnings.toLocaleString()}
          </div>
          <p className="text-xs text-text-secondary">
            +18% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          <CheckCircle className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockInfluencerData.stats.successRate}%</div>
          <p className="text-xs text-text-secondary">
            Bid acceptance rate
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Opportunities</CardTitle>
          <Activity className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-text-secondary">
            Available campaigns
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Quick Actions */}
    <div className="flex flex-wrap gap-4">
      <Link href="/dashboard/browse">
        <Button className="bg-primary-blue hover:bg-primary-blue/90">
          <Target className="h-4 w-4 mr-2" />
          Browse Campaigns
        </Button>
      </Link>
      <Link href="/dashboard/bids">
        <Button variant="outline">
          <Eye className="h-4 w-4 mr-2" />
          My Bids
        </Button>
      </Link>
    </div>

    {/* Available Campaigns */}
    <Card>
      <CardHeader>
        <CardTitle>Available Campaigns</CardTitle>
        <CardDescription>New opportunities for you</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockInfluencerData.availableCampaigns.map((campaign) => (
            <div key={campaign.id} className="flex items-center justify-between p-4 border border-border-secondary rounded-lg">
              <div>
                <h3 className="font-medium text-text-primary">{campaign.title}</h3>
                <p className="text-sm text-text-secondary">
                  {campaign.brand} • Budget: ${campaign.budget.toLocaleString()}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-xs text-text-secondary">
                  Deadline: {campaign.deadline}
                </span>
                <Button size="sm" className="bg-primary-blue hover:bg-primary-blue/90">
                  Place Bid
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const AdminDashboard = () => (
  <div className="space-y-6">
    {/* Platform Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockAdminData.stats.totalUsers.toLocaleString()}</div>
          <p className="text-xs text-text-secondary">
            +12% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
          <Megaphone className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockAdminData.stats.totalCampaigns}</div>
          <p className="text-xs text-text-secondary">
            Active platform campaigns
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${mockAdminData.stats.platformRevenue.toLocaleString()}
          </div>
          <p className="text-xs text-text-secondary">
            Monthly recurring revenue
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Bids</CardTitle>
          <Target className="h-4 w-4 text-primary-blue" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockAdminData.stats.totalBids}</div>
          <p className="text-xs text-text-secondary">
            Platform activity
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Admin Actions */}
    <div className="flex flex-wrap gap-4">
      <Link href="/dashboard/users">
        <Button className="bg-primary-blue hover:bg-primary-blue/90">
          <Users className="h-4 w-4 mr-2" />
          Manage Users
        </Button>
      </Link>
      <Link href="/dashboard/campaigns">
        <Button variant="outline">
          <Megaphone className="h-4 w-4 mr-2" />
          All Campaigns
        </Button>
      </Link>
    </div>

    {/* Recent Activity */}
    <Card>
      <CardHeader>
        <CardTitle>Recent Platform Activity</CardTitle>
        <CardDescription>Latest system events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAdminData.recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-4 border border-border-secondary rounded-lg">
              <div className="w-2 h-2 rounded-full bg-primary-blue"></div>
              <div className="flex-1">
                <p className="text-sm text-text-primary">{activity.description}</p>
                <p className="text-xs text-text-secondary">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default function DashboardPage() {
  const [user] = useState(mockUser);

  const renderDashboard = () => {
    switch (user.role) {
      case 'brand':
        return <BrandDashboard />;
      case 'influencer':
        return <InfluencerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <BrandDashboard />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            Welcome back, {user.displayName}!
          </h1>
          <p className="text-text-secondary">
            Here's what's happening with your {user.role} account today.
          </p>
        </div>
      </div>

      {renderDashboard()}
    </div>
  );
}
