import React from 'react'

const Contact = () => {
  return (
      <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pt-10'>
          <form method='POST' action="https://getform.io/f/30bc4a4c-68e5-4a38-8e2f-ab1e30fd8b83" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                  <p className='text-gray-300 p-4'>Submit the form below or shoot me an email - mohammadi.anas@yahoo.com</p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Full Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="message" rows="10"></textarea>
              <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
    </div>
  )
}

export default Contact