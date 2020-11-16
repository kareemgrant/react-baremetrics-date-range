import React from 'react'
import { format, isSameMonth, isFuture } from 'date-fns'

function CalendarDay (props) {
  return (
    <button
      onClick={() => console.log(props.date)}
      disabled={isFuture(props.date) ? 'disabled' : false}
      className={`h-10 flex-1 flex justify-center items-center rounded box-border focus:outline-none border border-transparent font-semibold ${isFuture(props.date) ? 'opacity-25 cursor-not-allowed text-gray-600' : isSameMonth(props.currentDate, props.date) ? 'text-gray-700 hover:bg-gray-200 hover:text-indigo-500' : 'text-gray-500 hover:bg-gray-200 hover:text-indigo-500'}`}
    >
      { format(props.date, 'd') }
    </button>
  )
}

export default CalendarDay
