import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@remix-run/react";
import { useChat } from "ai/react";
import { Loader } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function ChatPage() {
  const { isLoading, messages, input, handleInputChange, handleSubmit } =
    useChat();

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-sm font-bold text-center my-2">
        Remix Chat : Cloudflare Workers AI ( LLama ) and Vercel ai sdk
      </h1>
      <hr />
      <main className="flex-1 overflow-auto mx-10 px-2">
        {messages.map((m, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 my-1 ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[100%] my-2 rounded-lg p-3 overflow-x-scroll ${
                m.role === "user"
                  ? "bg-black text-white"
                  : "bg-black/5 dark:bg-zinc-700"
              }`}
            >
              <ReactMarkdown
                components={{
                  code(props) {
                    const { children, className, node, ...rest } = props;

                    return (
                      <code
                        {...rest}
                        // border-black/20 rounded-md   border
                        className="text-sm bg-black/5 p-1"
                      >
                        {String(children).replace(/\n$/, "")}
                      </code>
                    );
                  },
                }}
                remarkPlugins={[remarkGfm]}
                className="text-sm leading-7"
              >
                {m.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </main>
      <div className="flex items-center gap-2 border-t bg-white px-4 py-3  dark:bg-gray-950">
        <Form onSubmit={handleSubmit} className="w-full flex">
          <Input
            className="flex-1 w-min mr-2"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
          />
          <Button disabled={isLoading} type="submit">
            {isLoading ? (
              <Loader
                className="animate-spin min-w-[5rem]"
                size={15}
                strokeWidth={2}
              />
            ) : (
              "Send :)"
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
}
