"use client";
import { Carousel } from "flowbite-react";
import React, { useState } from "react";

interface ITestingProps {}

const Testing: React.FunctionComponent<ITestingProps> = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <img src="YOLO1.png" alt="..." />
          <img src="YOLO2.png" alt="..." />
          <img src="YOLO3.png" alt="..." />
          <img src="YOLO4.png" alt="..." />
          <img src="YOLO5.png" alt="..." />
        </Carousel>
      </div>
    </>
  );
};

export default Testing;
