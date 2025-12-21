"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data, title }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full font-sans md:px-10"
    >
      <div className="w-10/12 mx-auto py-20">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
          {title}
        </h2>        
      </div>

      <div ref={ref} className="relative w-10/12 mx-auto pb-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky top-40 z-40 flex items-center max-w-xs md:w-full">
              <div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-800" />
              </div>
              <h3 className="hidden md:block pl-6 text-4xl font-bold text-gray-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 md:pl-4 w-full">
              <h3 className="md:hidden text-2xl mb-4 font-bold text-gray-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          className="absolute left-5 top-0 w-0.5 bg-gray-200 dark:bg-gray-700"
          style={{ height }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-purple-500 via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
