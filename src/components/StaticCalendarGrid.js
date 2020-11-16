import React from 'react'

function StaticCalendarGrid (props) {
  return (
    <div className='px-1 pb-1 text-sm font-medium'>
      <div className='w-full h-10 grid grid-cols-7 gap-1 box-content border-b border-transparent'>
        <div className='flex-1 flex justify-center items-center text-gray-500 rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>27</div>
        <div className='flex-1 flex justify-center items-center text-gray-500 rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>28</div>
        <div className='flex-1 flex justify-center items-center text-gray-500 rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>29</div>
        <div className='flex-1 flex justify-center items-center text-gray-500 rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>30</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>1</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>2</div>
        <div className='flex-1 flex justify-center items-center rounded  hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>3</div>
      </div>

      <div className='w-full h-10 grid grid-cols-7 gap-1 box-content border-b border-transparent'>
        <div className='flex-1 flex justify-center items-center rounded  hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>4</div>
        <div className='flex-1 flex justify-center items-center rounded  hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>5</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>6</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>7</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>8</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>9</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>10</div>
      </div>

      <div className='w-full h-10 grid grid-cols-7 gap-1 box-content border-b border-transparent'>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>11</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>12</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>13</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>14</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>15</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>16</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>17</div>
      </div>

      <div className='w-full h-10 grid grid-cols-7 gap-1 box-content border-b border-transparent'>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>18</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>19</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>20</div>
        <div className='flex-1 flex justify-center items-center rounded hover:bg-gray-200 hover:text-indigo-500 box-border border border-transparent bg-clip-content'>21</div>
        <div className='flex-1 flex justify-center items-center rounded-l-lg bg-indigo-500 text-white box-border border border-transparent bg-clip-content'>22</div>
        <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600 box-border border border-transparent bg-clip-content'>23</div>
        <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600 box-border border border-transparent bg-clip-content'>24</div>
      </div>

      <div className='w-full h-10 grid grid-cols-7 gap-1 box-content border-b border-transparent'>
        <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600 box-border border border-transparent bg-clip-content'>25</div>
        <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600 box-border border border-transparent bg-clip-content'>26</div>
        <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600 box-border border border-transparent bg-clip-content'>27</div>
        <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600 box-border border border-transparent bg-clip-content'>28</div>
        <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600 box-border border border-transparent bg-clip-content'>29</div>
        <div className='flex-1 flex justify-center items-center rounded bg-gray-300 text-indigo-600 box-border border border-transparent bg-clip-content'>30</div>
        <div className='flex-1 flex justify-center items-center rounded-r-lg bg-indigo-500 text-white box-border border border-transparent bg-clip-content'>31</div>
      </div>
    </div>
  )
}

export default StaticCalendarGrid
