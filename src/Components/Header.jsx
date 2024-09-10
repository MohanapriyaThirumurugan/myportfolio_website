import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';


function Header(){
    const [toggle,settoggle]=useState(false)

    const menuveiw=()=>{
        settoggle(!toggle)
    }

    return(
       <>
    
        <div className='bg-slate-500  h-20  w-screen flex  justify-end  items-center '>
        <div className='p-6 m-8'>
            <DensityMediumIcon onClick={menuveiw} />
            </div>
            </div>
{toggle&&(
      <div className='absolute top-20 left-0 bg-slate-500 p-4 w-64 flex flex-col items-start'>
      <div className='p-8 m-10'>
          <Link href='#'>Abotus</Link>
      </div>
      <div className='p-6 m-8'>
          <Link href='#' >Projects</Link>
      </div>
      <div className='p-6 m-8'>
          <Link href='#' >ContactUs</Link>
      </div>
      <div className='p-6 m-8'>
          <Link href='#' >Skills</Link>
      </div>
     
      </div>

)}
          

           
    
      </>
    )

}
export default Header