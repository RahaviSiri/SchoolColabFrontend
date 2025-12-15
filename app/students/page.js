"use client"
import React, { useEffect, useState } from 'react'

const Students = () => {

  const [students, setStudents] = useState(null);
  const url = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(url + `/student`)
        if(!response.ok){
          console.log("Error in connecting to backend");
        }
        const data = await response.json();
        console.log("Students Data " + data);
        setStudents(data);
      } catch (error) {
        console.log(error.message + " Error in fetching teachers");
      }
    }
    fetchStudents();
  }, [])

  console.log("Students Data " + students);

  return (
    <div>
      
    </div>
  )
}

export default Students