
const Home = () => {
  return (
    <div className="p-5 space-y-6">

      {/* Header */}
      <h1 className="text-3xl font-bold text-sky-800">
        Welcome to School Colab
      </h1>
      <p className="text-gray-700 text-lg">
        A smart platform that connects <span className="text-sky-700 font-semibold">Teachers</span>, 
        <span className="text-yellow-600 font-semibold"> Students</span>, and 
        <span className="text-sky-700 font-semibold"> Courses</span> together in one place.
      </p>

      {/* Section 1: What the System Does */}
      <div className="bg-sky-100 p-5 rounded-lg">
        <h2 className="text-2xl font-semibold text-sky-800">What You Can Do</h2>
        <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
          <li>Teachers can register and teach multiple courses.</li>
          <li>Students can join many courses and learn from different teachers.</li>
          <li>Courses can have multiple teachers and multiple students.</li>
          <li>Admins can easily manage the entire registry from one dashboard.</li>
        </ul>
      </div>

      {/* Section 2: How The System Connects */}
      <div className="bg-yellow-100 p-5 rounded-lg">
        <h2 className="text-2xl font-semibold text-yellow-700">How Everything is Connected</h2>
        <p className="text-gray-700 mt-3">
          School Colab is built to show clear relationships between all users:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li><strong>Teachers ↔ Courses:</strong> A teacher can teach many courses, and a course can be taught by multiple teachers.</li>
          <li><strong>Students ↔ Courses:</strong> Students can enroll in any number of courses available.</li>
          <li><strong>Teachers ↔ Students:</strong> Students can learn from different teachers, and teachers can teach many students.</li>
        </ul>
      </div>

      {/* Section 3: Why This Helps */}
      <div className="bg-white shadow p-5 rounded-lg">
        <h2 className="text-2xl font-semibold text-sky-800">Why This Platform?</h2>
        <p className="text-gray-700 mt-3">
          Instead of managing everything manually, School Colab makes it easy to view, track, 
          and organize how teachers, students, and courses relate to each other.  
          Whether you're a teacher planning your lessons, a student checking available courses, 
          or an admin managing records — everything is simple, fast, and transparent.
        </p>
      </div>

      {/* Section 4: Call to Action */}
      <div className="text-center mt-8">
        <p className="text-lg font-semibold text-sky-800">Start exploring our system now!</p>
        <p className="text-gray-700">Register as a student or teacher and begin your journey.</p>
      </div>

    </div>
  );
};

export default Home;
