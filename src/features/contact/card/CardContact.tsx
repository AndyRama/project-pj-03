'use client';

import React from 'react';
import { CardInfo } from './CardInfo';
import CardMap from './CardMap';
import CardPricing from './CardPricing';

export type CardContactProps = {
  className?: string;
};

const CardContact = ({ className }: CardContactProps) => (
  <section className={className}>
    <div className="container mx-auto mt-[-90px] lg:mt-[-150px]">
      <div className="flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CardInfo className="mb-10 w-full px-0 md:pr-4 lg:px-4" />
          <CardMap className="mb-10 w-full px-0 lg:px-4" />
          <CardPricing className="mb-10 w-full px-0 lg:px-4" />
        </div>
      </div>
    </div>
  </section>
);

export default CardContact;
