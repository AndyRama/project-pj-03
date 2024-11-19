import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { ServerMdx } from "@/features/markdown/ServerMdx";
import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { formatDate } from "@/lib/format/date";
import { logger } from "@/lib/logger";
import { SiteConfig } from "@/site-config";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
// import { calculateReadingTime } from "../../../../src/features/posts/calculate-reading-time";
import type { PostParams } from "../../../../src/features/posts/post-manager";
import {
  getCurrentPost,
  getPosts,
} from "../../../../src/features/posts/post-manager";
import CardCategorie from "@/features/landing/CardCategorie";
import RecentPosts from "@/features/landing/RecentPosts";

export async function generateMetadata({
  params,
}: PostParams): Promise<Metadata> {
  const post = await getCurrentPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.attributes.title,
    description: post.attributes.description,
    keywords: post.attributes.keywords,
    authors: {
      name: "Jeremy Prat",
      url: "https://unlcoaching.com",
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function RoutePage(props: PostParams) {
  const post = await getCurrentPost(props.params.slug);

  if (!post) {
    notFound();
  }

  if (
    post.attributes.status === "draft" &&
    process.env.VERCEL_ENV === "production"
  ) {
    logger.warn(`Post "${post.attributes.title}" is a draft`);
    notFound();
  }

  // Assuming tags are in post.attributes.tags
  const postTags = post.attributes.tags;

  return (
    <Layout>
      <LayoutContent>
        <Link className={buttonVariants({ variant: "link" })} href="/posts">
          <ArrowLeft size={16} /> Back
        </Link>

        <LayoutTitle className="mx-auto max-w-4xl text-center text-3xl drop-shadow-sm lg:text-5xl xl:text-6xl">
          {post.attributes.title}
        </LayoutTitle>
        <LayoutDescription className="mt-4 text-center drop-shadow-sm">
          {formatDate(new Date(post.attributes.date))} · Created by{" "}
          <Typography variant="link" as={Link} href={SiteConfig.maker.website}>
            {SiteConfig.maker.name}
          </Typography>
        </LayoutDescription>

        <LayoutDescription className="mt-4 text-center drop-shadow-sm">
          {postTags?.length ? (
            <div className="flex flex-wrap justify-center gap-2 p-4">
              {postTags.map((tag: string, index: number) => (
                <span key={tag}>
                  <Link
                    key={tag}
                    href={{
                      pathname: `/posts`,
                      query: {
                        tag: tag,
                      },
                    }}
                  >
                    <Badge
                      variant="outline"
                      className="text-md hover:text-orange-500"
                    >
                      {tag}
                    </Badge>
                  </Link>
                  {index < postTags.length - 1 ? ` | ` : ``}
                </span>
              ))}
            </div>
          ) : (
            <Typography variant="link" as={Link} href="#">
              aucune categories
            </Typography>
          )}
        </LayoutDescription>
      </LayoutContent>
      <LayoutHeader
        style={{
          backgroundImage: `url(${post.attributes.coverUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[400px] overflow-hidden rounded-lg md:h-[600px]"
      >
        {post.attributes.status === "draft" ? (
          <Badge className="w-fit" variant="secondary">
            Draft
          </Badge>
        ) : null}
      </LayoutHeader>
      <Separator />
      <LayoutContent>
        <div className="justify-center md:flex md:flex-row ">
          <div className="flex-col">
            <CardCategorie className="mb-10 hidden h-[400px] md:flex" />
          </div>
          <ServerMdx
            className="prose mx-auto mb-8 dark:prose-invert lg:prose-lg xl:prose-xl lg:mx-20"
            source={post.content}
          />
        </div>
      </LayoutContent>
      <div className="flex flex-col items-center gap-2">
        <Typography variant="p" className="max-w-xl font-bold text-orange-500">
          Recentes
        </Typography>
        <Typography variant="h2" className="max-w-xl">
          Blog
        </Typography>
      </div>
      <div className="mt-28">
        <RecentPosts />
      </div>
    </Layout>
  );
}
