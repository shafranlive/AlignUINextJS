'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  RiLayoutGridLine,
  RiFileTextLine,
  RiUserLine,
  RiSettings3Line,
  RiPieChartLine,
  RiMailLine,
  RiFolderLine,
  RiCalendarLine,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
} from '@remixicon/react';
import * as Tooltip from '@/components/ui/tooltip';
import { cn } from '@/utils/cn';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', icon: RiLayoutGridLine, href: '/' },
  { label: 'Dashboard', icon: RiPieChartLine, href: '/dashboard' },
  { label: 'Documents', icon: RiFileTextLine, href: '/documents' },
  { label: 'Users', icon: RiUserLine, href: '/users' },
  { label: 'Messages', icon: RiMailLine, href: '/messages' },
  { label: 'Files', icon: RiFolderLine, href: '/files' },
  { label: 'Calendar', icon: RiCalendarLine, href: '/calendar' },
  { label: 'Settings', icon: RiSettings3Line, href: '/settings' },
];

export function CollapsibleSidebar({ collapsed, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen border-r border-stroke-soft-200 bg-bg-white-0 transition-all duration-300 ease-in-out',
        collapsed ? 'w-20' : 'w-64',
      )}
    >
      <div className='flex h-full flex-col'>
        <div className='flex h-16 items-center justify-between border-b border-stroke-soft-200 px-5'>
          {!collapsed && (
            <div className='flex items-center gap-2'>
              <div className='flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600'>
                <span className='text-label-md font-semibold text-static-white'>A</span>
              </div>
              <span className='text-label-lg font-semibold text-text-strong-950'>AppName</span>
            </div>
          )}
          <button
            onClick={onToggle}
            className={cn(
              'flex size-8 items-center justify-center rounded-lg text-text-sub-600 transition-all hover:bg-bg-weak-50 hover:text-text-strong-950',
              collapsed && 'mx-auto',
            )}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <RiMenuUnfoldLine className='size-5' />
            ) : (
              <RiMenuFoldLine className='size-5' />
            )}
          </button>
        </div>

        <nav className='flex-1 overflow-y-auto p-3'>
          <div className='flex flex-col gap-1'>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;

              const linkContent = (
                <Link
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-paragraph-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-text-sub-600 hover:bg-bg-weak-50 hover:text-text-strong-950',
                    collapsed && 'justify-center',
                  )}
                >
                  <Icon className='size-5 flex-shrink-0' />
                  {!collapsed && <span className='truncate'>{item.label}</span>}
                </Link>
              );

              if (collapsed) {
                return (
                  <Tooltip.Provider key={item.label}>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>{linkContent}</Tooltip.Trigger>
                      <Tooltip.Content side='right' className='z-50'>
                        {item.label}
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                );
              }

              return <div key={item.label}>{linkContent}</div>;
            })}
          </div>
        </nav>

        <div className='border-t border-stroke-soft-200 p-4'>
          {!collapsed ? (
            <div className='flex items-center gap-3 rounded-lg bg-blue-50 p-3'>
              <div className='flex size-10 items-center justify-center rounded-lg bg-blue-600'>
                <span className='text-label-sm font-semibold text-static-white'>JD</span>
              </div>
              <div className='flex-1 overflow-hidden'>
                <p className='truncate text-label-sm font-medium text-text-strong-950'>
                  John Doe
                </p>
                <p className='truncate text-paragraph-xs text-text-sub-600'>john@example.com</p>
              </div>
            </div>
          ) : (
            <div className='flex justify-center'>
              <div className='flex size-10 items-center justify-center rounded-lg bg-blue-600'>
                <span className='text-label-sm font-semibold text-static-white'>JD</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
