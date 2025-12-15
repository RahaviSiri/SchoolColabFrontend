"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const StudentsCard = ({ student }) => {
    const route = useRouter();
    const handleClick = () => {
        route.push("/students/" + student.id);
    }
    const url = process.env.NEXT_PUBLIC_API_URL;

    const handleUpdate = () => {
        route.push("/students/register/" + teacher.id)
    }
    const handleDelete = async () => {
        try {
            await fetch(url + `/student/${student.id}`,{
                method : "DELETE",
            })
            route.push("/");
        } catch (error) {
            console.log("Error in Deleting");
        }
    }

    return (
        <div className="flex flex-col border-gray-100 shadow-lg rounded-lg ">
            <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64">
                <Image
                    src={student.profileImage}
                    alt=""
                    fill
                    className="object-cover rounded-t-lg"
                    onClick={handleClick} 
                />
            </div>
            <div className="flex flex-col bg-sky-100 p-5 text-gray-600">
                <h2 className="text-sky-800">Name : <span className="text-gray-400">{student.name}</span></h2>
                <p className="text-sky-800">Grade : <span className="text-gray-400">{student.grade}</span></p>
                <div className="flex gap-3">
                    <button onClick={handleUpdate} className="p-3 bg-green-600 rounded-2xl shadow-2xl my-2 text-white">Update</button>
                    <button onClick={handleDelete} className="p-3 bg-red-600 rounded-2xl shadow-2xl my-2 text-white">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default StudentsCard;