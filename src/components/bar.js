"use client"
import React from 'react'
import { BarChart,Bar,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 


const data = [
    {
      name: 'Sun',
  
      Revenue: 2400,

    },
    {
      name: 'Mon',
    
      Revenue: 1398,

    },
    {
      name: 'Tue',
     
      Revenue: 9800,

    },
    {
      name: 'Wed',
    
      Revenue: 3908,

    },
    {
      name: 'Thu',
    
      Revenue: 4800,

    },
    {
      name: 'Fri',
      
      Revenue: 3800,

    },
    {
      name: 'Sat',
    
      Revenue: 4300,

    },
  ];

function RevenueBar() {
  return (
    <>
    <h2 className='font-medium text-xl mb-5 ml-2'>Sales Revenue</h2>
    <div className='h-[29%] -ml-5'>
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="Revenue" fill="#21c659" background={{ fill: '#eee' }} />
    </BarChart>
  </ResponsiveContainer>
  </div>
  </>
  )
}

export default RevenueBar