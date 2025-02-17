"use client";

import Image from "next/image";

const skills = [
  { name: "Frontend Development", value: 90 },
  { name: "Backend Development", value: 80 },
  { name: "UI/UX & Responsive Design", value: 85 },
  { name: "Project Deployment & Optimization", value: 75 },
];

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 p-8 bg-white rounded-lg shadow-lg">
      <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-blue-500">
        <Image
          src="/images/bird.jpg"
          alt="Anil Kumar Mahato"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">About Me</h2>
        <p className="text-gray-700 mb-4">
          I’m <span className="font-semibold">Anil Kumar Mahato</span>, a
          passionate web developer specializing in MERN stack and Next.js. I
          love building scalable and efficient applications and have hands-on
          experience integrating real-world solutions.
        </p>

        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-gray-600 text-sm font-semibold">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
