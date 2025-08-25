// // src/components/ui/TimeFilter.jsx
// 'use client'

// import React, { useState } from 'react'

// const TimeFilter = ({ selectedFilter, onFilterChange, options = ['Weekly', 'Monthly', 'Yearly'] }) => {
//   const [isOpen, setIsOpen] = useState(false)

//   const handleFilterSelect = (filter) => {
//     onFilterChange(filter)
//     setIsOpen(false)
//   }

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center space-x-2 bg-[#1C1D26] text-white px-4 py-2 rounded-md text-sm border border-[#2A2B35] hover:border-[#A9DFD8] transition-colors min-w-[100px] justify-between"
//       >
//         <span>{selectedFilter}</span>
//         <svg 
//           className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
//           fill="none" 
//           stroke="currentColor" 
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {isOpen && (
//         <>
//           <div 
//             className="fixed inset-0 z-10" 
//             onClick={() => setIsOpen(false)}
//           />
//           <div className="absolute top-full right-0 mt-2 bg-[#1C1D26] border border-[#2A2B35] rounded-md shadow-xl z-20 min-w-[120px] overflow-hidden">
//             {options.map((option) => (
//               <button
//                 key={option}
//                 onClick={() => handleFilterSelect(option)}
//                 className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
//                   option === selectedFilter 
//                     ? 'bg-[#A9DFD8] text-[#171821]' 
//                     : 'text-white hover:bg-[#2A2B35] hover:text-[#A9DFD8]'
//                 }`}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default TimeFilter


// src/components/ui/TimeFilter.jsx
'use client'

import React, { useState } from 'react'

const TimeFilter = ({ selectedFilter, onFilterChange, options = ['Weekly', 'Monthly', 'Yearly'] }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleFilterSelect = (filter) => {
    onFilterChange(filter)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-[#1C1D26] text-white px-4 py-2 rounded-md text-sm border border-[#2A2B35] hover:border-[#A9DFD8] transition-colors min-w-[100px] justify-between"
      >
        <span>{selectedFilter}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-[#1C1D26] border border-[#2A2B35] rounded-md shadow-xl z-20 min-w-[120px] overflow-hidden">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleFilterSelect(option)}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                  option === selectedFilter 
                    ? 'bg-[#A9DFD8] text-[#171821] font-medium' 
                    : 'text-white hover:bg-[#2A2B35] hover:text-[#A9DFD8]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default TimeFilter
