import React, { useState } from 'react'
// import StaticCalendarGrid from './components/StaticCalendarGrid'
import CalendarGrid from './components/CalendarGrid'
import CalendarPresets from './components/CalendarPresets'
import DateSelector from './components/DateSelector'
import {
  toDate,
  parse,
  add,
  subDays,
  sub,
  startOfDay,
  endOfMonth,
  startOfMonth,
  endOfWeek,
  startOfWeek,
  isSameMonth
} from 'date-fns'

function App () {
  const [firstAnchorDate, setFirstAnchorDate] = useState(
    subDays(startOfDay(toDate(Date.now())), 7)
  )
  const [secondAnchorDate, setSecondAnchorDate] = useState(startOfDay(toDate(Date.now())))
  const [currentDate, setCurrentDate] = useState(firstAnchorDate)
  const [isFirstSelection, setIsFirstSelection] = useState(true)
  const [inHover, setHover] = useState(false)
  const [anchorDateCandidate, setAnchorDateCandidate] = useState(null)

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

  const setDate = (date) => {
    setCurrentDate(date)
  }

  const onFirstDateSelection = (date) => {
    console.log('new startDate selected')
    console.log(date)

    setFirstAnchorDate(date)
    // if (date > endDate) {
    //   setStartDate(endDate)
    //   setEndDate(date)
    // } else {
    //   setStartDate(date)
    // }

    setIsFirstSelection(false)
    setAnchorDateCandidate(secondAnchorDate)

    if (!isSameMonth(secondAnchorDate, currentDate)) {
      setCurrentDate(secondAnchorDate)
    }
  }

  const onSecondDateSelection = (date) => {
    console.log('new endDate selected')
    if (date < firstAnchorDate) {
      setSecondAnchorDate(firstAnchorDate)
      setFirstAnchorDate(date)
    } else {
      setSecondAnchorDate(date)
    }

    setIsFirstSelection(true)
  }

  const onHoverEnter = (date) => {
    console.log(`entered hover for: ${date}`)
    setAnchorDateCandidate(date)
  }

  const onHoverLeave = (date) => {
    console.log(`exit hover for: ${date}`)
    return true
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
            startDate={firstAnchorDate}
            endDate={secondAnchorDate}
            anchorDateCandidate={anchorDateCandidate}
            handleSetDate={setDate}
            handleStartDateSelection={onFirstDateSelection}
            handleEndDateSelection={onSecondDateSelection}
            isFirstSelection={isFirstSelection}
            handleHoverEnter={onHoverEnter}
            handleHoverLeave={onHoverLeave}
          />
        </div>
      </div>

      <pre className='mt-8'>{JSON.stringify({
        currentDate,
        firstAnchorDate,
        secondAnchorDate
        // startOfMonth: startOfMonth(currentDate),
        // endOfMonth: endOfMonth(currentDate),
        // startOfMonthView: startOfWeek(startOfMonth(currentDate)),
        // endOfMonthView: endOfWeek(endOfMonth(currentDate))

      }, null, 2)}</pre>

    </div>
  )
}

export default App
