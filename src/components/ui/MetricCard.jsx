
'use client'

import React from 'react'

const MetricCard = ({ icon, value, label, changeText, isPositive }) => {
  return (
    <div 
      className="w-full h-full bg-[#1C1D26] rounded-lg p-4 hover:bg-[#1F2029] transition-all duration-200 flex flex-col justify-between"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center justify-center w-8 h-8">
          {icon}
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div className="text-xl font-bold text-white">₹ {value}</div>
        <div className="text-gray-400 text-xs leading-tight">{label}</div>
        <div className={`text-xs ${isPositive ? 'text-[#A9DFD8]' : 'text-red-400'}`}>
          {changeText}
        </div>
      </div>
    </div>
  )
}

export default MetricCard
