"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navComponents = [
    {
      name: "Courses",
      image: "/icons/course_icon.png",
      link: "/courses",
    },
    {
      name: "Students",
      image: "/icons/student_icon.png",
      link: "/students",
    },
    {
      name: "Teachers",
      image: "/icons/teacher_icon.png",
      link: "/teachers",
    },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-sky-200">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Image src="/assests/logo.jpg" alt="logo" width={50} height={50} />
          <p className="text-sky-900 mt-2 font-medium">
            Manage your registry easily
          </p>
        </div>

        {/* MIDDLE NAV LINKS */}
        <div className="flex flex-col gap-4">
          {navComponents.map((component) => (
            <Link
              href={component.link}
              key={component.name}
              className="text-sky-800 flex items-center hover:text-yellow-600 cursor-pointer"
            >
              <Image
                src={component.image}
                alt={component.name}
                width={30}
                height={30}
                className="inline mr-1"
              />
              <p>{component.name}</p>
            </Link>
          ))}
        </div>

        {/* RIGHT INFO SECTION */}
        <div className="flex flex-col text-center sm:text-right">
          <p className="font-semibold text-sky-900">Contact Us</p>
          <p className="text-sm text-sky-800">Email: support@schoolcolab.com</p>
          <p className="text-sm text-sky-800">Phone: +94 70 123 4567</p>

          <div className="flex justify-center sm:justify-end gap-4 mt-2 text-2xl">
            <span className="cursor-pointer hover:text-yellow-600">🌐</span>
            <span className="cursor-pointer hover:text-yellow-600">📘</span>
            <span className="cursor-pointer hover:text-yellow-600">📸</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <p className="text-center bg-black text-white py-2 text-sm">
        © {new Date().getFullYear()} School Colab. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
