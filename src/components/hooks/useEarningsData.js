'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import AllTimeSVG from '../../assets/icons/Group.svg'
import PaidSVG from '../../assets/icons/Group (1).svg'
import MonthlySVG from '../../assets/icons/Icon (1).svg'
import WeeklySVG from '../../assets/icons/Vector (4).svg'

export const useEarningsData = () => {
  const [insightsData, setInsightsData] = useState(null)
  const [chartData, setChartData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const insights = [
          {
            icon: <Image src={PaidSVG} alt="All Time" width={24} height={24} />,
            value: "51,060",
            label: "All Time",
            changeText: "+10% from yesterday",
            isPositive: true
          },
          {
            icon: <Image src={MonthlySVG} alt="All Time" width={24} height={24} />,
            value: "21,340",
            label: "All time paid",
            changeText: "+8% from yesterday",
            isPositive: true
          },
          {
            icon: <Image src={WeeklySVG} alt="All Time" width={24} height={24} />,
            value: "10,162",
            label: "In last 30 Days",
            changeText: "+2% from yesterday",
            isPositive: true
          },
          {
            icon: <Image src={AllTimeSVG} alt="All Time" width={24} height={24} />,
            value: "3,890",
            label: "In last 7 Days",
            changeText: "+3% from yesterday",
            isPositive: true
          }
        ]

        const chart = [
          { day: 'M', value: 2800 },
          { day: 'T', value: 3200 },
          { day: 'W', value: 2900 },
          { day: 'T', value: 2100 },
          { day: 'F', value: 3100 },
          { day: 'S', value: 3000 },
          { day: 'S', value: 2800 }
        ]

        setInsightsData(insights)
        setChartData(chart)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { insightsData, chartData, loading, error }
}
