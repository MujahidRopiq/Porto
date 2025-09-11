// src/components/WorkItem.tsx
import Link from "next/link";
import Image from "next/image";

interface WorkItemProps {
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  category?: string;
  featured?: boolean;
}

export default function WorkItem({
  title,
  description,
  slug,
  coverImage,
  category,
  featured,
}: WorkItemProps) {
  return (
    <Link href={`/works/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 group-hover:shadow-xl">
        {/* Project Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-70 flex items-end">
            <div className="p-6 text-white opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-200 text-sm mb-3">{description}</p>
              {category && (
                <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs backdrop-blur-sm">
                  {category}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Badge for featured projects */}
        {featured && (
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-900 z-10">
            Featured
          </div>
        )}
      </div>
    </Link>
  );
}
