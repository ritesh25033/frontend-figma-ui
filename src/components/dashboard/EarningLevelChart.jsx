
'use client'

import React, { useState } from 'react'
import TimeFilter from '../ui/TimeFilter'
import BarChart from '../ui/BarChart'

const EarningLevelChart = ({ 
  title = "Earning Level",
  currentEarning = "3,890",
  chartData,
  onFilterChange
}) => {
  const [selectedFilter, setSelectedFilter] = useState('Weekly')

  // Different data sets for different filters
  const getDataByFilter = (filter) => {
    const datasets = {
      'Weekly': [
        { day: 'M', value: 2800 },
        { day: 'T', value: 3200 },
        { day: 'W', value: 2900 },
        { day: 'T', value: 2100 },
        { day: 'F', value: 3100 },
        { day: 'S', value: 3000 },
        { day: 'S', value: 2800 }
      ],
      'Monthly': [
        { day: 'W1', value: 15000 },
        { day: 'W2', value: 18000 },
        { day: 'W3', value: 16500 },
        { day: 'W4', value: 21000 }
      ],
      'Yearly': [
        { day: 'Q1', value: 45000 },
        { day: 'Q2', value: 52000 },
        { day: 'Q3', value: 48000 },
        { day: 'Q4', value: 58000 }
      ]
    }
    return datasets[filter] || datasets['Weekly']
  }

  // Update current earning based on filter
  const getCurrentEarning = (filter) => {
    const earnings = {
      'Weekly': '3,890',
      'Monthly': '15,600',
      'Yearly': '203,000'
    }
    return earnings[filter] || '3,890'
  }

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter)
    if (onFilterChange) {
      onFilterChange(filter)
    }
  }

  const data = chartData || getDataByFilter(selectedFilter)
  const displayEarning = getCurrentEarning(selectedFilter)

  return (
    <div 
      className="w-full rounded-lg p-6 relative"
      style={{
        background: '#21222D',
        border: '1px solid #A9DFD8',
        minHeight: '301px'
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <TimeFilter 
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
      </div>

      <div className="mb-6">
        <div className="text-gray-400 text-sm mb-1">Earning</div>
        <div className="text-2xl font-bold text-white">₹ {displayEarning}</div>
      </div>

      <div className="h-[140px]">
        <BarChart data={data} filter={selectedFilter} />
      </div>
    </div>
  )
}

export default EarningLevelChart
