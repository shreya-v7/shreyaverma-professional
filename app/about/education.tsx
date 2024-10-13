"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const educationData = [
  {
    company: "Vellore Institute of Technology",
    logo: "education/vit.png", // Placeholder for institution logo
    roles: [
      {
        title: "Bachelor of Technology, Information Technology",
        duration: "Jul 2019 - Jul 2023",
        content: [
          "9.42/10 CGPA",
          "Meritorious Scholarship and Dean's Rank holder list for consecutive years.",
          "Served as Event Manager and Editorial Core Committee Member in IEEE-WIE Chapter.",
          "Co-ordinated at the Technical fest Gravitas 2019.",
          "Contributed as Software Developer on SEDS-VIT Project for Vyadh - Mars Rover.",
        ],
        awards: "Graduated with Rank 5, Meritorious Student",
        techStack: ["Calculus for Engineers", "Discrete Mathematics and Graph Theory", "Applications of Differential and Difference Equations",  "Applied Linear Algebra", "Human Computer Interaction", "Statistics for Engineers", "Data Mining Techniques", "Big Data Analytics", "Business Analytics", "Data Structures and Algorithms", "Theory of Computation", "Statistics and Probability"
        ],
      },
    ],
  },
  {
    company: "Amity International School",
    logo: "education/amity.png", 
    roles: [
      {
        title: "AISSCE - XII",
        duration: "2017 - 2018",
        content: [
          "95.2%, In the Top 2% students in the State.",
          "Served as Prefect Discipline Head displaying great management skills.",
          "Stood 3rd in Inter-School Web Development Competition.",
          "Active member of Ami-Tech Syndicate, Computer Society.",
          "Creative head in Editorial, Global Times publication.",
          "Lead Singer in Choir at the Annual Function.",
          "Bagged 1st position in Inter-School Singing Competition."
        ],
        awards: "Excellence in Academics",
        techStack: ["Mathematics", "Physics", "Chemistry", "Information Practices", "English"],
      },
      {
        title: "AISSCE - X",
        duration: "2015 - 2016",
        content: [
          "10/10 CGPA, Received Merit Letter from CBSE.",
          "Certified Abacus Gold Medalist, 2nd in the District.",
          "Served as Prefect Discipline Head displaying great management skills.",
          "Excellence in writing, Global Times publication.",
          "Part of the Yoga School Team, selected for Nationals.",
          "Involved in School's Choir Group and represented at States as Lead Singer.",
        ],
        awards: "Certificate of Merit - Government of Indian",
        techStack: ["Science", "Mathematics", "Social Studies", "English", "Hindi"],
      },
    ],
  },
].sort((a, b) => {
  const aDate = new Date(a.roles[0].duration.split(" - ")[1] || "Present").getTime();
  const bDate = new Date(b.roles[0].duration.split(" - ")[1] || "Present").getTime();
  return bDate - aDate; // Sort by latest date first
});



const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first accordion being open
  const [colors, setColors] = useState({}); // State to store colors for tech stack
  const [isClient, setIsClient] = useState(false); // State to track if we are on the client side

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index); // Toggle accordion
  };

  useEffect(() => {
    // Indicate that we are on the client side
    setIsClient(true);
    
    // Generate random colors for each tech stack badge
    const newColors = {};
    educationData.forEach(company => {
      company.roles.forEach(role => {
        role.techStack.forEach(tech => {
          if (!newColors[tech]) {
            newColors[tech] = getRandomColor(); // Generate and store a color for each tech
          }
        });
      });
    });
    setColors(newColors); // Update state with the new colors
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section id="education">
    <div className="flex flex-col space-y-4">
      {educationData.map((company, index) => (
        <div
          key={company.company}
          className="border border-neutral-300 dark:border-neutral-600 rounded-md shadow-md backdrop-filter backdrop-blur-lg bg-white/30 dark:bg-black/30"
        >
          {/* Accordion Header */}
          <button
            onClick={() => handleAccordionClick(index)}
            className="w-full flex justify-between items-center p-4 bg-neutral-100/10 dark:bg-neutral-800/20 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/20 transition-colors rounded-t-md"
          >
            <div className="flex items-center">
              <Image
                src={company.logo}
                alt={`${company.company} Logo`}
                className="h-10 w-10 mr-4"
                width={100}
                height={100}
                unoptimized
                priority
              />
              <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {company.company} 
              </span>
            </div>
            {/* Latest Role and Duration (Moved entirely to the right) */}
            <div className="ml-auto text-right">
              <span className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                {company.roles[0].title}
              </span>
              <br />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {company.roles[0].duration}
              </span>
            </div>
          </button>

          {/* Accordion Content */}
          {activeIndex === index && (
            <div className="p-4 bg-neutral-50/30 dark:bg-neutral-900/20 backdrop-blur-md text-justify">
              {company.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="mb-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">
                      {role.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{role.duration}</p>

                  {/* Render Content as Bullet Points */}
                  <ul className="mt-2 list-disc list-inside text-neutral-900 dark:text-neutral-100">
                    {role.content.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>

                  {role.awards && (
                    <p className="mt-2 font-semibold text-neutral-900 dark:text-neutral-100">
                      Awards: {role.awards}
                    </p>
                  )}

                  {/* Tech Stack Badges below the awards */}
                  {role.techStack.length > 0 && (
                    <div className="mt-2">
                      <div className="flex flex-wrap space-x-1">
                        {role.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-1 py-0.5 rounded-full text-white text-xs font-semibold`}
                            style={{ backgroundColor: isClient ? colors[tech] : undefined }} // Use colors from state only if client
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </section>
  );
}