import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-100 min-h-screen p-6'>
        {/* card begin */}
        <div className="flex flex-col justify-between bg-white p-6 min-h-60 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h2 className='text-black text-lg font-semibold'>Product</h2>
            <span className='text-green-500'>Active</span>
          </div>

          <p className="text-gray-800">Product description goes here.</p>

          <div className="flex justify-end gap-2">
            <button className="rounded bg-gray-200 px-4 py-2 text-black">Cancel</button>
            <button className="rounded bg-blue-500 px-4 py-2 text-white">
              Buy
            </button>
          </div>
        </div>
        {/* card end */}
      </div>
    </>
  )
}

export default App
