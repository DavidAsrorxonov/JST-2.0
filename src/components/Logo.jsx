import React, { useState } from "react";
import { Tooltip } from "@heroui/tooltip";

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer m-2">
      <Tooltip content="Job Site Tracker">
        <div className="flex flex-col">
          <h1
            className="text-5xl font-bold tracking-widest font-oswald"
            title="Job Site Tracker"
          >
            JST
          </h1>
          {/* <span>
          <small>Trackind made easy</small>
        </span> */}
        </div>
      </Tooltip>
    </div>
  );
};

export default Logo;
