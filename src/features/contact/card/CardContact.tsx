'use client';

import React from 'react';
import { CardInfo } from './CardInfo';
import CardMap from './CardMap';
import CardPricing from './CardPricing';

export type CardContactProps = {
  className?: string;
};

const CardContact: React.FC<CardContactProps> = ({ className }) => (
  <section className={className}>
    <div className="transform-gpu blur-3xl">
      <div className="absolute left-0 -z-20 h-64 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
    </div>
    <div className="container mx-auto mt-[-90px] lg:mt-[-150px]">
      <div className="flex justify-around">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CardInfo className="mb-10 w-full px-0 md:px-4" />
          <CardMap className="mb-10 w-full px-0 md:px-4" />
          <CardPricing className="mb-10 w-full px-0 md:px-4" />
        </div>
      </div>
    </div>
    <div className="transform-gpu blur-3xl">
      <div className="absolute right-0 -z-20 h-64 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
    </div>
  </section>
);

export default CardContact;
