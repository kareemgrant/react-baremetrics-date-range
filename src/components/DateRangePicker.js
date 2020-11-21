import React, { useState } from 'react'
import DateRangePickerBody from './DateRangePickerBody'
import Overlay from './Overlay'
import useKeyPress from '../hooks/useKeyPress'
import {
  format,
  toDate,
  subDays,
  startOfDay
} from 'date-fns'

function DateRangePicker (props) {
  const [showModal, setShowModal] = useState(false)
  const [startDate, setStartDate] = useState(
    subDays(startOfDay(toDate(Date.now())), 7)
  )
  const [endDate, setEndDate] = useState(startOfDay(toDate(Date.now())))
  const [isFirstDateSelected, setIsFirstSelected] = useState(true)

  useKeyPress('Escape', () => setShowModal(false))

  const onOpenModal = (dateBtn) => {
    setShowModal(true)

    if (dateBtn === 'startDate') {
      setIsFirstSelected(true)
    } else {
      setIsFirstSelected(false)
    }
  }

  const onDateRangeSelection = ({newStartDate, newEndDate}) => {
    setStartDate(newStartDate)
    setEndDate(newEndDate)
    setShowModal(false)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className='relative w-72'>
      <div className='rounded shadow flex p-2'>
        <div className='text-gray-500'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>
        </div>

        <div className='flex items-center ml-3 text-sm font-medium text-gray-800'>
          <button
            onClick={() => onOpenModal('startDate')}
            className='font-medium focus:outline-none border border-transparent rounded hover:text-indigo-500'
          >
            {format(startDate, 'MMM d, yyyy')}
          </button>

          <span className='mx-1'>-</span>

          <button
            onClick={() => onOpenModal('endDate')}
            className='font-medium focus:outline-none border border-transparent rounded hover:text-indigo-500'
          >
            {format(endDate, 'MMM d, yyyy')}
          </button>
        </div>
      </div>

      { showModal &&
        <Overlay
          handleCloseModal={onCloseModal}
        >
          <DateRangePickerBody
            startDate={startDate}
            endDate={endDate}
            currentDate={isFirstDateSelected ? startDate : endDate}
            isFirstSelection={isFirstDateSelected}
            handleDateRangeSelection={onDateRangeSelection}
          />
        </Overlay>
      }

      <div className='flex flex-col items-start mt-10 w-100'>
        <div className='text-lg flex'>
          <div className='w-40'>Start Date:</div>
          <span className='ml-6 font-bold'>{format(startDate, 'MMM d, yyyy')}</span>
        </div>

        <div className='text-lg flex'>
          <div className='w-40'>End Date:</div>
          <span className='ml-6 font-bold'>{format(endDate, 'MMM d, yyyy')}</span>
        </div>
      </div>
    </div>
  )
}

export default DateRangePicker
