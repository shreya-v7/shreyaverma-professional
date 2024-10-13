"use client";

import React from "react";
import { useRouter } from "next/router";

const LoadMoreIcon: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    // You can define the logic for what happens when the icon is clicked
    router.push("/versions"); // Redirect to versions page or whatever logic you want
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-5 right-5 p-4 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-blue-500"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <span className="text-lg">Load More Website Versions</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m-9-9l9 9-9 9" />
      </svg>
    </div>
  );
};

export default LoadMoreIcon;
