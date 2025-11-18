"use client";
import React, { useState, FC } from 'react';
import Task from '../task/page';


interface TaskItem {
    id: number;
    name: string;
}
interface TodayProps {
    date: Date; 
}


const initialTasks: TaskItem[] = [
    { id: 1, name: 'Finish project report' },
    { id: 2, name: 'Call client X' },
    { id: 3, name: 'Review' },
    { id: 4, name: 'Vihanga manasara' },
     { id: 5, name: 'pasindu' },

];


const Day: FC<TodayProps> = ({ date }) => {
  
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

   
    const handleTaskSelect = (taskId: number): void => {
        setSelectedTaskId(currentId => (currentId === taskId ? null : taskId));
    };
    
    /*const date = new Date();*/
    const currentDay = date.getDate();
    const currentMonth = date.toLocaleString('default', { month: 'long' });
    const currentYear = date.getFullYear();


    return (
        
        <div className="bg-[#D9D9D9] flex flex-col gap-2 py-2 px-4 m-10 rounded-[20px] w-175 mx-auto  items-end">
            
             <div className="flex flex-row justify-between w-full item-end">
                <div className="flex flex-row gap-8 items-end">
                    <h1 className="text-[42px] text-black">{currentDay}</h1>
                    <h2 className="text-[36px] text-black">{currentMonth}</h2>
                </div>
                <h2 className="text-[48px] text-black">{currentYear}</h2>
            </div>
            <div className="w-full border-b border-black my-2"></div>

            <div className="p-4 m-4 w-full">
                {initialTasks.map((task) => (
                    <Task
                        key={task.id}
                        taskId={task.id}
                        taskName={task.name}
                        isSelected={selectedTaskId === task.id}
                        onSelect={handleTaskSelect}
                    />
                ))}
            </div>
        </div>
    );
}

export default Day;