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

export async function getAllWorkData() {}
