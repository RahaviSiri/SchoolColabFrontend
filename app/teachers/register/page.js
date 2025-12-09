"use client";

import { useState } from "react";

const Register = () => {

    const coursesList = [
        { id: "c1", name: "Math" },
        { id: "c2", name: "Science" },
        { id: "c3", name: "English" },
    ];
    const [formData, setFormData] = useState({
        name: "",
        degree: "",
        image: null,
        selectedCourses: []
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const data = new FormData();
        data.append("Name", formData.name);
        data.append("Degree", formData.degree);
        data.append("SelectedCourses", JSON.stringify(formData.selectedCourses));
        data.append("ProfileImage", formData.image);

        console.log("Submitting teacher:", data);
        console.log("API URL:", process.env.NEXT_PUBLIC_API_URL + '/teacher');
        try {
            await fetch(process.env.NEXT_PUBLIC_API_URL + '/teacher', {
                method: 'POST',
                body: data,
            }).then((response) => {
                if (response.ok) {
                    console.log("Teacher registered successfully!");
                } else {
                    console.error("Failed to register teacher.");
                    throw new Error('Network response was not ok');
                }
            });
            setFormData({
                name: "",
                degree: "",
                selectedCourses: []
            })
        } catch (error) {
            console.error("Error submitting form:", error.message);
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setFormData((prev) => ({
            ...prev,
            selectedCourses: prev.selectedCourses.includes(value)
                ? prev.selectedCourses.filter((course) => course !== value) // Remove course if already selected
                : [...prev.selectedCourses, value] // Add course if not selected
        }))
    }

    const handleImageChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0], 
        }));
    };


    return (
        <div className="flex flex-col items-center justify-center m-5">
            <form action="submit" onSubmit={handleSubmit} className="p-4 border shadow-xl rounded-2xl">
                <h1>Enter the Details</h1>
                <div className="flex flex-col items-start" >
                    <label htmlFor="image" className="">Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                        className="border-2 border-sky-500 rounded-lg p-2 my-2"
                    />
                </div>
                <div className="flex flex-col items-start" >
                    <label htmlFor="name" className="">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} required
                        className="border-2 border-sky-500 rounded-lg p-2 my-2"
                    />
                </div>
                <div className="flex flex-col items-start" >
                    <label htmlFor="degree">Degree:</label>
                    <input
                        type="text"
                        id="degree"
                        value={formData.degree}
                        onChange={(e) => setFormData((prev) => ({ ...prev, degree: e.target.value }))} required
                        className="border-2 border-sky-500 rounded-lg p-2 my-2"
                    />
                </div>
                <div className="flex flex-col items-start" >
                    <p>Courses:</p>
                    {coursesList.map((course) => (
                        <div key={course.id} className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id={course.id}
                                value={course.name}
                                checked={formData.selectedCourses.includes(course.name)}
                                onChange={handleChange}
                            />
                            <label htmlFor={course.id}>{course.name}</label>
                        </div>
                    ))}
                </div>
                <button className="p-2 rounded-lg bg-sky-600 text-white my-2">Submit</button>
                {/* by default, a <button> inside a <form> acts as type="submit" */}
            </form>
        </div>
    )
}

export default Register;