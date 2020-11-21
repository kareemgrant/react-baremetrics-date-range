import React from 'react'
import {
  format,
  subDays,
  subMonths,
  startOfMonth,
  endOfMonth,
  lastDayOfMonth,
  toDate,
  startOfDay,
  endOfDay,
  startOfYear,
  endOfYear
} from 'date-fns'

function CalendarPresets (props) {
  const today = endOfDay(toDate(Date.now()))
  const thirtyDaysAgo = subDays(startOfDay(toDate(Date.now())), 30)
  const startOfCurrentMonth = startOfMonth(startOfDay(toDate(Date.now())))
  const startOfLastMonth = subMonths(startOfMonth(toDate(Date.now())), 1)
  const endOfLastMonth = lastDayOfMonth(startOfLastMonth)
  const startOfLastThreeMonths = startOfMonth(subMonths(endOfLastMonth, 2))
  const startOfLastSixMonths = startOfMonth(subMonths(endOfLastMonth, 5))
  const startOfCurrentYear = startOfYear(today)
  const startOfLastYear = startOfYear(subMonths(startOfCurrentYear, 1))
  const endOfLastYear = endOfYear(startOfLastYear)

  return (
    <div className='border-r w-80'>
      <button className='flex w-full items-center h-10 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='flex items-baseline'>
          <div className='text-sm font-medium'>
            Last 30 days
          </div>
          <div className='ml-1 text-gray-500 text-xs font-semibold'>
            <span>{format(thirtyDaysAgo, 'MMM d')}</span> - <span>{format(today, 'MMM d')}</span>
          </div>
        </div>
      </button>

      <button className='flex w-full items-center h-10 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='flex items-baseline'>
          <div className='text-sm font-medium'>
            This month
          </div>
          <div className='ml-1 text-gray-500 text-xs font-semibold'>
            <span>{format(startOfCurrentMonth, 'MMM d')}</span> - <span>{format(today, 'MMM d')}</span>
          </div>
        </div>
      </button>

      <button className='flex w-full items-center h-10 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='flex items-baseline'>
          <div className='text-sm font-medium'>
            Last Month
          </div>
          <div className='ml-1 text-gray-500 text-xs font-semibold'>
            <span>{format(startOfLastMonth, 'MMM d')}</span> - <span>{format(endOfLastMonth, 'MMM d')}</span>
          </div>
        </div>
      </button>

      <button className='flex w-full items-center h-10 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='flex items-baseline'>
          <div className='text-sm font-medium'>
            Last 3 months
          </div>
          <div className='ml-1 text-gray-500 text-xs font-semibold'>
            <span>{format(startOfLastThreeMonths, 'MMM d')}</span> - <span>{format(endOfLastMonth, 'MMM d')}</span>
          </div>
        </div>
      </button>

      <button className='flex w-full items-center h-10 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='flex items-baseline'>
          <div className='text-sm font-medium'>
            Last 6 months
          </div>

          <div className='ml-1 text-gray-500 text-xs font-semibold'>
            <span>{format(startOfLastSixMonths, 'MMM d')}</span> - <span>{format(endOfLastMonth, 'MMM d')}</span>
          </div>
        </div>
      </button>

      <button className='flex w-full items-center h-10 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='flex items-baseline'>
          <div className='text-sm font-medium'>
            This year
          </div>

          <div className='ml-1 text-gray-500 text-xs font-semibold'>
            <span>{format(startOfCurrentYear, 'MMM d')}</span> - <span>{format(today, 'MMM d')}</span>
          </div>
        </div>
      </button>

      <button className='flex w-full items-center h-10 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='flex items-baseline'>
          <div className='text-sm font-medium'>
            Last year
          </div>

          <div className='ml-1 text-gray-500 text-xs font-semibold'>
            <span>{format(startOfLastYear, "MMM d, ''yy")}</span> - <span>{format(endOfLastYear, "MMM d, ''yy")}</span>
          </div>
        </div>
      </button>

      <button className='flex w-full items-center h-10 px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='flex items-baseline'>
          <div className='text-sm font-medium'>
            All time
          </div>

          <div className='ml-1 text-gray-500 text-xs font-semibold'>
            <span>{format(new Date(2018, 3, 16), "MMM d, ''yy")}</span> - <span>{format(today, "MMM d, ''yy")}</span>
          </div>
        </div>
      </button>
    </div>
  )
}

export default CalendarPresets
