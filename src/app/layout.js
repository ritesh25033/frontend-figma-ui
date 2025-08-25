// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Earnings Dashboard',
  description: 'Track your earnings and insights',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950">
        {children}
      </body>
    </html>
  )
}
