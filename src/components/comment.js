import React from 'react'
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Rate from './rate';

function Comment({open}) {
  return (
    <>
    {/* <div className={`ml-3 ${!open && "hidden"} `}> */}
    <div >
    <div className="flex p-3">
    <Avatar className="w-12 h-12" >
            {" "}
            <AvatarImage src="./images/girl.png" />
          </Avatar>
        <div className="ml-2  mr-2">
      <p className="text-lg font-medium text-gray-800 ">Kuzan Kumar</p>
      <p className="text-gray-600 -mt-2">2 days ago</p>
      </div>

     <Rate/>
    </div>
    <p className="px-4 leading-tight text-sm mb-2">Whether its prompt responses to inquiries, seamless transactions, or personalized attention to detail, they consistently go the extra mile to ensure a smooth and delightful experience. </p>
    <div class="border border-green-600 border-dashed">
  </div>
    </div>

    </>
  )
}

export default Comment
