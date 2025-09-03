export default function MarkdownContent({ content }) {
  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
