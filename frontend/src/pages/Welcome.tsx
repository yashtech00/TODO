import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="border-b-1 border-slate-200">
        <div className="flex justify-between">
          <div className="p-4">
            <img
              src="https://images.squarespace-cdn.com/content/v1/572b90fa8a65e243d508a96d/1467917398510-XOS3LUIP0YTR1MDWLH7A/todo+logo.jpg"
              className="w-[120px] h-[70px] overflow-auto"
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between '>
        <div  className='flex  items-center pl-20 w-[900px] h-[700px]'>
        <div className='flex flex-col '>
          <p className='font-semibold text-3xl'>"welcome the tasks that take you beyound yourself"</p>
          <div className='mt-4'><Link to={"/signup"}><button className='bg-black text-white p-4 rounded-3xl '>Get Started</button></Link></div>
        </div>
        </div>
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/todo-list-illustration-download-in-svg-png-gif-file-formats--checklist-checkmark-survey-pack-people-illustrations-5059486.png?f=webp' className='w-[650px]'/>
        </div>
    </div>
  );
};

export default Welcome;
