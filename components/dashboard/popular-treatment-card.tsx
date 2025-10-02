'use client';

import { RiStarFill } from '@remixicon/react';
import * as Select from '@/components/ui/select';

const treatments = [
  { id: 1, name: 'Scaling Teeth', rating: 4.7 },
  { id: 2, name: 'Tooth Extraction', rating: 4.4 },
  { id: 3, name: 'General Checkup', rating: 4.6 },
];

export function PopularTreatmentCard() {
  return (
    <div className='rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
      <div className='mb-6 flex items-center justify-between'>
        <h3 className='text-label-md text-text-sub-600'>Popular Treatment</h3>
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

      <div className='space-y-3'>
        {treatments.map((treatment, index) => (
          <div
            key={treatment.id}
            className='flex items-center gap-3 rounded-lg border border-stroke-soft-200 p-3 transition-all hover:border-primary-base hover:bg-primary-alpha-10'
          >
            <span className='text-label-md text-text-sub-600'>{index + 1}</span>
            <span className='flex-1 text-paragraph-sm text-text-strong-950'>{treatment.name}</span>
            <div className='flex items-center gap-1'>
              <RiStarFill className='size-4 text-yellow-500' />
              <span className='text-label-sm text-text-strong-950'>{treatment.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
