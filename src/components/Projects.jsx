import React from 'react'
import WorkImg from '../assets/workImg.jpeg';
import Quizz from '../assets/quizz.png';
import Doc from '../assets/doc.png';
import Covid from '../assets/covid.png';
import MoviesApp from '../assets/MoviesApp.gif';
const Projects = () => {
  return (
      <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                  <p className='py-6'>Check out some of my recent projects</p>
        </div>
        {/* Container*/}
        <div 
          className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10'>
          
          {/* Grid Item*/}

        
          <div
            style={{ backgroundImage: `url(${Quizz})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Android Native Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo soon
                    </button>
                  </a>
                  <a href="https://github.com/AnasM21/QuizApp" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Doc})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo soon
                    </button>
                  </a>
                  <a href="">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code soon
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Covid})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Flutter Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo soon 
                    </button>
                  </a>
                  <a href="https://github.com/AnasM21/covidapp" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${MoviesApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React Js Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo soon
                    </button>
                  </a>
                  <a href="https://github.com/AnasM21/MoviesApp_v2" target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code 
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
          </div>
    </div>
  )
}

export default Projects