import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Typography } from "../../components/ui/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import type { Post } from "./post-manager";
import { formatDate } from "@/lib/format/date";

type PostCardProps = {
  post: Post;
};

export const PostCard = (props: PostCardProps) => {
  const date = new Date(props.post.attributes.date);
  const author = "Jeremy Prat";

  return (
    <Card className="transition-all hover:shadow-xl">
      <CardHeader className="h-fit">
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <img
            src={props.post.attributes.coverUrl}
            alt={props.post.attributes.title}
            className="size-full object-cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="space-y-2">
        <Typography variant="p" className="!leading-tight">
          <span className="inline-block text-white">
            <span className="relative inline-block">
              <span className="text-white">
                {formatDate(date, "dd MMMM yyyy")}
              </span>
              <span className="mx-3">•</span>
              <span className="text-white">{author}</span>
            </span>
          </span>
        </Typography>
        <CardTitle>{props.post.attributes.title}</CardTitle>
        <CardDescription className="pb-8">{props.post.attributes.description}</CardDescription>
        <div className="flex items-center justify-between">
          <Link href={`/posts/${props.post.slug}`} className="rounded-[8px] border border-gray-600 px-8 text-white hover:border-orange-500">
            Lire l&apos;article 
          </Link>
          <span className="text-orange-500 ">Lecture 5 min</span>
        </div>
      </CardContent>
    </Card>
  );
};
