'use client';

import { RiArrowUpLine, RiArrowDownLine } from '@remixicon/react';
import * as Select from '@/components/ui/select';
import * as Badge from '@/components/ui/badge';

const monthlyData = [
  { month: 'JAN', income: 4000, expense: 2500 },
  { month: 'FEB', income: 5000, expense: 3000 },
  { month: 'MAR', income: 9000, expense: 3500 },
  { month: 'APR', income: 6000, expense: 4000 },
  { month: 'MAY', income: 7000, expense: 3800 },
  { month: 'JUN', income: 8500, expense: 5000 },
];

export function IncomeExpenseCard() {
  const totalIncome = 1412;
  const totalExpenses = 612.34;
  const incomeChange = 6.51;
  const expenseChange = 2.41;

  const maxValue = Math.max(...monthlyData.flatMap((d) => [d.income, d.expense]));

  return (
    <div className='rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
      <div className='mb-6 flex items-center justify-between'>
        <h3 className='text-label-md text-text-sub-600'>Income & Expense</h3>
        <Select.Root defaultValue='6months'>
          <Select.Trigger className='w-[140px]'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='6months'>Last 6 months</Select.Item>
            <Select.Item value='12months'>Last 12 months</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className='mb-6 flex gap-6'>
        <div>
          <div className='flex items-center gap-2'>
            <div className='size-3 rounded-sm bg-green-500' />
            <span className='text-subheading-2xs uppercase text-text-soft-400'>TOTAL INCOME</span>
          </div>
          <div className='mt-2 flex items-baseline gap-2'>
            <span className='text-title-h5 text-text-strong-950'>${totalIncome}</span>
            <Badge.Root size='small' color='green' variant='lighter'>
              <Badge.Icon as={RiArrowUpLine} />
              {incomeChange}%
            </Badge.Root>
          </div>
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <div className='size-3 rounded-sm bg-yellow-500' />
            <span className='text-subheading-2xs uppercase text-text-soft-400'>TOTAL EXPENSES</span>
          </div>
          <div className='mt-2 flex items-baseline gap-2'>
            <span className='text-title-h5 text-text-strong-950'>${totalExpenses}</span>
            <Badge.Root size='small' color='red' variant='lighter'>
              <Badge.Icon as={RiArrowDownLine} />
              {expenseChange}%
            </Badge.Root>
          </div>
        </div>
      </div>

      <div className='relative h-64'>
        <div className='absolute inset-0 flex items-end justify-between gap-6'>
          {monthlyData.map((data) => {
            const incomeHeight = (data.income / maxValue) * 100;
            const expenseHeight = (data.expense / maxValue) * 100;

            return (
              <div key={data.month} className='flex flex-1 flex-col items-center gap-4'>
                <div className='relative flex w-full flex-1 items-end justify-center gap-2'>
                  <div
                    className='w-full max-w-[40px] rounded-t-lg bg-green-500 transition-all duration-300 hover:bg-green-600'
                    style={{ height: `${incomeHeight * 2}px` }}
                  />
                  <div
                    className='w-full max-w-[40px] rounded-t-lg bg-yellow-500 transition-all duration-300 hover:bg-yellow-600'
                    style={{ height: `${expenseHeight * 2}px` }}
                  />
                </div>
                <span className='text-paragraph-xs text-text-soft-400'>{data.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
