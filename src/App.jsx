import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex justify-center gap-8 mb-7">
          <a href="https://vite.org" target="_blank" rel="noopener noreferrer">
           <img className='h-24 w-24' src="/vite.svg" alt="Vite Logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
           <img className='h-24 w-24 animate-spin' src="../src/assets/react.svg" alt="React Logo" style={{ animationDuration: '10s' }} />
          </a>
        </div>
         <h1 className="text-6xl font-bold text-center text-white mt-5">Vite + React</h1>
        <div className="flex flex-col items-center">
         <h3 className="text-lg font-medium text-center text-black mt-15 mb-0.5">Faishal Rasyid Rusianto</h3>
         <button className="bg-black text-lg text-white py-2 px-5 rounded-lg" onClick={() => setCount(count + 1)}>count is {count}</button>
        </div>
        <div className="flex flex-col items-center mt-7 gap-9">
          <h3 className="text-lg text-neutral-3 00">Edit src/App and save to tes HMR</h3>
          <h3 className="text-lg text-neutral-500">Click on the Vite And React logos to learn more</h3>
        </div>
      </div>
    </>
  )
}

export default App
