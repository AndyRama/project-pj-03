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
import { PostCard } from "@/features/posts/PostCard";
import {
  getPosts,
  getPostsTags,
} from "@/features/posts/post-manager";

/**
 * Normalise les paramètres de tag en tableau de strings
 */
const getTags = (
  params: string | string[] | undefined,
): string[] | undefined => {
  if (Array.isArray(params)) {
    return params.filter(Boolean); // Filtre les valeurs vides
  }
  if (typeof params === "string" && params.trim()) {
    return [params.trim()];
  }
  return undefined;
};

export default async function RoutePage(props: PageParams<{}>) {
  // Await searchParams pour Next.js 15+
  const searchParams = await props.searchParams;
  const activeTags = getTags(searchParams.tag);
  
  // Récupération des tags et posts
  const tags = await getPostsTags();
  const posts = await getPosts(activeTags);

  // console.log("Active tags:", activeTags); 
  // console.log("Found posts:", posts.length); 

  return (
    <>
      <SubHero
        className=""
        title="Derniers articles"
        subTitle="Mon blog"
      />
      <Layout>
        <LayoutHeader>
          {activeTags && activeTags.length > 0 && (
            <LayoutTitle>
              <LayoutDescription className="text-orange-500">
                Filtré par : {activeTags.join(", ")}
              </LayoutDescription>
            </LayoutTitle>
          )}
        </LayoutHeader>
        
        {/* Section des tags */}
        <LayoutContent className="content mx-auto max-w-7xl flex-wrap items-center gap-2 px-2">
          {/* Bouton "Tous" pour réinitialiser les filtres */}
          <Link
            href={{
              pathname: `/posts`,
              hash: "Blog",
            }}
            scroll={false}
          >
            <Badge
              variant={!activeTags || activeTags.length === 0 ? "default" : "outline"}
              className="text-md mr-4"
            >
              Tous
            </Badge>
          </Link>
          
          {/* Liste des tags */}
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
                className="text-md mr-4 transition-colors hover:bg-orange-500 hover:text-white"
              >
                {tag}
              </Badge>
            </Link>
          ))}
        </LayoutContent>

        {/* Section des posts */}
        {posts.length === 0 ? (
          <LayoutContent className="flex flex-col items-center justify-center py-16">
            <div className="flex flex-col items-center rounded-lg border-2 border-dashed p-8 lg:gap-6 lg:p-12">
              <FileQuestion size={48} className="text-muted-foreground" />
              <Typography variant="h2">Aucun article trouvé</Typography>
              <Typography variant="muted" className="text-center">
                {activeTags && activeTags.length > 0
                  ? `Aucun article ne correspond aux tags : ${activeTags.join(", ")}`
                  : "Aucun article disponible pour le moment"}
              </Typography>
              <Link
                className={buttonVariants({ variant: "link" })}
                href="/posts"
              >
                Voir tous les articles
              </Link>
            </div>
          </LayoutContent>
        ) : (
          <div className="mx-auto max-w-7xl">
            <LayoutContent className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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