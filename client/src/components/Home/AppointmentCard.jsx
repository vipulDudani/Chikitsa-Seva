import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { BsCircle } from 'react-icons/bs'

const AppointmentCard = (props) => {
    return (
        <>
            <div className='bg-white mx-2 p-4 px-4 w-full mb-2 rounded-2xl transition shadow-lg duration-700 ease-in-out hover:shadow-2xl  md:w-1/2 lg:w-1/4'>
                <div className='mt-3 border-b-2' />
                <div className='h-3/4 w-full content-start'>
                    <div className='flex items-center gap-3'>
                        <div className='w-1/4 mt-5 flex'>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="profile picture"
                                className='w-full h-full rounded-full'
                            />
                        </div>
                        <div className='w-3/4 mt-5 items-start'>
                            <h1 className='font-semibold'>Dr. {props.name}</h1>
                            <h1 className='text-slate-400 font-medium'>{props.post}</h1>
                            <div className='border rounded-xl w-1/2'>
                                <h1 className='flex items-center justify-around'><BsCircle className='text-xs rounded-full bg-green-400' /> Active</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <div className='flex flex-col gap-5 mt-3 w-1/2'>
                            <div className='w-fit'>
                                <h1 className='text-slate-400 font-medium'>Date</h1>
                                <h1 className='text-[13px] font-medium'>{props.date}</h1>
                            </div>
                            <div className='w-fit'>
                                <h1 className='text-slate-400 font-medium'>Address</h1>
                                <h1 className='text-[13px] font-medium'>{props.address}</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 mt-3 w-1/2'>
                            <div className='w-fit'>
                                <h1 className='text-slate-400 font-medium'>Time</h1>
                                <h1 className='text-[13px] font-medium'>{props.time}</h1>
                            </div>
                            <div className='w-fit'>
                                <h1 className='text-slate-400 font-medium'>Area of Interest</h1>
                                <h1 className='text-[13px] font-medium'>{props.areaofintrest}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentCard