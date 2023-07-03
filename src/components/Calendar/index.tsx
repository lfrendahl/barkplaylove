import { FC, useEffect, useState } from 'react';
import ReactCalendar from 'react-calendar'

interface indexProps {}

interface DateType {
    justDate: Date | null
    dateTime: Date | null
}

const index: FC<indexProps> = ({}) => {
    const [date, setDate] = useState<DateType>({
        dateChosen: null,
        dateTime: null,
    })





    return (
    <div className='h-screen flex flex-col justify-center items-center'>
        {date.dateChosen ? (
            <div>'You chose a date'</div>
      ) : (
        <ReactCalendar 
            minDate={new Date()}
            className='REACT-CALENDAR p-2' 
            view='month'
            onClickDay={(date) => setDate((prev) => ({...prev, dateChosen: date }))} 
         />
         )}
    </div>
    )
}

export default index