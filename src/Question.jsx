import React, { useState } from 'react'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'


const Question = ({question}) => {
    const [isOpen, setIsOpen] = useState(false)
    // console.log(isOpen)
  return (
    <>
    <div className='flex justify-between items-center bg-gray-200 px-5 py-2 mt-3'>
        <p>{question.title}</p>
        <button onClick={() => setIsOpen(!isOpen)} className='px-2 text-lg'>{isOpen ? <MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}</button>
    </div>
    <div className='bg-gray-200'>
        {isOpen && <p className='text-start pl-5 py-5'>{question.info}</p>}
    </div>
    </>
    // console.log(question.title)
  )
}

export default Question