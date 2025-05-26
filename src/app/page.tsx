import GlobalInsights from "../components/GlobalInsights";
import TrendingTopics from "../components/TrendingTopics";
import { fetchGlobalInsights, fetchTrendingTopics } from "../lib/messari";
import { marked } from "marked";

export default async function Home() {
  // Fetch data server-side
  const [insightsRes, trendingRes] = await Promise.all([
    fetchGlobalInsights(),
    fetchTrendingTopics(),
  ]);

  // Parse insights content (markdown to HTML)
  const insightsContent = marked.parse(
    insightsRes.choices?.[0]?.message?.content || ""
  );
  const citations = insightsRes.choices?.[0]?.message?.citations || {};

  const trendingTopics = trendingRes.data || [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="py-6 px-4 sm:px-8 border-b border-border bg-card shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight text-center sm:text-left">
          Crypto Insights by Messari
        </h1>
      </header>
      <main className="flex-1 flex flex-col sm:flex-row gap-6 p-4 sm:p-8 max-w-7xl mx-auto w-full">
        <section className="w-full sm:w-2/3 flex flex-col">
          <GlobalInsights content={insightsContent} citations={citations} />
        </section>
        <aside className="w-full sm:w-1/3 flex flex-col max-h-[80vh] sm:max-h-none">
          <TrendingTopics topics={trendingTopics} />
        </aside>
      </main>
    </div>
  );
}
