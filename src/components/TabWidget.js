import React, { useState } from "react";

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState("about"); // Default tab is 'about'

  const tabs = [
    { name: "About Me", key: "about" },
    { name: "Experiences", key: "experiences" },
    { name: "Recommended", key: "recommended" },
  ];

  // Content for each tab
  const tabContent = {
    about: `Passionate software developer skilled in full-stack development, specializing in Python, JavaScript, React, and MERN stack. Experienced in building responsive applications, optimizing workflows, and integrating AI-driven solutions. Strong problem-solver and communicator, dedicated to continuous learning and enhancing user experiences through innovative technology solutions and efficient coding practices.`,
    experiences:
      "Experienced in full-stack development with skills in Python, JavaScript, React, MERN stack, and Salesforce LWC. Developed responsive UIs, optimized applications, and built AI-driven tools. Achieved a 75% increase in efficiency for resume processing. Strong communicator, problem-solver, and AI researcher, committed to learning new technologies and enhancing user experiences.",
    recommended:
      "Recommended for roles in full-stack development, AI research, or software engineering, given expertise in Python, JavaScript, React, and MERN stack. Strong track record in building optimized, responsive applications and AI-driven tools. Effective team collaborator and problem-solver with a passion for learning and applying new technologies to solve complex challenges.",
  };

  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-800 text-white">
      {/* Tabs */}
      <div className="flex space-x-4 bg-gray-700 rounded">
        {" "}
        {/* Rounded container */}
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.key)} // Set the active tab state to tab key
            className={`px-4 py-2 rounded m-1 ${
              activeTab === tab.key ? "bg-black" : "bg-gray-700"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content based on the active tab */}
      <div className="mt-4">
        {tabContent[activeTab] ? tabContent[activeTab] : "No content available"}{" "}
        {/* Fallback for undefined content */}
      </div>
    </div>
  );
};

export default TabWidget;
