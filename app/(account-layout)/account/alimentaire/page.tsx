import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AlimentairePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Explore all Alimentaire</h1>
      <p>Welcome to the Alimentaire page. Here you can begin to explore some ressources.</p>
      {/* Add more components or functionality for course creation here */}
      <Link href="/account/alimentaire/month-1">
        <Button>
          test
        </Button>
       </Link>
      <Link href="/account/alimentaire/month-2">
        <Button>
          test
        </Button>
       </Link>
      <Link href="/account/alimentaire/month-3">
        <Button>
          test
        </Button>
       </Link>
    </div>
    
  );
};

export default AlimentairePage;