import React from 'react'
import Day from "../day/page"



const NUM_DAYS_TO_DISPLAY = 20;
const MILLISECONDS_IN_DAY = 86400000;

 const Page: React.FC = () => {


    const today: Date = new Date();
    const dates = Array.from({ length: NUM_DAYS_TO_DISPLAY }, (_, index) => {
        
        const timeOffset: number = index * MILLISECONDS_IN_DAY;
    
        return new Date(today.getTime() + timeOffset);
    });


  return (
    <div>

       {dates.map((date: Date, index: number) => (
                <Day 
                    key={index}
                    date={date}
                />
            ))}
    </div>
  )
}

export default Page