// Projects.tsx
"use client";

import React, { useState } from "react";
import { projects, Project } from "./project-data"; // Import your project data

export default function ProjectsInfo() {
  // State to handle filtered projects and selected category
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Categories for filtering
  const categories = ["All", "Web", "App", "Talk", "Research"];

  // Function to handle filtering
  const handleFilter = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects); // Show all projects
    } else {
      const filtered = projects.filter((project) =>
        project.tags.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  // Sort projects by date in descending order
  const sortedProjects = filteredProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="p-4 text-neutral-900 dark:text-neutral-100">
      {/* Centered Filter Buttons */}
      <div className="mb-4 flex justify-center items-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-2 py-1 rounded-md transition-colors duration-300 
              ${activeCategory === category
                ? "bg-neutral-800 text-neutral-100"
                : "bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />

              {/* Ribbon with Project Title, Date, and Link */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-2">
                <div className="flex justify-between items-center">
                  <div>
                    {/* Project Title */}
                    <h3 className="text-md">{project.title}</h3>
                    {/* Smaller date below title */}
                    <p className="text-xs mt-1">
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  {/* Project Link */}
                  <div className="text-right">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 text-xs hover:underline"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
