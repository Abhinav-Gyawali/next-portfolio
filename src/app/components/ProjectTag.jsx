import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-br from-blue-100 to-teal-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full px-1 py-1 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3">
        
      {name}
    </span>
    </button>
  );
};

export default ProjectTag;
