import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SubHero } from "@/features/landing/SubHero";
import { EmailFormSection } from "@/features/email/EmailFormSection";

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
      <SubHero
        className={""}
        title={"Dernier articles"}
        subTitle={"Mon blog"}
      />
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

        <LayoutContent className="content mx-auto max-w-7xl flex-wrap items-center gap-2 px-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={{
                pathname: `/posts`,
                query: {
                  tag: tag,
                },
                hash: "Blog",
              }}
              scroll={false}
            >
              <Badge
                variant={activeTags?.includes(tag) ? "default" : "outline"}
                className="text-md mr-4"
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
          <div className=" mx-auto max-w-7xl flex-row">
            <LayoutContent className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              {posts.map((post) => (
                <PostCard id="Blog" key={post.slug} post={post} />
              ))}
            </LayoutContent>
          </div>
        )}
      </Layout>
      <EmailFormSection />
    </>
  );
}
