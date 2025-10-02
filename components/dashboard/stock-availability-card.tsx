'use client';

import * as Button from '@/components/ui/button';

const stockData = [
  { label: 'Available', value: 300, color: 'bg-blue-500' },
  { label: 'Low Stock', value: 100, color: 'bg-yellow-500' },
  { label: 'Out of stock', value: 42, color: 'bg-red-500' },
];

const lowStockItems = [
  { name: 'Dental Brush', quantity: 3 },
  { name: 'Chainlflex Regular', quantity: 2 },
];

export function StockAvailabilityCard() {
  const totalAsset = 53000;
  const totalProduct = 442;

  return (
    <div className='rounded-2xl bg-bg-white-0 p-6 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
      <div className='mb-6'>
        <h3 className='text-label-md text-text-sub-600'>Stock availability</h3>
      </div>

      <div className='mb-6 flex gap-6'>
        <div>
          <p className='text-subheading-2xs uppercase text-text-soft-400'>TOTAL ASSET</p>
          <p className='mt-1 text-title-h5 text-text-strong-950'>${totalAsset.toLocaleString()}</p>
        </div>
        <div>
          <p className='text-subheading-2xs uppercase text-text-soft-400'>TOTAL PRODUCT</p>
          <p className='mt-1 text-title-h5 text-text-strong-950'>{totalProduct}</p>
        </div>
      </div>

      <div className='mb-6'>
        <div className='mb-3 flex h-4 overflow-hidden rounded-full'>
          {stockData.map((stock, index) => {
            const percentage = (stock.value / totalProduct) * 100;
            return (
              <div
                key={stock.label}
                className={`${stock.color} ${index === 0 ? 'rounded-l-full' : ''} ${index === stockData.length - 1 ? 'rounded-r-full' : ''}`}
                style={{ width: `${percentage}%` }}
              />
            );
          })}
        </div>

        <div className='flex justify-between'>
          {stockData.map((stock) => (
            <div key={stock.label} className='flex items-center gap-2'>
              <div className={`size-2 rounded-full ${stock.color}`} />
              <span className='text-paragraph-xs text-text-sub-600'>{stock.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='rounded-lg bg-bg-weak-50 p-4'>
        <div className='mb-3 flex items-center justify-between'>
          <h4 className='text-subheading-2xs uppercase text-text-soft-400'>LOW STOCK</h4>
          <Button.Root variant='primary' mode='ghost' size='xxsmall'>
            View all
          </Button.Root>
        </div>

        <div className='space-y-2'>
          {lowStockItems.map((item) => (
            <div key={item.name} className='flex items-center justify-between rounded-lg bg-bg-white-0 p-3'>
              <span className='text-paragraph-sm text-text-strong-950'>{item.name}</span>
              <div className='flex items-center gap-3'>
                <span className='text-paragraph-sm text-text-sub-600'>Qty: {item.quantity}</span>
                <Button.Root variant='primary' size='xxsmall'>
                  Order
                </Button.Root>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
