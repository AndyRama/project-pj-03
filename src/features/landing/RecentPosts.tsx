'use client';

import React from 'react';
import { Layout } from '@/features/page/layout';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Typography } from '@/components/ui/typography';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { formatDate } from '@/lib/format/date';

type Post = {
  attributes: {
    title: string;
    description: string;
    date: string;
    coverUrl: string;
  };
  slug: string;
};

export const RecentPostCard = ({ post }: { post: Post }) => {
  const date = new Date(post.attributes.date);
  const author = 'Jeremy Prat';

  return (
    <Card className="transition-all hover:shadow-xl">
      <CardHeader className="h-fit">
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <img
            src={post.attributes.coverUrl}
            alt={post.attributes.title}
            className="size-full rounded-t object-cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="space-y-2">
        <Typography variant="p" className="!leading-tight">
          <span className="inline-block text-white">
            <span className="relative inline-block">
              <span className="text-white">
                {formatDate(date, 'dd MMMM yy')}
              </span>
              <span className="mx-3">•</span>
              <span className="text-white">{author}</span>
            </span>
          </span>
        </Typography>
        <CardTitle>{post.attributes.title}</CardTitle>
        <CardDescription className="pb-8">{post.attributes.description}</CardDescription>
        <div className="flex w-[250px] items-center justify-between">
          <Link
            href={`/posts/${post.slug}`}
            className="rounded-[5px] border border-gray-600 px-4 text-white hover:border-orange-500 xl:px-8"
          >
            Lire l&apos;article
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export const RecentPosts = () => {
  const posts: Post[] = [
    {
      attributes: {
        title: 'Arcachon : Découvrez l’événement cycliste incontournable',
        description: 'Un aperçu du Team Vélo en 2023.',
        date: '2023-07-15',
        coverUrl: '/images/groupArcachon.jpg',
      },
      slug: 'arcachon-event-2023',
    },
    {
      attributes: {
        title: 'Compétition de Fitness en France',
        description: 'Préparez-vous pour la saison 2024 avec nos conseils.',
        date: '2024-01-20',
        coverUrl: '/images/fitnessFrance.jpg',
      },
      slug: 'fitness-competition-2024',
    },
    {
      attributes: {
        title: 'Rééducation et remise en forme : Guide essentiel',
        description: 'Retour en forme après une blessure.',
        date: '2023-05-30',
        coverUrl: '/images/reducation.jpg',
      },
      slug: 'reeducation-guide-2023',
    },
    {
      attributes: {
        title: 'Préparation concours avec Jeremy Prat',
        description: 'Découvrez les coulisses d’une préparation réussie.',
        date: '2024-09-12',
        coverUrl: '/images/coaching.jpg',
      },
      slug: 'concours-prepa-2024',
    },
  ];

  return (
    <Layout>
      <div className="mx-auto -mt-32 mb-2 justify-center rounded-r-md md:flex md:px-4">
        <div
          className="mx-auto mt-10 grid w-full grid-cols-1 gap-6 text-gray-500 md:grid-cols-2 lg:w-10/12 lg:grid-cols-3 xl:grid-cols-4"
        >
          {posts.map((post, index) => (
            <RecentPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RecentPosts;
