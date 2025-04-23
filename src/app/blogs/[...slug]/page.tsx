import { components } from "@/components/blogs/mdx-component";
import { formatDate } from "@/lib/utils";
import { allAuthors, allPosts } from "content-collections";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import NewsletterForm from "@/components/blogs/newsletterForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}
async function getPostFromParams(params: Promise<{ slug: string[] }>) {
  const slug = (await params)?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return post;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }
  const authors = post.authors.map((author) =>
    allAuthors.find(
      ({ _meta }) => _meta.path === `${author.replace(/\r$/, "")}`
    )
  );
  return (
    <div className="lg:relative">
      <div className="mx-auto max-w-4xl mb-20">
        <Link
          href="/blogs"
          className="group ml-5 sm:ml-0 mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
        >
          <span className="sr-only">Back to blog</span>
          <ArrowLeft className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
        </Link>
        <div className="mx-4 lg:mx-0">
          <div className="mx-5 sm:mx-auto flex flex-col">
            <h1 className="mt-6 text-4xl tracking-tighter font-bold text-zinc-800 sm:text-5xl">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="order-first flex items-center text-base text-zinc-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
              <span className="ml-3">{formatDate(post.date)}</span>
            </time>
          </div>
          <div>
            {authors?.length ? (
              <div className="mt-4 flex space-x-4">
                {authors.map((author) =>
                  author ? (
                    <Link
                      key={author._meta.path}
                      href={`https://twitter.com/${author.twitter}`}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <Image
                        src={author.avatar}
                        alt={author.title}
                        width={42}
                        height={42}
                        className="rounded-full bg-white w-10 h-10"
                      />
                      <div className="flex-1 text-left leading-tight">
                        <p className="font-medium">{author.title}</p>
                        <p className="text-[12px] text-muted-foreground">
                          @{author.twitter}
                        </p>
                      </div>
                    </Link>
                  ) : null
                )}
              </div>
            ) : null}
          </div>
          <div className="relative">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={720}
                height={405}
                className="my-8 rounded-md border bg-muted transition-colors w-full object-cover"
                priority
              />
            )}
          </div>

          <MDXContent code={post?.body.code} components={components} />
          <NewsletterForm />
        </div>
      </div>
    </div>
    // </div>
  );
}
