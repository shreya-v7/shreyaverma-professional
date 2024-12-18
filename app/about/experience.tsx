"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";

const experienceData = [
  {
    company: "Morgan Stanley",
    logo: "experience/Ms.jpg",
    roles: [
      {
        title: "Software Engineer II",
        duration: "Jan 2024 - Present",
        content: [
          "Java Application Developer & Data Analyst in Client & Investor Analytics team, modernizing risk measures (exposure, beta, VaR) handling $600M worth portfolios. Developed Monte Carlo simulations.",
          "Optimized exposure risk calculations with a Greedy Algorithm, reducing processing time from 4+ hours to 30 minutes.",
          "Developed PowerBI dashboards with DAX queries for factor analytics identifying loss in a portfolio due to market events.",
          "Promoted a liquidity calculator to OpenShift using Kubernetes and Docker, and created Terraform scripts for IaC, saving 40+ hours.",
          "Contributed to SRE stack configuration (Loki, Prometheus, Grafana, Tempo).",
          "Led Agile methodologies as Scrum Master, analyzing team performance metrics with Dash Tables and Plotly in Python."
        ],
        awards: "IST Circle of Excellence Award, Team Engagement Champion 2024 Quarterly Awards",
        techStack: ["PyTorch", "Keras", "Tensorflow", "Java", "Springboot", "Python", "Angular", "PowerBI", "Kafka", "Redis", "Kubernetes", "Podman", "Terraform", "Delphix", "Loki", "Prometheus", "Grafana", "Tempo", "Openshift"],
      },
      {
        title: "Technology Analyst",
        duration: "Jul 2023 - Dec 2024",
        content: [
          "Created a Deep Learning model framework (autoencoder) for a rule-based data quality engine for anomaly detection in risk data.",
          "Graduated from Morgan Stanley's prestigious Technology Analyst Program (TAP), gaining expertise in software engineering, financial technology, and internal tech architecture."
        ],
        awards: "First in Jeopardy Quiz on Tech Principles",
        techStack: ["React", "Java", "Python", "Azure Spring Functions", "Jira", "Rally", "Springboot", "Linux"],
      },
      {
        title: "Spring Technology Analyst",
        duration: "Jan 2023 - Jul 2023",
        content: [
          "Replaced a 40GB Hazelcast cache with Redis, optimizing the risk engine backend.",
          "Reduced load times from three minutes to seconds, gaining recognition from senior executives."
        ],
        awards: "Technology Talent Showcase Runner Up",
        techStack: ["Java", "Springboot", "Redis", "Hazelcast", "JMeter", "Grafana", "Prometheus", "Java Microbenchmark Harness", "OpenAPI"],
      },
      {
        title: "Summer Technology Analyst",
        duration: "May 2022 - Jul 2022",
        content: [
          "Implemented a Divide-and-Conquer solution in Java, using Kafka for high-volume messaging.",
          "Revitalized a legacy system with an Angular interface, earning a pre-placement offer from 3,500+ applicants in college."
        ],
        awards: "Recevied Pre-Placement Offer for Exceptional Performance",
        techStack: ["Java", "Springboot", "Angular", "rxjs", "Kafka"],
      }
    ],
  },
  {
    company: "Harvard University (HPAIR)",
    logo: "experience/hpair.png",
    roles: [
      {
        title: "Tech Leader",
        duration: "May 2022 - Aug 2022",
        content: [
          "Worked on Squarespace and React to handle client-side application of the official Harvard Conference for Asia.",
          "As an organiser, received a chance to meet field experts and interact with a diverse community of delegates."
        ],
        awards: "HCONF'23 Accepted Delegate",
        techStack: ["Squarespace", "Wordpress", "React", "CMS"],
      },
    ],
  },
  {
    company: "Toastmasters International",
    logo: "experience/toastmasters.png",
    roles: [
      {
        title: "President - Agua VIT",
        duration: "Jun 2020 - Sep 2022",
        content: [
          "Presidents Distinguished Club Award, Triple Crown Winner, Golden Gavel Award",
          "Held Executive Committee positions - Vice President Public Relations, Vice President Membership, President.",
          "Bagged 2nd runner up in International Speech Contest, Area.",
          "Stated 1st runner up in Table Topic Contest, Club."
        ],
        awards: "Best Project Award - 2019",
        techStack: ["Public Speaking", "Leadership", "Visionary", "Canva"],
      },
    ],
  },
  {
    company: "Samsung R&D",
    logo: "experience/samsung.jpg",
    roles: [
      {
        title: "PRISM Research Intern",
        duration: "Oct 2021 - Mar 2022",
        content: [
          "Optimal BS Transmit power for 5G & 6G System using ML.",
          "Carried out Matlab Simulations with 5G toolkit."
        ],
        techStack: ["Matlab", "Machine Learning"],
      },
    ],
  },
  {
    company: "Cisco",
    logo: "experience/cisco.jpg",
    roles: [
      {
        title: "Frontend Developer",
        duration: "Jul 2021 - Aug 2021",
        content: [
          "Passed Networking Essentials and Advanced Networks course.",
          "Training program to setup simulated networks in a WAN.",
          "Merit Performer in CTF event - Rank 11."
        ],
        awards: "Best Project Award - 2019",
        techStack: ["WAN Developer", "Cybersecurity", "Packet Tracer"],
      },
    ],
  },
  {
    company: "TribeVibe Pvt. Ltd.",
    logo: "experience/tribevibe.png",
    roles: [
      {
        title: "Campus Ambassador",
        duration: "Aug 2020 - Apr 2021",
        content: [
          "Virtually hosting events and promoting shows to have a larger reach to the audience."
        ],
        techStack: ["Public Relations", "Leadership", "Instagram"],
      },
    ],
  },
  {
    company: "MAX Healthcare Ltd.",
    logo: "experience/max.png",
    roles: [
      {
        title: "Industrial Intern",
        duration: "Jan 2018 - Dec 2019",
        content: [
          "Worked with a full stack application for an analytics portal for doctors to perform CRUD operations viewing the history of their patients.",
          "Alterations to admin panel backend by setting RESTful API cert."
        ],
        awards: "Best Project Award - 2019",
        techStack: ["C#", "RESTful API", "Visual Studio"],
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
    experienceData.forEach(company => {
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
    <section id="experience">
    <div className="flex flex-col space-y-4">
      {experienceData.map((company, index) => (
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