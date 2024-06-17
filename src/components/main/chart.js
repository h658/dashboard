"use client"
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Sun',
   Click: 4000,
    Visit: 2400,
    amt: 2400,
  },
  {
    name: 'Mon',
   Click: 3000,
    Visit: 1398,
    amt: 2210,
  },
  {
    name: 'Tue',
   Click: 2000,
    Visit: 9800,
    amt: 2290,
  },
  {
    name: 'Wed',
   Click: 2780,
    Visit: 3908,
    amt: 2000,
  },
  {
    name: 'Thu',
   Click: 1890,
    Visit: 4800,
    amt: 2181,
  },
  {
    name: 'Fri',
   Click: 2390,
    Visit: 3800,
    amt: 2500,
  },
  {
    name: 'Sat',
   Click: 3490,
    Visit: 4300,
    amt: 2100,
  },
];
function Chart() {
  return (
    <div className='h-3/6 bg-white'>
      <h2 className='text-xl font-semibold m-3'>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Visit" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Click" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
   
    </div>
  )
}

export default Chart