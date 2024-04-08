import React from "react";

const ProgressBar = ({ total = 100, progress = 50 }) => {
  return (
    <div className="w-[95%] text-secondaryC m-auto relative overflow-hidden">
      <div className="rounded-[20px] flex justify-end items-center pr-[20px] bg-white h-[35px] overflow-hidden">
        <p className="font-bold">of {total}</p>
      </div>
      <div
        style={{ width: `${(progress / total) * 100}%` }}
        className={`text-white flex justify-center items-center absolute rounded-l-[20px] top-0 h-full overflow-hidden  left-0 z-[1] bg-secondaryC`}
      >
        {progress}
      </div>
    </div>
  );
};

export default ProgressBar;
