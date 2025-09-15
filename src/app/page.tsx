// src/app/page.tsx
import { getAllWorksData } from "@/lib/markdown";
import WorkItem from "@/components/WorkItem";

export default async function Home() {
  const allWorksData = await getAllWorksData();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of innovative projects and creative solutions
        </p>
      </section>

      {/* Work Grid Section */}
      <section className="px-6 pb-20">
        {/* Optional: Category Filter (you can implement this later) */}
        {/* <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-full bg-gray-900 text-white">All</button>
            <button className="px-4 py-2 rounded-full border">Web</button>
            <button className="px-4 py-2 rounded-full border">Mobile</button>
            <button className="px-4 py-2 rounded-full border">Branding</button>
          </div>
        </div> */}

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {allWorksData.map((work) => (
            <WorkItem
              key={work.slug}
              title={work.title}
              description={work.description}
              slug={work.slug}
              coverImage={work.coverImage}
              category={work.category}
              featured={work.featured}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
