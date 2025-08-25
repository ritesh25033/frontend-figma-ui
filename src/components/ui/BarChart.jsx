
'use client'

import React, { useState } from 'react'

const BarChart = ({ data, maxValue, filter = 'Weekly' }) => {
  const [hoveredBar, setHoveredBar] = useState(null)
  const chartMaxValue = maxValue || Math.max(...data.map(d => d.value))

  const formatValue = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(value)
  }

  const getTooltipText = (item, filter) => {
    const dayNames = {
      'M': 'Monday',
      'T': 'Tuesday', 
      'W': 'Wednesday',
      'T': 'Thursday',
      'F': 'Friday',
      'S': 'Saturday',
      'S': 'Sunday'
    }
    
    if (filter === 'Weekly') {
      return `${dayNames[item.day] || item.day}: ${formatValue(item.value)}`
    } else if (filter === 'Monthly') {
      return `Week ${item.day}: ${formatValue(item.value)}`
    } else {
      return `${item.day}: ${formatValue(item.value)}`
    }
  }

  return (
    <div className="relative flex items-end justify-between h-full px-2">
      {data.map((item, index) => {
        const height = (item.value / chartMaxValue) * 80
        const isHovered = hoveredBar === index
        
        return (
          <div 
            key={index} 
            className="flex flex-col items-center justify-end h-full space-y-2 relative"
            onMouseEnter={() => setHoveredBar(index)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            {/* Tooltip */}
            {isHovered && (
              <div className="absolute bottom-full mb-2 bg-[#1C1D26] text-white text-xs px-3 py-2 rounded-md shadow-lg border border-[#2A2B35] whitespace-nowrap z-10">
                {getTooltipText(item, filter)}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1C1D26]"></div>
              </div>
            )}
            
            {/* Bar */}
            <div 
              className={`transition-all duration-300 cursor-pointer rounded-t-[6px] ${
                isHovered ? 'shadow-lg' : ''
              }`}
              style={{ 
                height: `${height}%`,
                width: '20px',
                minHeight: height > 0 ? '12px' : '4px',
                background: isHovered 
                  ? 'linear-gradient(180deg, #A9DFD8 0%, #7DD3C0 100%)' 
                  : '#A9DFD8',
                boxShadow: isHovered 
                  ? '0 0 15px rgba(169, 223, 216, 0.6)' 
                  : '0 0 10px rgba(169, 223, 216, 0.3)',
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
              }}
            />
            
            {/* Day Label */}
            <span className={`text-xs font-medium pb-2 transition-colors ${
              isHovered ? 'text-[#A9DFD8]' : 'text-gray-400'
            }`}>
              {item.day}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default BarChart
