import Head from "next/head";
import Link from "next/link";
import { getAllWorksData } from "src/app/lib/markdown.js";
import WorkItem from "../components/WorkItem";

export default function Home({ AllWorksData }) {
  return (
    <div>
      <section className="works">
        <h2>Featured Work</h2>
        <div className="works-grid">
          {AllWorksData.map((work) => (
            <WorkItem key={work.slug} work={work} />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const AllWorksData = await getAllWorksData();
  return {
    props: {
      AllWorksData,
    },
  };
}
