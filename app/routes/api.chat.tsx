import { CloudflareStream } from "@/components/cloudflare-stream";
import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/cloudflare";
import { StreamingTextResponse } from "ai";
import { Ai } from "@cloudflare/ai";

export async function action({
  request,
  context: {
    cloudflare: { env },
  },
}: ActionFunctionArgs) {
  const { messages } = (await request.json()) as any;

  const stream = (await env.AI.run("@cf/meta/llama-3-8b-instruct", {
    messages,
    stream: true,
  })) as ReadableStream;

  let response = new Response(stream, {
    headers: { "content-type": "text/event-stream" },
  });

  let cStream = CloudflareStream(response);

  return new StreamingTextResponse(cStream);
}
