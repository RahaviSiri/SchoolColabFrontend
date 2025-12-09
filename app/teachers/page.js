"use client"
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { useRouter } from 'next/navigation';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  const url = process.env.NEXT_PUBLIC_API_URL + '/teacher';

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await fetch(url);
        const teachers = await data.json();
        setTeachers(teachers);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    }
    fetchTeachers();
  },[url]);

  const route = useRouter();

  const handleClick = () => {
    route.push('/teachers/register');
  }

  return (
    <div>
      <div className='flex flex-col px-4'>
        <h1 className='text-xl my-4'>Our Teachers</h1>
        <div className='flex items-center mb-3'>
          <p>Register your self as Teacher</p>
          <button onClick={handleClick} className='ml-2 px-4 py-2 bg-sky-500 text-white rounded'>Register</button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
        {
          teachers.map((teacher) => (
            <Card key={teacher.id} teacher={teacher} />
          ))
        }
      </div>
    </div>
  )
}

export default Teachers