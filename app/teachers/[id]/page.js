"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const { useParams } = require("next/navigation");

const Teacher = () => {
    const { id } = useParams();
    const [teacher, setTeacher] = useState(null);
    const url = process.env.NEXT_PUBLIC_API_URL + '/teacher/' + id;

    useEffect(() => {
        const fetchTeacher = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Fetched teacher data:", data);
                setTeacher(data);
            } catch (error) {
                console.error("Error fetching teacher data:", error.message);
            }
        };
        fetchTeacher();
    }, [url]);

    console.log("Fetching teacher data from URL:", url);
    console.log(teacher);

    return (
        <div>
            {!teacher ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col sm:flex-row shadow-2xl m-4">
                    {/* Left Side */}
                    <div className="flex items-center justify-center">
                        <Image src={teacher.profileImage} alt="" width={300} height={300} />
                    </div>
                    {/* Right Side */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-lg">Name : <span className="text-gray-400">{teacher.name}</span></h1>
                        <h2 className="">Degree : <span className="text-gray-400">{teacher.degree}</span></h2>
                        <div>
                            <h3 className="underline">Courses :</h3>
                            <ul className="list-disc list-inside">
                                {teacher.selectedCourses.map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                        </div>
                        {/* <div>
                    <h3 className="underline">Students :</h3>
                    <ul className="list-disc list-inside">
                        {teacher.students.map((student, index) => (
                            <li key={index}>{student}</li>
                        ))}
                    </ul>
                </div> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Teacher;