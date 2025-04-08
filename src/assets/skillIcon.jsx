import React from "react";

const SkillIcon = ({ name }) => {
  return (
    <div className="px-3 py-1 text-sm font-semibold text-white bg-zinc-800 rounded-full shadow-md whitespace-nowrap">
      {name}
    </div>
  );
};

export default SkillIcon;
