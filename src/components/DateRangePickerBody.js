import React, { useState } from 'react'
import CalendarGrid from './CalendarGrid'
import CalendarPresets from './CalendarPresets'
import DateSelector from './DateSelector'

import {
  add,
  sub,
  isSameMonth
} from 'date-fns'

function DateRangePickerBody (props) {
  const [firstAnchorDate, setFirstAnchorDate] = useState(props.startDate)
  const [secondAnchorDate, setSecondAnchorDate] = useState(props.endDate)

  const [currentDate, setCurrentDate] = useState(props.currentDate)

  const [isFirstSelection, setIsFirstSelection] = useState(props.isFirstSelection)
  const [anchorDateCandidate, setAnchorDateCandidate] = useState(props.endDate)

  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      return add(prevDate, {
        months: 1
      })
    })
  }

  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      return sub(prevDate, {
        months: 1
      })
    })
  }

  const nextYear = () => {
    setCurrentDate((prevDate) => {
      return add(prevDate, {
        years: 1
      })
    })
  }

  const prevYear = () => {
    setCurrentDate((prevDate) => {
      return sub(prevDate, {
        years: 1
      })
    })
  }

  const onFirstDateSelection = (date) => {
    setFirstAnchorDate(date)
    setIsFirstSelection(false)
    setAnchorDateCandidate(secondAnchorDate)

    if (!isSameMonth(secondAnchorDate, currentDate)) {
      setCurrentDate(secondAnchorDate)
    }
  }

  const onSecondDateSelection = (date) => {
    if (date < firstAnchorDate) {
      props.handleDateRangeSelection({
        newStartDate: date,
        newEndDate: firstAnchorDate
      })
    } else {
      props.handleDateRangeSelection({
        newStartDate: firstAnchorDate,
        newEndDate: date
      })
    }
  }

  const onHoverEnter = (date) => {
    setAnchorDateCandidate(date)
  }

  const onHoverLeave = (date) => {
    return true
  }

  return (
    <div className='absolute z-50 mt-2 right-0 bg-white rounded overflow-hidden'>
      <div className='flex rounded shadow'>
        <CalendarPresets
          handleDateRangeSelection={props.handleDateRangeSelection}
        />

        <div className='w-88'>
          <DateSelector
            currentDate={currentDate}
            nextMonth={nextMonth}
            prevMonth={prevMonth}
            nextYear={nextYear}
            prevYear={prevYear}
          />

          <div className='w-full h-10 border-b grid grid-cols-7 gap-1 px-1 bg-gray-100 font-medium text-gray-500'>
            <div className='flex-1 flex justify-center items-center'>
              Su
            </div>

            <div className='flex-1 flex justify-center items-center'>
              Mo
            </div>

            <div className='flex-1 flex justify-center items-center'>
              Tu
            </div>

            <div className='flex-1 flex justify-center items-center'>
              We
            </div>
            <div className='flex-1 flex justify-center items-center'>
              Th
            </div>

            <div className='flex-1 flex justify-center items-center'>
              Fr
            </div>

            <div className='flex-1 flex justify-center items-center'>
              Sa
            </div>
          </div>

          <CalendarGrid
            currentDate={currentDate}
            startDate={firstAnchorDate}
            endDate={secondAnchorDate}
            anchorDateCandidate={anchorDateCandidate}
            handleStartDateSelection={onFirstDateSelection}
            handleEndDateSelection={onSecondDateSelection}
            isFirstSelection={isFirstSelection}
            handleHoverEnter={onHoverEnter}
            handleHoverLeave={onHoverLeave}
          />
        </div>
      </div>
    </div>
  )
}

export default DateRangePickerBody
