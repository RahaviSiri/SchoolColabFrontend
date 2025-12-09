"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {

  const navComponents = [{
    name: "Courses",
    image: "/icons/course_icon.png",
    link: "/courses"
  },
  {
    name: "Students",
    image: "/icons/student_icon.png",
    link: "/students"
  },
  {
    name: "Teachers",
    image: "/icons/teacher_icon.png",
    link: "/teachers"
  }];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='flex items-center justify-between mb-2'>
        <Link href={"/"} className='flex gap-3 items-center'>
          <Image src="/assests/logo.jpg" alt="logo" width={50} height={50} />
          <p className='sm:text-xl text-yellow-600'><span className='sm:text-2xl text-sky-700'>S</span>chool <span className='sm:text-2xl text-sky-700'>C</span>olab</p>
        </Link>
        {/* Desktop View */}
        <div className='hidden sm:flex gap-5 sm:text-lg'>
          {navComponents.map((component) => (
            <Link href={component.link} key={component.name} className='text-sky-800 flex items-center hover:text-yellow-600 cursor-pointer'>
              <Image src={component.image} alt={component.name} width={30} height={30} className='inline mr-1' />
              <p>{component.name}</p>
            </Link>
          ))}
        </div>
        {/* Mobile View */}
        <div className='sm:hidden'>
          <Image src={"/icons/menu_icon.png"} alt={"Menu Icon"} width={30} height={30} onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
            <div className='flex flex-col absolute bg-white top-16 right-5 p-5 rounded-lg shadow-lg gap-4'>
              {navComponents.map((component) => (
                <div key={component.name} className='flex gap-5'>
                  <Image src={component.image} alt={component.name} width={30} height={30} className='inline mr-1' />
                  <Link key={component.name} href={component.link} onClick={() => setIsOpen(!isOpen)}>{component.name}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <hr className='mb-3'/>
    </>
  );
};

export default Nav;
