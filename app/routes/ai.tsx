import type { LoaderFunctionArgs } from "@remix-run/cloudflare";

export async function loader({
  context: {
    cloudflare: { env },
  },
}: LoaderFunctionArgs) {
  const answer = await env.AI.run("@cf/meta/llama-2-7b-chat-int8", {
    prompt: "Who is first chicken or egg?",
    stream: true,
  });

  return new Response(answer as string, {
    headers: { "content-type": "text/event-stream" },
  });
}
