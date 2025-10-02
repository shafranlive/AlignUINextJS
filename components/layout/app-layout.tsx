'use client';

import { useState, useEffect } from 'react';
import { CollapsibleSidebar } from './collapsible-sidebar';
import { TopMenu } from './top-menu';
import { cn } from '@/utils/cn';

interface AppLayoutProps {
  children?: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  return (
    <div className='relative min-h-screen bg-bg-weak-50'>
      {isMobile && mobileMenuOpen && (
        <div
          className='fixed inset-0 z-30 bg-black/50 transition-opacity lg:hidden'
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden='true'
        />
      )}

      <div
        className={cn(
          'lg:fixed lg:inset-y-0 lg:left-0',
          isMobile && !mobileMenuOpen && 'hidden',
          isMobile && mobileMenuOpen && 'fixed inset-y-0 left-0 z-40',
        )}
      >
        <CollapsibleSidebar collapsed={sidebarCollapsed} onToggle={handleToggleSidebar} />
      </div>

      <div
        className={cn(
          'flex min-h-screen flex-col transition-all duration-300',
          !isMobile && (sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'),
        )}
      >
        <TopMenu collapsed={sidebarCollapsed} onMobileMenuToggle={() => setMobileMenuOpen(true)} />

        <main className='flex-1'>
          {children || (
            <div className='flex items-center justify-center p-8'>
              <div className='text-center'>
                <div className='mb-4 text-6xl font-bold text-text-soft-400'>📍</div>
                <h2 className='mb-2 text-title-h4 font-semibold text-text-strong-950'>
                  This Body Area
                </h2>
                <p className='text-paragraph-md text-text-sub-600'>
                  Main content goes here. Replace this placeholder with your actual content.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
