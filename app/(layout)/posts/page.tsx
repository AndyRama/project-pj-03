import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SubHero } from "@/features/landing/SubHero";
// import CardCategory from "@/features/posts/CardCategory";


import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";

import type { PageParams } from "@/types/next";
import { FileQuestion } from "lucide-react";
import Link from "next/link";
import { PostCard } from "../../../src/features/posts/PostCard";
import {
  getPosts,
  getPostsTags,
} from "../../../src/features/posts/post-manager";

const getTags = (
  params: string | string[] | undefined,
): string[] | undefined => {
  if (Array.isArray(params)) {
    return params;
  }
  if (typeof params === "string") {
    return [params];
  }
  return undefined;
};

export default async function RoutePage(props: PageParams<{}>) {
  const activeTags = getTags(props.searchParams.tag);
  const tags = await getPostsTags();
  const posts = await getPosts(activeTags);

  return (
    <>
      <SubHero className={""} title={"Dernier articles"} subTitle={"Mon blog"} />
      <Layout>
        <LayoutHeader>
          <LayoutTitle> 
          {activeTags ? (
            <LayoutDescription className="text-orange-500">
              {activeTags.join(", ")}
            </LayoutDescription>
          ) : null}
          </LayoutTitle>
       
        </LayoutHeader>
        <LayoutContent className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={{
                pathname: "/posts",
                query: {
                  tag: tag,
                },
              }}
            >
              <Badge
                variant={activeTags?.includes(tag) ? "default" : "outline"}
              >
                {tag}
              </Badge>
            </Link>
          ))}
        </LayoutContent>

        {posts.length === 0 ? (
          <LayoutContent className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center rounded-lg border-2 border-dashed p-4 lg:gap-6 lg:p-8">
              <FileQuestion />
              <Typography variant="h2">No posts found</Typography>
              <Link
                className={buttonVariants({ variant: "link" })}
                href="/posts"
              >
                View all posts
              </Link>
            </div>
          </LayoutContent>
        ) : (
          <LayoutContent className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* <CardCategory/> */}
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </LayoutContent>
        )}
      </Layout>
    </>
  );
}
