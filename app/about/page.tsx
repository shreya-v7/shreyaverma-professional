import React from "react";
import type { Metadata } from "next";

import AboutBody from "./aboutbody";
import CertList from "./certlist";

export const metadata: Metadata = {
  title: "About",
  description: "About Myself",
};

export default function About() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">About</h1>

      {/* Introductory line with internal links */}
      <p className="mb-6">
        Curious about my journey? I’ve put in a lot of hard work, but let’s make it interesting! 
        Keep refreshing the page to watch the colors change. Fun, right? 
        Want to dive deeper? </p>

      <AboutBody />
    </div>
  );
}
