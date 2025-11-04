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
        title: 'Le sommeil est capital dans la pratique sportive.',
        description: 'Découvrez pourquoi le sommeil est un pilier essentiel pour optimiser vos performances sportives. Explorez ses bienfaits sur la récupération, la progression et l’équilibre général, et apprenez à améliorer votre qualité de sommeil pour atteindre vos objectifs.',
        date: '2024-11-12',
        coverUrl: '/images/post4.jpg',
      },
      slug: '2024-11-12_Le_sommeil_est_capital_dans_la_pratique_sportive',
    },
    {
      attributes: {
        title: 'Comment perdre du poids de manière saine et durable',
        description: 'Explorez nos conseils pour perdre du poids de façon saine et durable. Découvrez des stratégies éprouvées pour allier alimentation équilibrée, activité physique adaptée et habitudes de vie saines, tout en préservant votre bien-être.',
        date: '2024-11-13',
        coverUrl: '/images/post2.jpg',
      },
      slug: '2024-11-13_Comment_perdre_du_poids_de_maniere_saine_et_durable',
    },
    {
      attributes: {
        title: 'La salle de sport quand on débute',
        description: 'Découvrez notre guide complet pour bien commencer à la salle de sport. Conseils pratiques, erreurs à éviter et astuces pour rester motivé, tout ce qu’il faut savoir pour transformer votre première expérience en réussite !',
        date: '2024-11-14',
        coverUrl: '/images/salle-de-sport.jpg',
      },
      slug: '2024-11-14_La-salle-de-sport-quand-on-debute',
    },
    {
      attributes: {
        title: 'Guide complet des compléments alimentaires dans le sport ',
        description: 'Découvrez notre guide complet sur les compléments alimentaires pour sportifs. Types, bienfaits, précautions et conseils pour optimiser vos performances en toute sécurité et apprenez à choisir les compléments adaptés à vos objectifs et à votre pratique.',
        date: '2024-11-11',
        coverUrl: '/images/post1.jpg',
      },
      slug: '2024-11-11_Guide-complet-des-complements-alimentaire-dans-le-sport',
    },
  ];

  return (
    <Layout>
      <div className="mx-auto -mt-32 mb-2 justify-center rounded-r-md md:flex md:px-4">
        <div
          className="mx-auto mt-10 grid w-full grid-cols-1 gap-6 text-gray-500 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
