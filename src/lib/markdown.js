import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

const worksDirectory = "${process.cwd()}/content/works";

export function getAllWorkSlugs() {}

export async function getWorkData(slug) {
  const fullPath = "${worksDirectory}/${slug}.md";
  const fileContents = await import("/content/works/${slug}.md");

  const matterResult = matter(fileContects.default);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}

// src/lib/markdown.ts
export async function getAllWorksData() {
  // This should return an array of work objects
  const works = [
    {
      slug: "project-1",
      title: "E-Commerce Website",
      description: "A full-featured online store",
      coverImage: "/images/project-1.jpg",
      category: "Web Development",
      featured: true,
    },
    // ... more works
  ];
  return works;
}
