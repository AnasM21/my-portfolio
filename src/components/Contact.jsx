import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pt-10'>
      <form method='POST' action="https://getform.io/f/30bc4a4c-68e5-4a38-8e2f-ab1e30fd8b83" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 p-4'>For further innquiries shoot me an email directly at - mohammadi.anas@yahoo.com</p>
        </div>
        
      </form>
    </div>
  )
}

export default Contact