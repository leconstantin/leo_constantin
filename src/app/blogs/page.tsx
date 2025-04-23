import type { Metadata } from "next";
import { compareDesc } from "date-fns";
import { allPosts } from "content-collections";
import PostCard from "@/components/blogs/postCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.",
};

export default async function Blog() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <div className="mx-5 sm:mx-auto mt-16 sm:mt-20 md:border-l md:border-zinc-100 md:pl-6">
      <div className="flex max-w-3xl flex-col space-y-16">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
