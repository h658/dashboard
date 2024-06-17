import React from "react";
import Comment from "../comment";
import RevenueBar from "../bar";



function Rightbar() {
  return (
    <>
  
    <RevenueBar/>
  
      <div className="bg-green-200 ">
        <div className="bg-green-500 text-white p-2 w-full ">
          <p>Customer Review</p>
        </div>
< div className="max-h-[80vh] overflow-y-auto">
<Comment/>
<Comment/>
<Comment/>
<Comment/>
<Comment/>
</div>


      </div>
    </>
  );
}

export default Rightbar;
