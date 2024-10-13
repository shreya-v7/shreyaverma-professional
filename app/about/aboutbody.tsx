"use client";

import React, { useState } from "react";
import Experience from "./experience";
import Education from "./education";
import CertList from "./certlist"; // Import the CertList component

export default function AboutBody() {
  const [activeSection, setActiveSection] = useState<'experience' | 'education' | 'certifications'>('experience'); // Update the state type to include 'certifications'

  return (
    <div>
      {/* Section Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 text-lg font-medium rounded-md transition-colors duration-300 
            ${activeSection === 'experience' 
              ? 'bg-neutral-800 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900' 
              : 'bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-200'}`}
          onClick={() => setActiveSection('experience')}
        >
          Experience
        </button>
        <button
          className={`px-4 py-2 text-lg font-medium rounded-md transition-colors duration-300 
            ${activeSection === 'education' 
              ? 'bg-neutral-800 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900' 
              : 'bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-200'}`}
          onClick={() => setActiveSection('education')}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 text-lg font-medium rounded-md transition-colors duration-300 
            ${activeSection === 'certifications' 
              ? 'bg-neutral-800 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900' 
              : 'bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-200'}`}
          onClick={() => setActiveSection('certifications')}
        >
          Certifications
        </button>
      </div>

      {/* Dynamic Section Rendering */}
      <div>
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'certifications' && <CertList />} {/* Render CertList for Certifications */}
      </div>
    </div>
  );
}
