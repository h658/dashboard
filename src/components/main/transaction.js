
import React from 'react'
import TableContent from '../tableContent'


function Transaction() {
  return (
   <>
   <div className='container p-6  bg-white rounded-sm '>
    <h2 className='font-semibold text-xl'>Latest Transactions</h2>
    <table className='w-[100%]'>
      <thead>
        <tr className='font-medium '>
          <td>Name</td>
          <td>Status</td>
          <td>Date</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody >
<TableContent name = {"Kuzan Kumar"} status={"Pending"} date={"28.02.2024"} amount={"$420"}/>
<TableContent name = {"Sizune Shah"} status={"Done"} date={"20.02.2024"} amount={"$220"}/>
<TableContent name = {"Daichi Dangol"} status={"Cancel"} date={"19.02.2024"} amount={"$520"}/>
<TableContent name = {"Rizan Rai"} status={"Done"} date={"16.02.2024"} amount={"$320"}/>



      </tbody>
    </table>
   </div>
   </>
  )
}

export default Transaction