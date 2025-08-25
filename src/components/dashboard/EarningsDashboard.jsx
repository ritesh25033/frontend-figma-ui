
'use client'

import React from 'react'
import EarningsInsights from './EarningsInsights'
import EarningLevelChart from './EarningLevelChart'
import { useEarningsData } from '../hooks/useEarningsData'

const EarningsDashboard = () => {
  const { insightsData, chartData, loading, error } = useEarningsData()

  const handleTimeFilterChange = (filter) => {
    console.log('Time filter changed to:', filter)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#171821] flex items-center justify-center">
        <div className="text-white text-lg">Loading dashboard...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#171821] flex items-center justify-center">
        <div className="text-red-400 text-lg">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#171821] p-6">
      {/* Main Container with Exact Figma Dimensions */}
      <div 
        className="mx-auto flex gap-6"
        style={{
          width: '1133.15px',
          height: '301.32px',
          marginTop: '181px',
          marginLeft: '262.48px'
        }}
      >
        {/* Earnings Insights - Left Side */}
        <div style={{ width: '755.21px', height: '301.19px' }}>
          <EarningsInsights metricsData={insightsData} />
        </div>
        
        {/* Earning Level Chart - Right Side */}
        <div style={{ width: '356.63px', height: '301.19px' }}>
          <EarningLevelChart 
            chartData={chartData}
            currentEarning="3,890"
            onFilterChange={handleTimeFilterChange}
          />
        </div>
      </div>
    </div>
  )
}

export default EarningsDashboard
