// Lightweight markdown -> HTML renderer used by blog posts

// Process inline markdown: **bold**, *italic*, [text](url)
const processInline = (text: string): string =>
  text
    .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>',
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-primary hover:underline">$1</a>',
    );

export const renderMarkdown = (content: string): string => {
  const lines = content.split("\n");
  const out: string[] = [];
  let inTable = false;
  let tableHeaderDone = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // --- Tables ---
    if (trimmed.startsWith("|")) {
      // Separator row like |---|---|
      if (/^\|[-:\s|]+\|$/.test(trimmed)) {
        tableHeaderDone = true;
        continue;
      }
      if (!inTable) {
        inTable = true;
        tableHeaderDone = false;
        out.push('<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse border border-border rounded-lg">');
      }
      const cells = trimmed.split("|").slice(1, -1);
      const tag = !tableHeaderDone ? "th" : "td";
      const cellClass = !tableHeaderDone
        ? "border border-border px-4 py-2 bg-muted font-semibold text-left text-secondary"
        : "border border-border px-4 py-2 text-foreground";
      out.push(`<tr>${cells.map((c) => `<${tag} class="${cellClass}">${processInline(c.trim())}</${tag}>`).join("")}</tr>`);
      continue;
    } else if (inTable) {
      out.push("</table></div>");
      inTable = false;
      tableHeaderDone = false;
    }

    // --- Block elements ---
    if (line.startsWith("## ")) {
      out.push(`<h2 class="text-2xl font-bold text-secondary mt-10 mb-4">${processInline(line.slice(3))}</h2>`);
    } else if (line.startsWith("### ")) {
      out.push(`<h3 class="text-xl font-bold text-secondary mt-8 mb-3">${processInline(line.slice(4))}</h3>`);
    } else if (line.startsWith("#### ")) {
      out.push(`<h4 class="text-lg font-semibold text-secondary mt-6 mb-2">${processInline(line.slice(5))}</h4>`);
    } else if (trimmed === "---") {
      out.push('<hr class="my-8 border-border" />');
    } else if (line.startsWith("- ")) {
      out.push(`<li class="ml-6 mb-1 list-disc">${processInline(line.slice(2))}</li>`);
    } else if (/^\d+\. /.test(line)) {
      const text = line.replace(/^\d+\.\s/, "");
      out.push(`<li class="ml-6 mb-1 list-decimal">${processInline(text)}</li>`);
    } else if (trimmed === "") {
      out.push("");
    } else if (trimmed.startsWith("<")) {
      out.push(trimmed);
    } else {
      out.push(`<p class="mb-4 leading-relaxed">${processInline(line)}</p>`);
    }
  }

  if (inTable) out.push("</table></div>");
  return out.join("\n");
};

export const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case "Web Development":
      return "bg-teal-600 text-white";
    case "AI Automation":
      return "bg-violet-600 text-white";
    case "Business Growth":
      return "bg-amber-600 text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};
