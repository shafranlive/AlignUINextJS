'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  RiLayoutGridLine,
  RiCalendarLine,
  RiUserLine,
  RiHeartPulseLine,
  RiTeamLine,
  RiBankCardLine,
  RiShoppingBagLine,
  RiShoppingCartLine,
  RiBankCard2Line,
  RiStockLine,
  RiFileList3Line,
  RiCustomerService2Line,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from '@remixicon/react';
import * as Accordion from '@/components/ui/accordion';
import * as CompactButton from '@/components/ui/compact-button';
import { cn } from '@/utils/cn';

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: 'CLINIC',
    items: [
      { label: 'Dashboard', icon: RiLayoutGridLine, href: '/dashboard' },
      { label: 'Reservations', icon: RiCalendarLine, href: '/dashboard/reservations' },
      { label: 'Patients', icon: RiUserLine, href: '/dashboard/patients' },
      { label: 'Treatments', icon: RiHeartPulseLine, href: '/dashboard/treatments' },
      { label: 'Staff List', icon: RiTeamLine, href: '/dashboard/staff' },
    ],
  },
  {
    title: 'FINANCE',
    items: [
      { label: 'Accounts', icon: RiBankCardLine, href: '/dashboard/accounts' },
      { label: 'Sales', icon: RiShoppingBagLine, href: '/dashboard/sales' },
      { label: 'Purchases', icon: RiShoppingCartLine, href: '/dashboard/purchases' },
      { label: 'Payment Method', icon: RiBankCard2Line, href: '/dashboard/payment' },
    ],
  },
  {
    title: 'FINANCIAL ASSET',
    items: [
      { label: 'Stocks', icon: RiStockLine, href: '/dashboard/stocks' },
      { label: 'Pheriperal', icon: RiFileList3Line, href: '/dashboard/peripheral' },
    ],
  },
];

export function DashboardSidebar({ collapsed, onToggle }: DashboardSidebarProps) {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen border-r border-stroke-soft-200 bg-bg-white-0 transition-all duration-300',
        collapsed ? 'w-20' : 'w-64',
      )}
    >
      <div className='flex h-full flex-col'>
        <div className='flex items-center justify-between border-b border-stroke-soft-200 p-5'>
          {!collapsed && (
            <div className='flex items-center gap-2'>
              <div className='flex size-8 items-center justify-center rounded-lg bg-primary-base'>
                <span className='text-label-md text-static-white'>Z</span>
              </div>
              <span className='text-label-lg text-text-strong-950'>Zendenta</span>
            </div>
          )}
          <CompactButton.Root
            variant='ghost'
            size='medium'
            onClick={onToggle}
            className={cn(collapsed && 'mx-auto')}
          >
            <CompactButton.Icon as={collapsed ? RiArrowRightSLine : RiArrowLeftSLine} />
          </CompactButton.Root>
        </div>

        {!collapsed && (
          <div className='border-b border-stroke-soft-200 p-5'>
            <div className='flex items-center gap-3'>
              <div className='size-10 overflow-hidden rounded-lg bg-bg-soft-200'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop'
                  alt='Avicena Clinic'
                  className='size-full object-cover'
                />
              </div>
              <div className='flex-1'>
                <p className='text-label-sm text-text-strong-950'>Avicena Clinic</p>
                <p className='text-paragraph-xs text-text-sub-600'>834 Grand Avenue, CA</p>
              </div>
            </div>
          </div>
        )}

        <nav className='flex-1 overflow-y-auto p-3'>
          {collapsed ? (
            <div className='flex flex-col gap-2'>
              {navGroups.flatMap((group) =>
                group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.label;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveItem(item.label)}
                      className={cn(
                        'flex size-11 items-center justify-center rounded-lg transition-all duration-200',
                        isActive
                          ? 'bg-primary-alpha-10 text-primary-base'
                          : 'text-text-sub-600 hover:bg-bg-weak-50',
                      )}
                    >
                      <Icon className='size-5' />
                    </Link>
                  );
                }),
              )}
            </div>
          ) : (
            <Accordion.Root type='multiple' defaultValue={['clinic', 'finance', 'asset']}>
              {navGroups.map((group) => (
                <Accordion.Item
                  key={group.title}
                  value={group.title.toLowerCase().replace(' ', '-')}
                  className='mb-2 border-none bg-transparent p-0 ring-0 hover:bg-transparent data-[state=open]:bg-transparent'
                >
                  <Accordion.Header>
                    <Accordion.Trigger className='w-full gap-2 rounded-lg px-3 py-2 hover:bg-bg-weak-50'>
                      <span className='text-subheading-2xs uppercase text-text-soft-400'>
                        {group.title}
                      </span>
                      <span className='flex-1' />
                      <Accordion.Arrow />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className='pt-1'>
                    <div className='flex flex-col gap-1'>
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.label;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setActiveItem(item.label)}
                            className={cn(
                              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-paragraph-sm transition-all duration-200',
                              isActive
                                ? 'bg-primary-alpha-10 text-primary-base'
                                : 'text-text-sub-600 hover:bg-bg-weak-50 hover:text-text-strong-950',
                            )}
                          >
                            <Icon className='size-5' />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          )}
        </nav>

        {!collapsed && (
          <div className='border-t border-stroke-soft-200 p-3'>
            <Link
              href='/dashboard/support'
              className='flex items-center gap-3 rounded-lg px-3 py-2.5 text-paragraph-sm text-text-sub-600 transition-all duration-200 hover:bg-bg-weak-50 hover:text-text-strong-950'
            >
              <RiFileList3Line className='size-5' />
              <span>Report</span>
            </Link>
            <Link
              href='/dashboard/support'
              className='flex items-center gap-3 rounded-lg px-3 py-2.5 text-paragraph-sm text-text-sub-600 transition-all duration-200 hover:bg-bg-weak-50 hover:text-text-strong-950'
            >
              <RiCustomerService2Line className='size-5' />
              <span>Customer Support</span>
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
