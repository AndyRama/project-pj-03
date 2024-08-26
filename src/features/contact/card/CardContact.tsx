'use client';

import React from 'react';
import { CardInfo } from './CardInfo';
// import {CardPricing} from '../../components/contact/CardPricing';
import CardMap from './CardMap';

export type CardContactProps = {
  className?: string;
};

const CardContact = ({ className }: CardContactProps) => (
  <section className={className}>
    <div className="container mt-[-30px] lg:mt-[-120px]">
      <div className="justify-beteween flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CardInfo className="mb-10 w-full px-0 md:pr-4 lg:px-4" />
          <CardMap className="mb-10 w-full px-0 lg:px-4" />
          {/* <CardPricing className="mb-10 w-full px-0 lg:px-4" /> */}
        </div>
      </div>
    </div>
  </section>
);

export default CardContact;
