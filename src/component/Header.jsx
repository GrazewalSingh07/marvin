import React from "react";

export const Header = () => {
  return (
    <div className="py-2">
      <p className="font-semibold text-xl text-gray-500">Revolutionize Your</p>
      <h1 className="text-6xl font-semibold max-w-[60%]">
        Creative Project with the ultimate AI-Powered Pattern{" "}
        <span >
          <span className="text-lg text-gray-500 ">
            <button className="text-lg">START GENERATING</button>
            <p className="max-w-[250px]">
              The next eneration{" "}
              <span className="text-lg text-black">Production</span> for
              Designers
            </p>
          </span>{" "}
          
        </span>{" "}
      </h1>
    </div>
  );
};
