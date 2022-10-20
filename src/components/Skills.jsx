import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Django from '../assets/django.svg';
import ReactImg from '../assets/react.png';
import Springboot from '../assets/springboot.png';
import FireBase from '../assets/firebase.png';
import Angular from '../assets/angular.png';
import GitHub from '../assets/github.png';
import Android from '../assets/android.png';
import Javascript from '../assets/javascript.png';
import Flutter from '../assets/flutter.png';
import Pandas from '../assets/pandas.png';
const Skills = () => {
  return (

    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      { /* Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
    
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
            <p className='my-4'>FireBase</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Django} alt="HTML icon" />
            <p className='my-4'>DJANGO</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Springboot} alt="HTML icon" />
            <p className='my-4'>SPRING</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Flutter} alt="HTML icon" />
            <p className='my-4'>FLUTTER</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Android} alt="HTML icon" />
            <p className='my-4'>ANDROID</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Pandas} alt="HTML icon" />
            <p className='my-4'>Pandas</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={sql} alt="HTML icon" />
            <p className='my-4'>SQL</p>
          </div>
        </div>
      </div>
      </div>
        

      
  );
};

export default Skills;