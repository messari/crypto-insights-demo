import { cache } from "react";

const MESSARI_API_KEY = process.env.MESSARI_API_KEY;
const BASE_URL = "https://api.messari.io";

if (!MESSARI_API_KEY) {
  throw new Error("Missing MESSARI_API_KEY in environment variables");
}

export const fetchGlobalInsights = cache(async () => {
  const res = await fetch(`${BASE_URL}/ai/openai/chat/completions`, {
    method: "POST",
    headers: {
      "X-MESSARI-API-KEY": MESSARI_API_KEY!,
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      verbosity: "balanced",
      response_format: "markdown",
      inline_citations: true,
      stream: false,
      generate_related_questions: 0,
      messages: [
        {
          role: "user",
          content:
            "Provide the global insights on the most impactful things happening in crypto in the recent days. Keep the answer short to a few bullet points, order them by their importance",
        },
      ],
    }),
    // Next.js 13+ fetch cache options
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch global insights");
  return res.json();
});

export const fetchTrendingTopics = cache(async () => {
  const res = await fetch(
    `${BASE_URL}/signal/v0/topics/global/current?sort=trending`,
    {
      headers: {
        "X-MESSARI-API-KEY": MESSARI_API_KEY!,
        accept: "application/json",
      },
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch trending topics");
  return res.json();
});
