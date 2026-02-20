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
import CardCategorie from "@/features/landing/CardCategorie";
import RecentPosts from "@/features/landing/RecentPosts";
import { EmailFormSection } from "@/features/email/EmailFormSection";
import type { PostParams } from "@/features/posts/post-manager";
import {
  getLastPost,
  getPosts,
} from "@/features/posts/post-manager";

export async function generateMetadata({
  params,
}: PostParams): Promise<Metadata> {
  // Await params before accessing
  const { slug } = await params;
  const post = await getLastPost(slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "The requested post could not be found",
    };
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
  // Await params before accessing
  const params = await props.params;
  const post = await getLastPost(params.slug);

  if (!post) {
    logger.error(`Post not found for slug: ${params.slug}`);
    notFound();
  }

  // Check draft status
  if (
    post.attributes.status === "draft" &&
    process.env.NODE_ENV === "production"
  ) {
    logger.warn(`Post "${post.attributes.title}" is a draft`);
    notFound();
  }

  // Get post tags
  const postTags = post.attributes.tags || [];

  return (
    <>
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
            {postTags.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-2 p-4">
                {postTags.map((tag: string, index: number) => (
                  <span key={tag}>
                    <Link
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
                    {index < postTags.length - 1 && ` | `}
                  </span>
                ))}
              </div>
            ) : (
              <Typography variant="muted">
                Aucune catégorie
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
          {post.attributes.status === "draft" && (
            <Badge className="w-fit" variant="secondary">
              Draft
            </Badge>
          )}
        </LayoutHeader>
        <Separator />
        <LayoutContent>
          <div className="justify-center md:flex md:flex-row">
            <div className="flex-col">
              <CardCategorie className="mb-10 hidden h-[400px] md:flex" />
            </div>
            <ServerMdx
              className="prose mx-auto mb-8 dark:prose-invert lg:prose-lg xl:prose-xl lg:mx-20"
              source={post.content}
            />
          </div>
          <EmailFormSection />
        </LayoutContent>

        
        <div className="flex flex-col items-center gap-2">
          <Typography variant="p" className="max-w-xl font-bold text-orange-500">
            Récentes
          </Typography>
          <Typography variant="h2" className="max-w-xl">
            Blog
          </Typography>
        </div>
        <div className="mt-28">
          <RecentPosts />
        </div>
      </Layout>
    </>
  );
}