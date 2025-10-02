'use client';

import * as Select from '@/components/ui/select';

const expenses = [
  { label: 'Internet', value: 45, color: 'bg-pink-500' },
  { label: 'Electricity', value: 26, color: 'bg-purple-500' },
  { label: 'Transactions', value: 22, color: 'bg-blue-500' },
  { label: 'Rental Cost', value: 8, color: 'bg-green-500' },
  { label: 'Foods', value: 3, color: 'bg-yellow-500' },
  { label: 'Other', value: 2, color: 'bg-gray-400' },
];

const topExpenses = [
  { label: 'Internet', amount: 113.64, color: 'bg-pink-500' },
  { label: 'Electricity', amount: 113.64, color: 'bg-purple-500' },
  { label: 'Transaction', amount: 113.64, color: 'bg-blue-500' },
  { label: 'Rental Cost', amount: 113.64, color: 'bg-green-500' },
];

export function ExpensesCard() {
  const totalExpense = 132.34;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;

  return (
    <div className='rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
      <div className='mb-6 flex items-center justify-between'>
        <h3 className='text-label-md text-text-sub-600'>Expenses</h3>
        <Select.Root defaultValue='6months'>
          <Select.Trigger className='w-[140px]'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='1month'>Last 1 month</Select.Item>
            <Select.Item value='6months'>Last 6 months</Select.Item>
            <Select.Item value='12months'>Last 12 months</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className='mb-6 flex justify-center'>
        <div className='relative'>
          <svg width='200' height='200' className='rotate-[-90deg]'>
            {expenses.map((expense) => {
              const strokeDasharray = (expense.value / 100) * circumference;
              const strokeDashoffset = currentOffset;
              currentOffset -= strokeDasharray;

              return (
                <circle
                  key={expense.label}
                  cx='100'
                  cy='100'
                  r={radius}
                  fill='none'
                  className={expense.color}
                  strokeWidth='24'
                  strokeDasharray={`${strokeDasharray} ${circumference}`}
                  strokeDashoffset={-strokeDashoffset}
                  strokeLinecap='round'
                />
              );
            })}
          </svg>
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <p className='text-subheading-2xs uppercase text-text-soft-400'>TOTAL EXPENSE</p>
            <p className='text-title-h5 text-text-strong-950'>${totalExpense}</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-x-4 gap-y-3'>
        {expenses.map((expense) => (
          <div key={expense.label} className='flex items-center gap-2'>
            <div className={`size-2 rounded-full ${expense.color}`} />
            <span className='text-paragraph-xs text-text-sub-600'>{expense.label}</span>
            <span className='ml-auto text-paragraph-xs font-medium text-text-strong-950'>
              {expense.value}%
            </span>
          </div>
        ))}
      </div>

      <div className='mt-6 border-t border-stroke-soft-200 pt-4'>
        <h4 className='mb-3 text-subheading-2xs uppercase text-text-soft-400'>TOP EXPENSE</h4>
        <div className='grid grid-cols-2 gap-3'>
          {topExpenses.map((expense) => (
            <div key={expense.label} className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <div className={`size-2 rounded-full ${expense.color}`} />
                <span className='text-paragraph-xs text-text-sub-600'>{expense.label}</span>
              </div>
              <span className='ml-4 mt-1 text-label-sm text-text-strong-950'>
                ${expense.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
