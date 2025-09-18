// This component simply renders the HTML content from your MDX files.
interface MarkdownContentProps {
  content: string; // This is the HTML string from `remark-html`
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    // The 'prose' class adds Tailwind Typography styles for readability
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
