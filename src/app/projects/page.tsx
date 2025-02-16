'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

const projects = [
  { name: "Domain Cover Letter Generator", repo: "anil487/domaincvrlttr" },
  { name: "HPRS", repo: "anil487/hprs" },
  { name: "Digital Mithila Mart", repo: "anil487/digitalmithilamart" },
  { name: "Demo", repo: "anil487/demo" },
  { name: "Rock Paper Scissors", repo: "anil487/Rockpaperscissorsjs" },
  { name: "Personal Portfolio", repo: "anil487/personalportfolio" },
  { name: "Birthday Reminder", repo: "anil487/BIRTHDAYREMINDER" },
  { name: "Snake Game", repo: "anil487/SnakeGamejs" },
  { name: "IP Checker", repo: "anil487/IP-CHECKER" },
  { name: "Learning Git", repo: "anil487/Learninggit" },
  { name: "Splash", repo: "anil487/splash" },
  { name: "Mobile Application", repo: "anil487/MobileApplication" },
];

const Projects = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="p-4">
            <CardHeader className="flex items-center gap-2">
              <FolderOpen className="text-blue-500" />
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`https://github.com/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
