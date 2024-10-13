"use client";

import Image from "next/image";
import React, { useState } from 'react';

const certificates = [
  {
    title: "Google Cloud Professional Machine Learning Engineer Certification",
    date: "Dec 2023",
    image: "/certs/googleml.png",
  },
  {
    title: "Microsoft Azure Fundamentals, AZ - 900",
    date: "Dec 2023",
    image: "/certs/az900.png",
  },
  {
    title: "Deep Learning Specialization, Deep Learning.AI",
    date: "Dec 2022",
    image: "/certs/andrewngdl.png",
  },
  {
    title: "Winner of ET Campus Coding Stars",
    date: "Aug 2022",
    image: "/certs/et.png",
  },
  {
    title: "Gold Certified AI Foundation, SkillUp",
    date: "Aug 2021",
    image: "/certs/aifsgold.png",
  },
  {
    title: "Mass AI Workshop Participation, Guinness Book of World Records, GUVI",
    date: "Apr 2021",
    image: "/certs/guvi.png",
  },
];

// Sort certificates by date in descending order
certificates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const CertList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4); // Typed as number

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Ensure proper increment
  };

  return (
    <section id="certificates">
      <div className="row" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '20px'
      }}>
        {certificates.slice(0, visibleCount).map((cert, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            margin: '10px',
            width: 'calc(50% - 20px)', // This should be fine
            textAlign: 'center',
            backgroundColor: 'var(--bg-color)', // Use CSS variables for dynamic theme support
            color: 'var(--text-color)', // Use CSS variables for dynamic theme support
            padding: '10px',
          }}>
            <Image
              src={cert.image}
              alt={cert.title}
              layout="responsive" // Use responsive layout
              width={400} // Provide original width
              height={300} // Provide original height
              priority // Optional: Load the image early
            />
            <h4>{cert.title}</h4>
            <p>{cert.date}</p>
          </div>
        ))}
      </div>
      {visibleCount < certificates.length && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handleLoadMore} style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: '1px solid #0070f3', // Normal border
            borderRadius: '5px',
            backgroundColor: 'transparent', // Transparent background
            color: '#0070f3', // Blue text
            cursor: 'pointer',
            transition: 'background-color 0.3s ease', // Add a transition effect
          }}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default CertList;
