"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
const { useParams } = require("next/navigation");

const Student = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const url = process.env.NEXT_PUBLIC_API_URL + '/student/' + id;

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Fetched student data:", data);
                setStudent(data);
            } catch (error) {
                console.error("Error fetching student data:", error.message);
            }
        };
        fetchStudent();
    }, [url]);

    console.log("Fetching student data from URL:", url);
    console.log(student);

    return (
        <div>
            {!student ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col sm:flex-row shadow-2xl m-4">
                    {/* Left Side */}
                    <div className="flex items-center justify-center">
                        <Image src={student.profileImage} alt="" width={300} height={300} />
                    </div>
                    {/* Right Side */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-lg">Name : <span className="text-gray-400">{student.name}</span></h1>
                        <h2 className="">Grade : <span className="text-gray-400">{student.grade}</span></h2>
                        <div>
                            <h3 className="underline">Courses :</h3>
                            <ul className="list-disc list-inside">
                                {student.studentCourses.map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Student;