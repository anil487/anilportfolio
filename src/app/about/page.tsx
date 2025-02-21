"use client";

import Image from "next/image";
import Container from "../components/container";
import { TimelineDemo } from "../components/timeline-demo";

const skills = [
  { name: "Frontend Development", value: 90 },
  { name: "Backend Development", value: 40 },
  { name: "UI/UX & Responsive Design", value: 85 },
  { name: "Project Deployment & Optimization", value: 75 },
];

const AboutMe = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center gap-10 p-6 md:p-10 bg-white shadow-lg rounded-lg mt-5 ">
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative rounded-full overflow-hidden border-4 border-blue-500">
          <Image
            src="/images/anilmahato.png"
            alt="Anil Kumar Mahato"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-3">About Me</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            I’m <span className="font-semibold">Anil Kumar Mahato</span>, a
            passionate web developer specializing in{" "}
            <span className="font-semibold">
              React.js, Next.js, TypeScript, JavaScript, and Tailwind CSS
            </span>
            . I focus on building meaningful, responsive, and scalable UIs.
            While frontend development is my main expertise, I am also in the
            learning phase of backend development. I have learned and worked in
            a real environment through assignments and projects during my time
            at college, and I also worked as a front-end intern at Stable
            Cluster, where I got the chance to reshape and enhance my skills.
          </p>

          <div className="space-y-4">
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
      <div>
      <TimelineDemo />
      </div>
      
    </Container>
  );
};

export default AboutMe;
