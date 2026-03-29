import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
const Headder = () => {
    return (
        <div className=' flex justify-center flex-col items-center gap-3'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),"EEEE, MMMM d, yyyy")}</p>

            {/* <p>25 March 2026, 12:10 AM</p>
              <p>{format(new Date(),"dd-MM-yyyy")}</p>
            <p>{format(new Date(),"d MMMM yyy, h:m a")}</p>
            <h1>{formatDistanceToNow(new Date("2026-03-31"),{addSuffix:true})}</h1> */}

          
        </div>
    );
};

export default Headder;