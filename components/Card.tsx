"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const TeacherCard = ({ teacher }) => {
    const route = useRouter();
    const handleClick = () => {
        route.push("/teachers/" + teacher.id);
    }

    return (
        <div onClick={handleClick} className="flex flex-col border-gray-100 shadow-lg rounded-lg ">
            <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64">
                <Image
                    src={teacher.profileImage}
                    alt=""
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <div className="flex flex-col bg-sky-100 p-5 text-gray-600">
                <h2 className="text-sky-800">Name : <span className="text-gray-400">{teacher.name}</span></h2>
                <p className="text-sky-800">Degree : <span className="text-gray-400">{teacher.degree}</span></p>
            </div>
        </div>
    );
}

export default TeacherCard;