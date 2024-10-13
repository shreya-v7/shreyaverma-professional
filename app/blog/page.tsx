import BlogList from "./bloglist";

export const metadata = {
  title: "Blog",
  description: "Shreya Verma is a Machine Learning Practitioner",
};

export default function BlogPosts() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Blogs</h1>
      <BlogList />
      <div>
      </div>
    </section>
  );
}
