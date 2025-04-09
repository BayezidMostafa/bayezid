import BlogCard from "@/components/BlogCard/BlogCard";
import Text from "@/components/ui/Text";
import { client } from "@/lib/sanity";

async function getBlogs() {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    title,
    slug,
    smallDescription,
    titleImage {
      asset -> {
        url
      }
    }
  }`;
  const data = await client.fetch(query);
  return data;
}

const Blogs = async () => {
  const blogs = await getBlogs();

  return (
    <section className="py-20 md:py-24 lg:py-32 min-h-screen max-w-7xl px-2 mx-auto">
      <div className="text-center">
        <Text as={"h1"} variant="header">
          Blogs
        </Text>
        <Text className="mt-4" as={"h2"}>All my blogs you will find over here!</Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {blogs.map((blog: any) => (
          <BlogCard
            key={blog.slug.current}
            title={blog.title}
            slug={blog.slug.current}
            titleImage={blog.titleImage}
            smallDescription={blog.smallDescription}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
