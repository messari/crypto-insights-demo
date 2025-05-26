import React from "react";

type Topic = {
  title: string;
  summary: string;
  content: string;
  rank: number;
  classes: string[];
  topDocuments?: { url: string; type: string }[];
  assets?: { id: string; name: string; symbol: string; slug: string }[];
};

type TrendingTopicsProps = {
  topics: Topic[];
};

export default function TrendingTopics({ topics }: TrendingTopicsProps) {
  return (
    <div className="bg-card rounded-lg shadow p-6 h-full flex flex-col overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-primary">Trending Topics</h2>
      <div className="flex flex-col gap-6">
        {topics.map((topic, idx) => (
          <div
            key={topic.title + idx}
            className="border-b border-border pb-4 last:border-b-0 last:pb-0"
          >
            <h3 className="text-lg font-semibold mb-1">{topic.title}</h3>
            <div className="text-base mb-2 whitespace-pre-line">
              {topic.content || topic.summary}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {topic.classes?.map((cls) => (
                <span
                  key={cls}
                  className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-medium"
                >
                  {cls}
                </span>
              ))}
              {topic.assets?.map((asset) => (
                <span
                  key={asset.id}
                  className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                >
                  {asset.symbol}
                </span>
              ))}
              {topic.topDocuments?.map((doc, i) => (
                <a
                  key={doc.url + i}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background border border-border text-xs px-2 py-1 rounded-full hover:underline"
                >
                  {doc.type}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
