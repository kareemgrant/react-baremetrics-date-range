import React from 'react'
import {
  eachDayOfInterval,
  lightFormat,
  endOfMonth,
  startOfMonth,
  endOfWeek,
  startOfWeek
 } from 'date-fns'
import CalendarDay from './CalendarDay'

function CalendarGrid (props) {
  const intervalStartDate = startOfWeek(startOfMonth(props.currentDate))
  const intervalEndDate = endOfWeek(endOfMonth(props.currentDate))

  const days = eachDayOfInterval({
    start: intervalStartDate,
    end: intervalEndDate
  }).map(date => {
    return (
      <CalendarDay
        date={date}
        key={lightFormat(date, 'yyyy-MM-dd')}
        currentDate={props.currentDate}
        {...props}
      />
    )
  })

  return (
    <div className='px-1 py-xs text-sm'>
      <div className='w-full grid grid-cols-7 gap-x-1 gap-y-1 border-b border-transparent box-border'>
        { days }
      </div>
    </div>
  )
}

export default CalendarGrid
