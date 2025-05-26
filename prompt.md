Objective: build a full-page crypto insights NextJS app powered by Messari's API.

Context: you are starting from an empty repo. This repo is meant to be a getting started tutorial incorporating Messari's API onto a frontend. The attached image is a rough mockup of a crypto insights dashboard. The left Global Insights module will be populated using @https://api.messari.io/ai/openai/chat/completions , this API is OpenAI spec compatible, more on this later. The right Trending Topics module will be populated by Messari's Trending Topics API @https://api.messari.io/signal/v0/topics/global/current

For module on the left side, here's the prompt for the Global Insights module:
"Provide the global insights on the most impactful things happening in crypto in the recent days. Keep the answer short to a few bullet points, order them by their importance"

Call Messari's chat completions endpoint with the above prompt: @https://api.messari.io/ai/openai/chat/completions

On the right side module, build a full-page scroll through Trending Topics module populated by @https://api.messari.io/signal/v0/topics/global/current

Here are examples of cURL requests:

1. Chat Completions with prompt:
   curl --request POST \
    --url https://api.messari.io/ai/openai/chat/completions \
    --header 'X-MESSARI-API-KEY: api_key' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --data '
   {
   "verbosity": "balanced",
   "response_format": "markdown",
   "inline_citations": false,
   "stream": false,
   "generate_related_questions": 0,
   "messages": [
   {
   "role": "user",
   "content": "Provide the global insights on the most impactful things happening in crypto in the recent days. Keep the answer short to a few bullet points, order them by their importance"
   }
   ]
   }
   '

2. Trending Topics:
   curl --request GET \
    --url 'https://api.messari.io/signal/v0/topics/global/current?sort=trending' \
    --header 'X-MESSARI-API-KEY: api_key' \
    --header 'accept: application/json'

example response from trending topics:
{
"error": null,
"data": [
{
"title": "Stayloudio Launch on Kaito Platform",
"summary": "Stayloudio emerges as a new attention-based protocol powered by Kaito's InfoFi infrastructure, requiring Solana wallet integration and promising significant rewards for ecosystem participants. The development highlights Kaito's growing influence in the attention economy, with multiple airdrops planned for stakers and an expanding ecosystem of partner projects leveraging its yap-based engagement metrics.\n",
"content": "• @stayloudio emerges as a significant new protocol powered by Kaito, built by respected developer @0x_ultra, with strong community anticipation and explicit requirement for users to connect Solana wallets to their Kaito profiles for potential upcoming rewards\n\n• Kaito continues to establish itself as a leading InfoFi platform, measuring and tokenizing attention through \"yaps,\" with 18 accounts surpassing 10,000 yaps and an established ecosystem of project-specific leaderboards and reward systems\n\n• Platform demonstrates sophisticated metrics including Smart Followers (SF), Daily Active Bonus, and mindshare rankings, while maintaining partnerships with multiple projects including Virtuals.io, Infinex, and Novastro\n\n• Kaito stakers are positioned for multiple upcoming airdrops, with platform founder @Punk9277 confirming at least 10 partner airdrops for stakers, highlighting the platform's growing ecosystem value\n\n• The integration between content creation and tokenized rewards continues to evolve, with projects increasingly building on top of Kaito's InfoFi layer, suggesting a maturing model for attention-based cryptocurrency ecosystems\n",
"rank": 1,
"classes": [
"Feature Release",
"Partnership",
"Incentives Program",
"Project Strategy"
],
"topDocuments": [
{
"url": "https://x.com/xerocooleth/status/1926349224775430449",
"type": "x_post"
}
],
"documentCount": 654,
"avgDocumentTimestamp": "2025-05-25T09:18:21.136085627Z",
"assets": [
{
"id": "d0da32e4-af49-4a3b-8c13-a8e92d37a454",
"name": "KAITO",
"symbol": "KAITO",
"slug": "kaito"
}
]
}
],
"metadata": {
"pageSize": 1000,
"page": 0,
"totalRows": 22,
"totalPages": 1,
"includedClasses": [
"Treasury Management"
]
}
}

Display:

- The global insights modules will take two-thirds of the width.
- The trending topics will take one-third of the width.
- Have both the global insights module and trending topics module occupy the same height on scroll
- Global insights module: display citations metadata as a separate section at the bottom of the global insights module
- Trending topics module: display per topic metadata as chips after each topic content

Specifics: make this UI full-page and mobile friendly. To the extend possible prefetch these requests and cache them on the NextJS server side. Build the full code implementation for the entire page into this empty repo, no need to show me the plan first.
