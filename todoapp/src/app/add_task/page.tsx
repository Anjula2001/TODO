import React from 'react'
import "tailwindcss"
import Link from 'next/link';

const AddTask = () => {
  return (
    <div className="bg-[#D9D9D9] flex flex-col gap-2 p-6 m-10 rounded-[50px] w-250 mx-auto">
        <textarea name="task" id="task" className="w-full p-2 size-auto placeholder-gray-500 focus:outline-none text-black text-[32px]" placeholder="Write Your Task Here..."></textarea>
        <div className="">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-150">Date</button>
          
        </div>
        <div className=" border-b border-black m-2"></div>
        <div className="flex flex-column gap-4 sm:flex-row sm:justify-end">
            <Link href="/today"><button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-150">Cancel</button></Link>
            <Link href="/today"><button className="pd-2 px-4 py-2 text-sm font-medium text-white bg-[#34A353] rounded-md hover:bg-blue-700 transition duration-150">Add Task</button></Link>
        </div>
    </div>
  )
}

export default AddTask