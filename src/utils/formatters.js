// src/utils/formatters.js
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(amount)
}

export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export const calculatePercentageChange = (current, previous) => {
  const change = ((current - previous) / previous) * 100
  return {
    percentage: Math.abs(change).toFixed(1),
    isPositive: change >= 0,
    text: `${change >= 0 ? '+' : '-'}${Math.abs(change).toFixed(1)}% from yesterday`
  }
}
