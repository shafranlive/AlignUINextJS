'use client';

import {
  RiSearchLine,
  RiNotification3Line,
  RiSettings3Line,
  RiQuestionLine,
  RiMenuLine,
} from '@remixicon/react';
import * as Input from '@/components/ui/input';
import * as Dropdown from '@/components/ui/dropdown';
import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import { cn } from '@/utils/cn';

interface TopMenuProps {
  collapsed?: boolean;
  onMobileMenuToggle?: () => void;
}

export function TopMenu({ onMobileMenuToggle }: TopMenuProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 border-b border-stroke-soft-200 bg-bg-white-0 transition-all duration-300',
        'h-16',
      )}
    >
      <div className='flex h-full items-center justify-between gap-4 px-6'>
        <div className='flex items-center gap-4'>
          <button
            onClick={onMobileMenuToggle}
            className='flex size-9 items-center justify-center rounded-lg text-text-sub-600 transition-colors hover:bg-bg-weak-50 hover:text-text-strong-950 lg:hidden'
            aria-label='Toggle mobile menu'
          >
            <RiMenuLine className='size-5' />
          </button>

          <div className='hidden lg:block'>
            <h1 className='text-title-h5 font-semibold text-text-strong-950'>Dashboard</h1>
          </div>
        </div>

        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-xl'>
            <Input.Root size='small'>
              <Input.Wrapper>
                <Input.Icon as={RiSearchLine} />
                <Input.Input
                  placeholder='Search for anything...'
                  className='bg-bg-weak-50 placeholder:text-text-soft-400'
                />
              </Input.Wrapper>
            </Input.Root>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <button
            className='hidden size-9 items-center justify-center rounded-lg text-text-sub-600 transition-colors hover:bg-bg-weak-50 hover:text-text-strong-950 md:flex'
            aria-label='Help'
          >
            <RiQuestionLine className='size-5' />
          </button>

          <div className='relative'>
            <button
              className='flex size-9 items-center justify-center rounded-lg text-text-sub-600 transition-colors hover:bg-bg-weak-50 hover:text-text-strong-950'
              aria-label='Notifications'
            >
              <RiNotification3Line className='size-5' />
            </button>
            <Badge.Root
              size='small'
              color='red'
              className='absolute right-0 top-0 flex size-5 items-center justify-center'
            >
              3
            </Badge.Root>
          </div>

          <button
            className='hidden size-9 items-center justify-center rounded-lg text-text-sub-600 transition-colors hover:bg-bg-weak-50 hover:text-text-strong-950 md:flex'
            aria-label='Settings'
          >
            <RiSettings3Line className='size-5' />
          </button>

          <div className='ml-2 h-8 w-px bg-stroke-soft-200' />

          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <button className='flex items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-bg-weak-50'>
                <Avatar.Root size='32'>
                  <Avatar.Image
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop'
                    alt='User'
                  />
                </Avatar.Root>
                <div className='hidden text-left md:block'>
                  <p className='text-label-sm font-medium text-text-strong-950'>John Doe</p>
                  <p className='text-paragraph-xs text-text-sub-600'>Admin</p>
                </div>
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content align='end' className='w-48'>
              <Dropdown.Item>
                <RiUserLine className='mr-2 size-4' />
                Profile
              </Dropdown.Item>
              <Dropdown.Item>
                <RiSettings3Line className='mr-2 size-4' />
                Settings
              </Dropdown.Item>
              <Dropdown.Separator className='my-1 h-px bg-stroke-soft-200' />
              <Dropdown.Item className='text-red-600'>Logout</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </div>
      </div>
    </header>
  );
}

function RiUserLine({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
    >
      <path d='M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z' />
    </svg>
  );
}
