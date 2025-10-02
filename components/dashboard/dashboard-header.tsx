'use client';

import {
  RiSearchLine,
  RiAddLine,
  RiQuestionLine,
  RiFlashlightLine,
  RiSettings3Line,
  RiFlagLine,
} from '@remixicon/react';
import * as Input from '@/components/ui/input';
import * as CompactButton from '@/components/ui/compact-button';
import * as Avatar from '@/components/ui/avatar';
import * as Dropdown from '@/components/ui/dropdown';
import * as Badge from '@/components/ui/badge';

export function DashboardHeader() {
  return (
    <header className='sticky top-0 z-10 border-b border-stroke-soft-200 bg-bg-white-0 px-6 py-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <h1 className='text-label-lg text-text-strong-950'>Dashboard</h1>
        </div>

        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-md'>
            <Input.Root size='small'>
              <Input.Wrapper>
                <Input.Icon as={RiSearchLine} />
                <Input.Input placeholder='Search for anything here...' />
              </Input.Wrapper>
            </Input.Root>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <CompactButton.Root variant='white' size='medium' className='!bg-primary-base !text-static-white hover:!bg-primary-darker'>
            <CompactButton.Icon as={RiAddLine} />
          </CompactButton.Root>

          <CompactButton.Root variant='ghost' size='medium'>
            <CompactButton.Icon as={RiQuestionLine} />
          </CompactButton.Root>

          <CompactButton.Root variant='ghost' size='medium'>
            <CompactButton.Icon as={RiFlashlightLine} />
          </CompactButton.Root>

          <CompactButton.Root variant='ghost' size='medium'>
            <CompactButton.Icon as={RiSettings3Line} />
          </CompactButton.Root>

          <div className='relative'>
            <CompactButton.Root variant='ghost' size='medium'>
              <CompactButton.Icon as={RiFlagLine} />
            </CompactButton.Root>
            <Badge.Root size='small' color='green' className='absolute -right-1 -top-1'>
              1/4
            </Badge.Root>
          </div>

          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <button className='flex items-center gap-2 rounded-lg p-1 transition-colors hover:bg-bg-weak-50'>
                <Avatar.Root size='40'>
                  <Avatar.Image src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop' alt='Darrell Steward' />
                </Avatar.Root>
                <div className='text-left'>
                  <p className='text-label-sm text-text-strong-950'>Darrell Steward</p>
                  <p className='text-paragraph-xs text-text-sub-600'>Super admin</p>
                </div>
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content align='end'>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Separator className='my-1 h-px bg-stroke-soft-200' />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </div>
      </div>
    </header>
  );
}
