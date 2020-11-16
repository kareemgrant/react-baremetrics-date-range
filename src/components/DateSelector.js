import React from 'react'
import { format, isFuture, addMonths, addYears } from 'date-fns'

function DateSelector (props) {
  return (
    <div className='w-full h-11 flex border-b'>
      <div className='w-3/5 border-r flex items-center px-3'>
        <div className='flex space-around items-center w-full'>
          <button
            onClick={props.prevMonth}
            className='flex focus:outline-none border border-transparent rounded text-gray-500 hover:text-gray-800'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7' /></svg>
          </button>

          <div className='flex-1 flex justify-center'>
            <span className='font-medium'>
              { format(props.currentDate, 'MMMM') }
            </span>
          </div>

          <button
            onClick={props.nextMonth}
            disabled={isFuture(addMonths(props.currentDate, 1)) ? 'disabled' : false}
            className={`flex focus:outline-none border border-transparent rounded text-gray-500 hover:text-gray-800 ${isFuture(addMonths(props.currentDate, 1)) ? 'opacity-0' : ''}`}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7' /></svg>
          </button>
        </div>
      </div>

      <div className='w-2/5 flex justify-center items-center px-3'>
        <div className='flex space-around items-center w-full'>
          <button
            onClick={props.prevYear}
            className='flex focus:outline-none border border-transparent rounded text-gray-500 hover:text-gray-800'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7' /></svg>
          </button>

          <div className='flex-1 flex justify-center'>
            <span className='font-medium'>
              { format(props.currentDate, 'yyyy') }
            </span>
          </div>

          <button
            onClick={props.nextYear}
            disabled={isFuture(addYears(props.currentDate, 1)) ? 'disabled' : false}
            className={`flex focus:outline-none border border-transparent rounded text-gray-500 hover:text-gray-800 ${isFuture(addYears(props.currentDate, 1)) ? 'opacity-0' : ''}`}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7' /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DateSelector
