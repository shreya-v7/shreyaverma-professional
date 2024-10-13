import React from "react";
import type { Metadata } from "next";
import ProjectsInfo from "./projects-info";


export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-6">
        <ProjectsInfo />
      </div>
    </section>
  );
}
