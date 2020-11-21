import React from 'react'
import DateRangePicker from './components/DateRangePicker'

function App () {
  return (
    <div className='flex flex-col justify-center items-end'>
      <DateRangePicker />

      {/*
        <pre className='mt-8'>{JSON.stringify({
          currentDate,
          firstAnchorDate,
          secondAnchorDate
        }, null, 2)}</pre>
      */}

    </div>
  )
}

export default App
