import React, { useState } from 'react'
// import StaticCalendarGrid from './components/StaticCalendarGrid'
import CalendarGrid from './components/CalendarGrid'
import CalendarPresets from './components/CalendarPresets'
import DateSelector from './components/DateSelector'
import {
  toDate,
  parse,
  add,
  sub,
  endOfMonth,
  startOfMonth,
  endOfWeek,
  startOfWeek
} from 'date-fns'

function App () {
  const [currentDate, setCurrentDate] = useState(toDate(Date.now()))

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

  return (
    <div className='w-4/5 flex flex-col justify-center items-center'>
      <div className='flex border rounded shadow'>

        <CalendarPresets />

        <div className='w-88'>
          <DateSelector
            currentDate={currentDate}
            nextMonth={nextMonth}
            prevMonth={prevMonth}
            nextYear={nextYear}
            prevYear={prevYear}
          />

          <div className='w-full h-11 border-b grid grid-cols-7 gap-1 px-1 bg-gray-100 font-medium text-gray-500'>
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
          />
        </div>
      </div>

      <pre className='mt-8'>{JSON.stringify({
        currentDate,
        startOfMonth: startOfMonth(currentDate),
        startOfWeek: startOfWeek(startOfMonth(currentDate)),
        endOfMonth: endOfMonth(currentDate),
        endOfWeek: endOfWeek(endOfMonth(currentDate))

      }, null, 2)}</pre>

    </div>
  )
}

export default App
