'use client';

import { RiArrowUpLine } from '@remixicon/react';
import * as Select from '@/components/ui/select';
import * as Badge from '@/components/ui/badge';

const monthlyData = [
  { month: 'JAN', value: 2000 },
  { month: 'FEB', value: 3000 },
  { month: 'MAR', value: 3500 },
  { month: 'APR', value: 4200 },
  { month: 'MAY', value: 5800 },
  { month: 'JUN', value: 7108.97 },
  { month: 'JUL', value: 6500 },
  { month: 'AUG', value: 7200 },
  { month: 'SEP', value: 8000 },
  { month: 'OCT', value: 8500 },
  { month: 'NOV', value: 9200 },
  { month: 'DEC', value: 10500 },
];

export function CashflowCard() {
  const maxValue = Math.max(...monthlyData.map((d) => d.value));
  const currentValue = 13232;
  const percentageChange = 4.51;

  return (
    <div className='rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h3 className='text-label-md text-text-sub-600'>Cashflow</h3>
          <div className='mt-1 flex items-center gap-2'>
            <p className='text-subheading-2xs uppercase text-text-soft-400'>TOTAL CASH</p>
          </div>
          <div className='mt-2 flex items-baseline gap-2'>
            <span className='text-title-h4 text-text-strong-950'>${currentValue.toLocaleString()}</span>
            <Badge.Root size='small' color='green' variant='lighter'>
              <Badge.Icon as={RiArrowUpLine} />
              {percentageChange}%
            </Badge.Root>
          </div>
        </div>
        <Select.Root defaultValue='12months'>
          <Select.Trigger className='w-[140px]'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='6months'>Last 6 months</Select.Item>
            <Select.Item value='12months'>Last 12 months</Select.Item>
            <Select.Item value='24months'>Last 24 months</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className='relative h-64'>
        <div className='absolute inset-0'>
          <div className='flex h-full items-end justify-between gap-4'>
            {monthlyData.map((data) => {
              const height = (data.value / maxValue) * 100;
              const isJune = data.month === 'JUN';

              return (
                <div key={data.month} className='relative flex flex-1 flex-col items-center'>
                  <div className='relative w-full flex-1'>
                    <div className='absolute bottom-0 w-full'>
                      <div
                        className='relative w-full rounded-t-lg bg-primary-alpha-10 transition-all duration-300 hover:bg-primary-alpha-20'
                        style={{ height: `${height * 2}px` }}
                      >
                        {isJune && (
                          <div className='absolute -top-14 left-1/2 -translate-x-1/2'>
                            <div className='rounded-lg bg-bg-strong-950 px-3 py-2 text-paragraph-xs text-static-white shadow-regular-md'>
                              <p className='text-subheading-2xs'>Total</p>
                              <p className='text-label-sm'>${data.value.toLocaleString()}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className='mt-2 text-paragraph-xs text-text-soft-400'>{data.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className='pointer-events-none absolute inset-x-0 bottom-10 border-b border-dashed border-stroke-soft-200' />
      </div>

      <div className='mt-4 text-center text-paragraph-xs text-text-sub-600'>
        January 2022 - December 2022
      </div>
    </div>
  );
}
