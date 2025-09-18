// src/lib/markdown.ts
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

// Define the type for your work data
export interface WorkData {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category?: string;
  featured?: boolean;
  date?: string;
  technologies?: string[];
  demoUrl?: string;
  codeUrl?: string;
  contentHtml?: string;
}

const worksDirectory = path.join(process.cwd(), "src", "content", "works");

// Helper function to get all markdown files
function getMarkdownFiles(): string[] {
  try {
    if (!fs.existsSync(worksDirectory)) {
      console.warn("Works directory not found. Creating it...");
      fs.mkdirSync(worksDirectory, { recursive: true });
      return [];
    }

    return fs
      .readdirSync(worksDirectory)
      .filter((fileName) => fileName.endsWith(".md"));
  } catch (error) {
    console.error("Error reading works directory:", error);
    return [];
  }
}

export async function getAllWorksData(): Promise<WorkData[]> {
  const fileNames = getMarkdownFiles();

  if (fileNames.length === 0) {
    // Return sample data if no markdown files exist yet
    return getSampleWorksData();
  }

  const works: WorkData[] = [];

  for (const fileName of fileNames) {
    try {
      const slug = fileName.replace(/\.md$/, "");
      const workData = await getWorkData(slug);
      if (workData) {
        works.push(workData);
      }
    } catch (error) {
      console.error(`Error processing file ${fileName}:`, error);
    }
  }

  // Sort works by featured status and date
  return works.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
  });
}

export async function getWorkData(slug: string): Promise<WorkData | null> {
  try {
    const fullPath = path.join(worksDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      console.warn("Markdown file not found:", fullPath);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      contentHtml,
      ...matterResult.data,
    } as WorkData;
  } catch (error) {
    console.error(`Error reading work data for ${slug}:`, error);
    return null;
  }
}

export function getAllWorkSlugs() {
  const fileNames = getMarkdownFiles();

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Fallback sample data if no markdown files exist
function getSampleWorksData(): WorkData[] {
  return [
    {
      slug: "ecommerce-website",
      title: "E-Commerce Website",
      description:
        "A full-featured online store with shopping cart and payment processing.",
      coverImage: "/images/project-1.jpg",
      category: "Web Development",
      featured: true,
      date: "2023-01-15",
      technologies: ["Next.js", "Stripe", "MongoDB"],
      demoUrl: "https://demo.example.com",
      codeUrl: "https://github.com/yourusername/ecommerce",
      contentHtml:
        "<h2>Project Overview</h2><p>This e-commerce website was built with Next.js and integrates with Stripe for payments.</p>",
    },
    {
      slug: "weather-dashboard",
      title: "Weather Dashboard",
      description:
        "Real-time weather application using a public API with beautiful UI.",
      coverImage: "/images/project-2.jpg",
      category: "Web App",
      featured: false,
      date: "2023-03-20",
      technologies: ["React", "OpenWeather API", "CSS"],
      demoUrl: "https://weather-demo.com",
      codeUrl: "https://github.com/yourusername/weather-app",
      contentHtml:
        "<h2>Project Overview</h2><p>A clean and intuitive weather dashboard that displays current conditions and forecasts.</p>",
    },
  ];
}
