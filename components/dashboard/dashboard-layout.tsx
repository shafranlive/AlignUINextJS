'use client';

import { useState } from 'react';
import { DashboardSidebar } from './dashboard-sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='flex min-h-screen'>
      <DashboardSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-64'}`}>
        {children}
      </div>
    </div>
  );
}
