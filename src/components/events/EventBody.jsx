import axios from "axios";
import React, { useEffect, useState } from "react";
import { useEvent } from "../../context/eventContext";
import EventBodyRight from "./EventBodyRight";
import EventBodyLeft from "./EventBodyLeft";

const EventBody = () => {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      <div className="w-1/2">
        <EventBodyRight />
      </div>
      <div className="w-1/2">
        <EventBodyLeft />
      </div>
    </div>
  );
};

export default EventBody;
