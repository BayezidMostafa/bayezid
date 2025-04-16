import { BlogDetails as BlogDetailsProps } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getBlogDetails(title: string) {
  const query = `*[_type == "blog" && slug.current == $title][0]{
    "slug": slug.current,
    title,
    content,
    titleImage
  }`;

  const data = await client.fetch(query, { title });
  return data;
}

const BlogDetails = async ({ params }: { params: { title: string } }) => {
  const data: BlogDetailsProps = await getBlogDetails(params.title);

  if (!data) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-2 py-20 md:py-24">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

      {/* Cover Image */}
      {data.titleImage && (
        <div className="relative w-full mb-10 rounded-md overflow-hidden">
          <Image
            src={urlFor(data.titleImage).url()}
            alt={data.title}
            height={400}
            width={800}
            className="object-cover w-full"
            priority
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose prose-neutral dark:prose-invert">
        <PortableText value={data.content} />
      </div>
    </div>
  );
};

export default BlogDetails;
