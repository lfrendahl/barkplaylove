import { FC, useEffect, useState } from 'react';
import ReactCalendar from 'react-calendar'
//help format the calendar date so the generated time slots can start and end at the appropriate hour
import {add, format} from "date-fns"

interface indexProps {}

interface DateType {
    justDate: Date | null
    dateTime: Date | null
}

const index: FC<indexProps> = ({}) => {
    //Set state of null on opening that can be updated on calendar date click and time slot click
    const [date, setDate] = useState<DateType>({
        justDate: null,
        dateTime: null,
    })

    //Function that will create available time slots after a specific calendar date has been chosen. 
const getSlots = () => {
    if(!date.justDate) return

    const { justDate } = date
    const startingSlot = add(justDate, { hours: 9 })
    const endingSlot = add(justDate, { hours: 19 })
    const interval = 45 //time slot length in minutes

    const slots = []
    for (let i = startingSlot; i <= endingSlot; i = add(i, {minutes: interval})) {
        slots.push(i)
    }

    return slots
}

//Populate the slots variable
const slots = getSlots()

//if there is no date chosen, display the calendar for selection, but once a date is selected display the time slots that are available.
    return (
    <div className='h-screen flex flex-col justify-center items-center'>
        {date.justDate ? (
            <div className='flex gap-4'>
                {slots?.map((time, id) => (
                    <div className='rounded-sm bg-green-600 p2' key={`slot-${id}`}>
                        <button type='button' 
                                onClick={() => setDate((prev) => ({...prev, dateTime: time }))}>
                            {format(time, 'kk:mm')}
                        </button>
                    </div>
                   ))}
            </div>
        )
       : (
        <ReactCalendar 
            minDate={new Date()}
            className='REACT-CALENDAR p-2' 
            view='month'
            onClickDay={(date) => setDate((prev) => ({...prev, justDate: date }))} 
         />
         )}
    </div>
    )
}

export default index