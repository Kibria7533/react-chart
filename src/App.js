import React from 'react'

import BarChart from './components/BarChart'
import Pie from './components/Pie'
import Line from './components/Line'
import './App.css'

const App = () => {
  return (
    <div>
      <BarChart />
      <Line/>
      <Pie/>
    </div>
  )
}

export default App
