// src/app/page.tsx
import { getAllWorksData } from "@/lib/markdown";
import WorkItem from "@/components/WorkItem";

export default async function Home() {
  const allWorksData = await getAllWorksData();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <p className="text-xl max-w-2xl mx-auto">
          Mujahid Rofiq is a Web Developer based in Surakarta, Central Java.
          Partnering with designers and agencies, his work is focused on
          creating engaging and effective digital experiences.
        </p>
      </section>

      {/* Work Grid Section */}
      <section className="px-6 pb-20"></section>
    </div>
  );
}
