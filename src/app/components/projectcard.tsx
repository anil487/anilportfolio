"use client";
import { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Educational landing page design",
    category: "Web Design",
    image: "/images/education.jpeg",
    description: "Helping educational sector grow through effective landing pahge.",
  },
  {
    id: 2,
    title: "Business Landing Page Design",
    category: "Web Design",
    image: "/images/business.jpeg",
    description:
      "Helping businesses grow through effective landing page design.",
  },
  {
    id: 3,
    title: "Ecom Web Page Design",
    category: "Web Design",
    image: "/images/ecommerce.jpeg",
    description: "Creating modern, responsive e-commerce websites.",
  },
];

const categories = ["All", "Web Design", "UI/UX", "Graphic Design"];

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12 ">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
          >
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
