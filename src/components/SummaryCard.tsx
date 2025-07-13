import React from "react";

interface SummaryCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, count, icon }) => (
  <div className="flex justify-center items-center">
  <div className="hover:scale-105 bg-white shadow rounded-xl p-4 space-y-2 flex flex-col w-full md:w-[320px] lg:w-[400px] justify-center items-center">
    {/* Flex container for title and icon */}
    <div className="flex items-center gap-2">
      <h3
        className="text-xl font-bold first-letter:text-3xl first-letter:font-bold
                   bg-gradient-to-r
                   from-black
                   via-green-800
                   to-green-900
                   text-transparent
                   bg-clip-text
                   inline-block
                   tracking-wide"
      >
        {title}
      </h3>
      {/* Icon placed directly next to the title text */}
      {icon}
    </div>

    <p
      className="text-6xl font-bold
                   bg-gradient-to-b
                   from-black
                   via-green-800
                   to-green-900
                   text-transparent
                   bg-clip-text"
    >
      {count}
    </p>
    </div>
    </div>
);

export default SummaryCard;