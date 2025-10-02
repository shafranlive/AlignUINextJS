'use client';

import * as Select from '@/components/ui/select';
import * as ProgressBar from '@/components/ui/progress-bar';

export function PatientsCard() {
  const newPatients = 21;
  const returningPatients = 142;
  const total = newPatients + returningPatients;
  const newPercentage = (newPatients / total) * 100;
  const returningPercentage = (returningPatients / total) * 100;

  return (
    <div className='rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
      <div className='mb-6 flex items-center justify-between'>
        <h3 className='text-label-md text-text-sub-600'>Patients</h3>
        <Select.Root defaultValue='thismonth'>
          <Select.Trigger className='w-[120px]'>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value='thismonth'>This month</Select.Item>
            <Select.Item value='lastmonth'>Last month</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className='mb-6 flex items-end gap-6'>
        <div>
          <p className='text-title-h1 text-text-strong-950'>{newPatients}</p>
          <p className='mt-1 text-paragraph-sm text-text-sub-600'>New patients</p>
        </div>
        <div>
          <p className='text-title-h1 text-text-strong-950'>{returningPatients}</p>
          <p className='mt-1 text-paragraph-sm text-text-sub-600'>Returning patients</p>
        </div>
      </div>

      <div className='space-y-3'>
        <div>
          <div className='mb-2 flex items-center justify-between'>
            <span className='text-paragraph-sm text-text-sub-600'>New patients</span>
            <span className='text-label-sm text-text-strong-950'>{newPercentage.toFixed(2)}%</span>
          </div>
          <ProgressBar.Root value={newPercentage} color='blue' />
        </div>

        <div>
          <div className='mb-2 flex items-center justify-between'>
            <span className='text-paragraph-sm text-text-sub-600'>Returning patients</span>
            <span className='text-label-sm text-text-strong-950'>{returningPercentage.toFixed(2)}%</span>
          </div>
          <div className='h-1.5 w-full rounded-full bg-bg-soft-200'>
            <div
              className='h-full rounded-full bg-gray-300 transition-all duration-300 ease-out'
              style={{ width: `${returningPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
