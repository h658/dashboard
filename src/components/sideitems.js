



const SideItem = ({ icons, label, open, }) => {
 

  return (
  
    <li className="mb-3 p-2 pl-4 hover:bg-white hover:text-green-800 text-white text-lg hover:border-l-8 hover:border-green-700">
      <a href="#" className="flex items-center">
        {icons} 
      
        <span className={`ml-3 ${!open && "hidden"} `}>{label}</span>
     
      </a>
    </li>
   
  )
};
export default SideItem;
