"use client";
import React, { FC } from 'react';
import Link from 'next/link';

interface TaskProps {
    taskId: number;
    taskName: string;
    isSelected: boolean;
    onSelect: (taskId: number) => void;
}



const Task: FC<TaskProps> = ({ taskId, taskName, isSelected, onSelect }) => {
    
    const baseClasses = 
        "flex gap-2 p-4 m-4 rounded-[50px] w-150 mx-auto justify-between items-center transition-colors duration-300 shadow-md cursor-pointer";

    const selectedClasses = isSelected 
        ? "bg-green-100 border-2 border-green-500 shadow-lg" 
        : "bg-[#D9D9D9] hover:bg-gray-200 border-2 border-transparent";

    return (
        
        <div 
            className={`${baseClasses} ${selectedClasses}`}
            onClick={() => onSelect(taskId)}
        >
            <div>
               
                <input 
                    className="cursor-pointer size-[20px]" 
                    type="radio"
                    readOnly // Prevents user interaction from changing the radio state directly
                    checked={isSelected} // Controls the visual state of the radio button
                />
            </div>
            {/* Conditional text color/style for selected state */}
            <span className={isSelected ? "text-green-700 font-semibold" : "text-gray-800"}>
                {taskName}
            </span>
            <Link href="/add_task" className="text-green-500 m-1 cursor-pointer">Edit</Link>
        </div>
    );
};

export default Task;