import React from 'react'
import {
  format,
  isSameMonth,
  isFuture,
  isSameDay,
  isWithinInterval
} from 'date-fns'

const buildDayClass = (date, currentDate, startDate, endDate, isFirstSelection, anchorDateCandidate) => {
  const baseClass = 'h-10 flex-1 flex justify-center items-center rounded box-border focus:outline-none border border-transparent font-semibold '
  const disabledDayClass = ' opacity-25 cursor-not-allowed text-gray-600 '
  const sameMonthClass = ' text-gray-700 hover:bg-gray-200 hover:text-indigo-500 '
  const differentMonthClass = ' text-gray-500 hover:bg-gray-200 hover:text-indigo-500 '
  const secondSelectionHover = ' text-white hover:bg-indigo-500 '

  let dayClass = baseClass

  if (isFuture(date)) {
    dayClass = dayClass.concat(disabledDayClass)
    return dayClass
  }

  if (isFirstSelection) {
    let isWithinRange

    if (startDate <= endDate) {
      isWithinRange = isWithinInterval(date, {
        start: startDate,
        end: endDate
      })
    } else {
      isWithinRange = isWithinInterval(date, {
        start: endDate,
        end: startDate
      })
    }

    if (isWithinRange) {
      if (isSameDay(date, startDate)) {
        dayClass = dayClass.concat(' rounded-l-lg bg-indigo-500 text-white ')
      } else if (isSameDay(date, endDate)) {
        dayClass = dayClass.concat(' rounded-r-lg bg-indigo-500 text-white ')
      } else {
        dayClass = dayClass.concat(' bg-gray-200 text-indigo-600 ')
      }
    } else {
      if (isSameMonth(currentDate, date)) {
        dayClass = dayClass.concat(sameMonthClass)
      } else {
        dayClass = dayClass.concat(differentMonthClass)
      }
    }
  } else {
    let isWithinRange

    console.log(anchorDateCandidate)
    if (startDate <= anchorDateCandidate) {
      isWithinRange = isWithinInterval(date, {
        start: startDate,
        end: anchorDateCandidate
      })
    } else {
      isWithinRange = isWithinInterval(date, {
        start: anchorDateCandidate,
        end: startDate
      })
    }

    if (isWithinRange) {
      if (isSameDay(date, startDate) && (startDate <= anchorDateCandidate)) {
        dayClass = dayClass.concat(' rounded-l-lg bg-indigo-500 text-white ')
      } else if (isSameDay(date, startDate) && (startDate > anchorDateCandidate)) {
        dayClass = dayClass.concat(' rounded-r-lg bg-indigo-500 text-white ')
      } else if (isSameDay(date, anchorDateCandidate) && (anchorDateCandidate > startDate)) {
        dayClass = dayClass.concat(' rounded-r-lg bg-indigo-500 text-white ')
      } else if (isSameDay(date, anchorDateCandidate) && (anchorDateCandidate < startDate)) {
        dayClass = dayClass.concat(' rounded-l-lg bg-indigo-500 text-white ')
      } else {
        dayClass = dayClass.concat(' bg-gray-200 text-indigo-600 ')
      }
    } else {
      if (isSameMonth(currentDate, date)) {
        dayClass = dayClass.concat(sameMonthClass)
      } else {
        dayClass = dayClass.concat(differentMonthClass)
      }
    }
  }

  return dayClass
}

function CalendarDay (props) {
  const {
    date,
    currentDate,
    handleStartDateSelection,
    handleEndDateSelection,
    selectedDate,
    startDate,
    endDate,
    isFirstSelection,
    handleHoverEnter,
    handleHoverLeave,
    anchorDateCandidate
  } = props

  const dayClass = buildDayClass(date, currentDate, startDate, endDate, isFirstSelection, anchorDateCandidate)

  const clickHandler = isFirstSelection ? handleStartDateSelection : handleEndDateSelection

  return (
    <button
      onClick={() => clickHandler(date)}
      onMouseEnter={() => handleHoverEnter(date)}
      onMouseLeave={() => handleHoverLeave(date)}
      disabled={isFuture(date) ? 'disabled' : false}
      className={dayClass}
    >
      { format(date, 'd') }
    </button>
  )
}

export default CalendarDay
