'use client'
import React from 'react';
import { Oval } from 'react-loader-spinner';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='font-semibold md:text-3xl max-sm:text-2xl mb-5'>Projects updating...</h1>
      <Oval height={40} width={40} />
    </div>
  );
};

export default Projects;
