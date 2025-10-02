'use client';

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { CashflowCard } from '@/components/dashboard/cashflow-card';
import { ExpensesCard } from '@/components/dashboard/expenses-card';
import { IncomeExpenseCard } from '@/components/dashboard/income-expense-card';
import { PatientsCard } from '@/components/dashboard/patients-card';
import { PopularTreatmentCard } from '@/components/dashboard/popular-treatment-card';
import { StockAvailabilityCard } from '@/components/dashboard/stock-availability-card';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />

      <main className='flex-1 p-6 bg-bg-weak-50'>
        <div className='mb-6'>
          <h2 className='text-title-h4 text-text-strong-950'>Good morning, John!</h2>
          <p className='text-paragraph-sm text-text-sub-600'>Wednesday, December 6, 2022</p>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <CashflowCard />
          </div>
          <div>
            <ExpensesCard />
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <IncomeExpenseCard />
          </div>
          <div>
            <PatientsCard />
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <StockAvailabilityCard />
          </div>
          <div>
            <PopularTreatmentCard />
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
