import React from 'react'

function App () {
  return (
    <div className='w-4/5 flex flex-col justify-center items-center'>
      <div className='flex border rounded shadow'>
        <div className='border-r w-104'>
          <div className='flex items-center h-10 border-b px-3'>
            <div className='text-medium text-gray-600 font-medium'>
              Last 30 days
            </div>
            <div className='ml-3 text-gray-500 text-sm font-semibold'>
              Oct 15 - Nov 13
            </div>
          </div>

          <div className='flex items-center h-10 border-b px-3'>
            <div className='text-medium text-gray-600 font-medium'>
              This month
            </div>
            <div className='ml-3 text-gray-500 text-sm font-semibold'>
              Nov 1 - Nov 13
            </div>
          </div>

          <div className='flex items-center h-10 border-b px-3'>
            <div className='text-medium text-gray-600 font-medium'>
              Last Month
            </div>
            <div className='ml-3 text-gray-500 text-sm font-semibold'>
              Oct 1 - Oct 31
            </div>
          </div>

          <div className='flex items-center h-10 border-b px-3'>
            <div className='text-medium text-gray-600 font-medium'>
              Last 3 months
            </div>
            <div className='ml-3 text-gray-500 text-sm font-semibold'>
              Aug 1 - Oct 31
            </div>
          </div>

          <div className='flex items-center h-10 border-b px-3'>
            <div className='text-medium text-gray-600 font-medium'>
              Last 6 months
            </div>

            <div className='ml-3 text-gray-500 text-sm font-semibold'>
              May 1 - Oct 31
            </div>
          </div>

          <div className='flex items-center h-10 border-b px-3'>
            <div className='text-medium text-gray-600 font-medium'>
              This year
            </div>

            <div className='ml-3 text-gray-500 text-sm font-semibold'>
              Jan 1 - Nov 13
            </div>
          </div>

          <div className='flex items-center h-10 border-b px-3'>
            <div className='text-medium text-gray-600 font-medium'>
              Last year
            </div>

            <div className='ml-3 text-gray-500 text-sm font-semibold'>
              Jan 1, '19 - Dec 31, '19
            </div>
          </div>

          <div className='flex items-center h-10 px-3'>
            <div className='text-medium text-gray-600 font-medium'>
              All time
            </div>

            <div className='ml-3 text-gray-500 text-sm font-semibold'>
              Jun 13, '17 - Nov 13, '20
            </div>
          </div>
        </div>

        <div className='w-88'>
          <div className='w-full h-10 flex border-b'>
            <div className='w-3/5 border-r flex items-center px-3'>
              <div className='flex space-around items-center w-full'>
                <div className='flex'>
                  <svg className='w-6 h-6 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7' /></svg>
                </div>

                <div className='flex-1 flex justify-center'>
                  <span className='font-medium'>
                    October
                  </span>
                </div>

                <div className='flex'>
                  <svg className='w-6 h-6 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7' /></svg>
                </div>
              </div>
            </div>

            <div className='w-2/5 flex justify-center items-center px-3'>
              <div className='flex space-around items-center w-full'>
                <div className='flex'>
                  <svg className='w-6 h-6 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7' /></svg>
                </div>

                <div className='flex-1 flex justify-start ml-4'>
                  <span className='font-medium'>
                    2020
                  </span>
                </div>
              </div>
            </div>
          </div>

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

          <div className='px-1 pb-1 text-sm font-medium'>
            <div className='w-full h-10 grid grid-cols-7 gap-1'>
              <div className='flex-1 flex justify-center items-center text-gray-500 rounded hover:bg-gray-200 hover:text-indigo-500'>27</div>
              <div className='flex-1 flex justify-center items-center text-gray-500 rounded hover:bg-gray-200 hover:text-indigo-500'>28</div>
              <div className='flex-1 flex justify-center items-center text-gray-500 rounded hover:bg-gray-200 hover:text-indigo-500'>29</div>
              <div className='flex-1 flex justify-center items-center text-gray-500 rounded hover:bg-gray-200 hover:text-indigo-500'>30</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>1</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>2</div>
              <div className='flex-1 flex justify-center items-center rounded  hover:bg-gray-200 hover:text-indigo-500'>3</div>
            </div>

            <div className='w-full h-10 grid grid-cols-7 gap-1 '>
              <div className='flex-1 flex justify-center items-center rounded  hover:bg-gray-200 hover:text-indigo-500'>4</div>
              <div className='flex-1 flex justify-center items-center rounded  hover:bg-gray-200 hover:text-indigo-500'>5</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>6</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>7</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>8</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>9</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>10</div>
            </div>

            <div className='w-full h-10 grid grid-cols-7 gap-1 '>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>11</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>12</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>13</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>14</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>15</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>16</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>17</div>
            </div>

            <div className='w-full h-10 grid grid-cols-7 gap-1 '>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>18</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>19</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>20</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>21</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>22</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>23</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>24</div>
            </div>

            <div className='w-full h-10 grid grid-cols-7 gap-1 '>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>25</div>
              <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500'>26</div>
              <div className='flex-1 flex justify-center items-center rounded-l-lg bg-indigo-500 text-white'>27</div>
              <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600'>28</div>
              <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600'>29</div>
              <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600'>30</div>
              <div className='flex-1 flex justify-center items-center rounded-r-lg bg-indigo-500 text-white'>31</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
