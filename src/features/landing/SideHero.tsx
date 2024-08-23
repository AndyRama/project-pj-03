"use client";

import React from "react";

export const SideHero = ({ className }: { className: string }) => {
  return (
    <section className={`${className}`}>
      {/* Image - main - bg-cover */}
      <div
        className="h-[40vh] w-full bg-cover bg-center lg:h-[86vh]"
        style={{
          backgroundImage: `url('/images/groupArcachon.jpg')`,
        }}
      ></div>
    </section>
  );
};

export default SideHero;
