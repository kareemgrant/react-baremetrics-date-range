import React from 'react'

function CalendarPresets (props) {
  return (
    <div className='border-r w-100'>
      <button className='flex w-full items-center h-11 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='text-medium font-medium'>
          Last 30 days
        </div>
        <div className='ml-3 text-gray-500 text-sm font-semibold'>
          Oct 15 - Nov 13
        </div>
      </button>

      <button className='flex w-full items-center h-11 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='text-medium font-medium'>
          This month
        </div>
        <div className='ml-3 text-gray-500 text-sm font-semibold'>
          Nov 1 - Nov 13
        </div>
      </button>

      <button className='flex w-full items-center h-11 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='text-medium font-medium'>
          Last Month
        </div>
        <div className='ml-3 text-gray-500 text-sm font-semibold'>
          Oct 1 - Oct 31
        </div>
      </button>

      <button className='flex w-full items-center h-11 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='text-medium font-medium'>
          Last 3 months
        </div>
        <div className='ml-3 text-gray-500 text-sm font-semibold'>
          Aug 1 - Oct 31
        </div>
      </button>

      <button className='flex w-full items-center h-11 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='text-medium font-medium'>
          Last 6 months
        </div>

        <div className='ml-3 text-gray-500 text-sm font-semibold'>
          May 1 - Oct 31
        </div>
      </button>

      <button className='flex w-full items-center h-11 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='text-medium font-medium'>
          This year
        </div>

        <div className='ml-3 text-gray-500 text-sm font-semibold'>
          Jan 1 - Nov 13
        </div>
      </button>

      <button className='flex w-full items-center h-11 border-b px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='text-medium font-medium'>
          Last year
        </div>

        <div className='ml-3 text-gray-500 text-sm font-semibold'>
          Jan 1, '19 - Dec 31, '19
        </div>
      </button>

      <button className='flex w-full items-center h-11 px-3 hover:bg-gray-200 text-gray-600 hover:text-indigo-500'>
        <div className='text-medium font-medium'>
          All time
        </div>

        <div className='ml-3 text-gray-500 text-sm font-semibold'>
          Jun 13, '17 - Nov 13, '20
        </div>
      </button>
    </div>
  )
}

export default CalendarPresets
