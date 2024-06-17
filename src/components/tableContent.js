
import React from 'react'

function TableContent({name, status, date, amount}) {

  let statusClass = '';

  if (status === 'Pending') {
    statusClass = 'bg-yellow-200'; 
  } else if (status === 'Done') {
    statusClass = 'bg-green-200'; 
  } else if (status === 'Cancel') {
    statusClass = 'bg-red-200'; 
  }else{
    statusClass = '';
  }

  return (
    <>
        <tr>
           
           <td className='flex items-center gap-3 mt-3'>
             <img src="./images/girl.png" alt='img' className='h-9 rounded-full border border-green-950'/>
            <div>{name}</div> </td>
            
             <td>{status}</td>
             <td>{date}</td>
             <td><span>{amount}</span></td>
             
         </tr>
    </>
  )
}

export default TableContent