type MarkdownRendererProps = {
  markdown: string;
};

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const blocks = markdown
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0);

  return (
    <div className="markdown-renderer">
      {blocks.map((block, index) => {
        if (isBulletList(block)) {
          return (
            <ul className="markdown-renderer__list" key={`${index}-${block.slice(0, 24)}`}>
              {block.split("\n").map((line) => (
                <li key={line}>{line.replace(/^[-*]\s+/, "").trim()}</li>
              ))}
            </ul>
          );
        }

        return (
          <p className="markdown-renderer__paragraph" key={`${index}-${block.slice(0, 24)}`}>
            {block.replace(/\n+/g, " ")}
          </p>
        );
      })}
    </div>
  );
}

function isBulletList(block: string) {
  return block.split("\n").every((line) => /^[-*]\s+/.test(line.trim()));
}