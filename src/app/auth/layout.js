import Link from "next/link";
const navLinks = {
    {name: "Dashboard", href:"/dashboard"},
    {name: "Products", href:"/products"},

};

import React from 'react'

function Authlayout() {
  return (
    <div>
        {navLinks.map ((link)=>{
            return( <Link href={link.href} key={link.name}>
                {linkClasses.name}
                </Link>)
        })}
   
    </div>
  )
}

export default Authlayout