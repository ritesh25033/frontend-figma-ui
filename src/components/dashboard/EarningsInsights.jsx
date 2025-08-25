
'use client'

import React from 'react'
import MetricCard from '../ui/MetricCard'

const EarningsInsights = ({ 
  title = "Earnings Insights", 
  subtitle = "Performance Summary", 
  metricsData 
}) => {
  const defaultMetrics = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#FFA726" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "51,060",
      label: "All Time",
      changeText: "+10% from yesterday",
      isPositive: true
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="#4CAF50" fill="#4CAF50"/>
        </svg>
      ),
      value: "21,340",
      label: "All time paid",
      changeText: "+8% from yesterday",
      isPositive: true
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7Z" stroke="#E91E63" strokeWidth="2"/>
          <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="#E91E63" strokeWidth="2"/>
        </svg>
      ),
      value: "10,162",
      label: "In last 30 Days",
      changeText: "+2% from yesterday",
      isPositive: true
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 21V3C16 2.44772 15.5523 2 15 2H9C8.44772 2 8 2.44772 8 3V21" stroke="#2196F3" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="8" r="3" stroke="#2196F3" strokeWidth="2"/>
        </svg>
      ),
      value: "3,890",
      label: "In last 7 Days",
      changeText: "+3% from yesterday",
      isPositive: true
    }
  ]

  const metrics = metricsData || defaultMetrics

  return (
    <div 
      className="w-full rounded-lg p-6 relative"
      style={{
        background: '#21222D',
        border: '1px solid #A9DFD8',
        minHeight: '301px'
      }}
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white mb-1">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            icon={metric.icon}
            value={metric.value}
            label={metric.label}
            changeText={metric.changeText}
            isPositive={metric.isPositive}
          />
        ))}
      </div>
    </div>
  )
}

export default EarningsInsights
