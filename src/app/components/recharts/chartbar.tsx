// src/components/charts/ChartBar.tsx
"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", views: 400 },
  { name: "Tue", views: 800 },
  { name: "Wed", views: 600 },
  { name: "Thu", views: 1200 },
  { name: "Fri", views: 500 },
  { name: "Sat", views: 300 },
  { name: "Sun", views: 700 },
]

export default function ChartBar() {
  return (
    <div className="h-60 w-full">
      <ResponsiveContainer width="80%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="views" fill="#4ADE80" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
