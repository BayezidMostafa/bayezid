"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  titleImage: any;
  smallDescription: string;
}

const BlogCard = ({
  title,
  slug,
  titleImage,
  smallDescription,
}: BlogCardProps) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <Card className="hover:shadow-lg transition duration-300">
        {titleImage && (
          <Image
            src={urlFor(titleImage).url()}
            alt={title}
            width={600}
            height={400}
            className="rounded-t-md object-contain w-full h-[200px]"
          />
        )}
        <CardContent className="p-4">
          <CardTitle className="text-lg font-bold mb-2">{title}</CardTitle>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {smallDescription}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
