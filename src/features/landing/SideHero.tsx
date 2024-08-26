"use client";

import React from "react";

export const SideHero = ({ className }: { className: string }) => {
  return (
    <section className={`${className}`}>
      {/* Image - main - bg-cover */}
      <div
        className="sticky h-[432px] w-full bg-cover bg-center lg:h-[780px]"
        style={{
          backgroundImage: `url('/images/groupArcachon.jpg')`,
        }}
      ></div>
    </section>
  );
};

export default SideHero;
