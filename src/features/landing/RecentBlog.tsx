import React from 'react'
import { LayoutContent } from '../page/layout';
import { FileQuestion, Link } from 'lucide-react';
import { Typography } from '@/components/ui/typography';
import { buttonVariants } from '@/components/ui/button';
import { PostCard } from '../posts/PostCard';
import { Post } from '../posts/post-manager';

function RecentBlog() {
  const posts: Post[] = []; // Declare the 'posts' variable as an array of type 'Post'

  return (
    <div>
      {posts.length === 0 ? (
        <LayoutContent className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center rounded-lg border-2 border-dashed p-4 lg:gap-6 lg:p-8">
            <FileQuestion />
            <Typography variant="h2">Recent posts Build</Typography>
            <Link
              className={buttonVariants({ variant: "link" })}
              href="/posts"
            >
              View all posts
            </Link>
          </div>
        </LayoutContent>
      ) : (
        <LayoutContent className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard id="Blog" key={post.slug} post={post} />
          ))}
        </LayoutContent>
      )}
    </div>
  )
}

export default RecentBlog