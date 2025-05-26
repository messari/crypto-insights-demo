import React from "react";

type GlobalInsightsProps = {
  content: string;
  citations?: { [key: string]: any };
};

export default function GlobalInsights({
  content,
  citations,
}: GlobalInsightsProps) {
  return (
    <div className="bg-card rounded-lg shadow p-6 flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4 text-primary">Global Insights</h2>
      <div
        className="prose max-w-none text-base mb-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {citations && Object.keys(citations).length > 0 && (
        <div className="mt-auto pt-4 border-t border-border">
          <h3 className="text-lg font-semibold mb-2">Citations</h3>
          <ul className="list-disc list-inside text-sm">
            {Object.entries(citations).map(([key, value]) => (
              <li key={key} className="mb-1">
                <span className="font-medium">{key}:</span>{" "}
                {JSON.stringify(value)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
