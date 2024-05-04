import NewsComponent from "@/components/common/news_component";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

interface News {
  date: string;
  title: string;
  body: string;
  image?: string[];
}

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export async function loader({}: LoaderFunctionArgs) {
  const dummyValue: News[] = [
    {
      date: "2022-01-01",
      title: "Test",
      body: "lorem ipsum dolor sit amet",
    },
    {
      date: "2022-01-01",
      title: "Test",
      body: "Test",
    },
    {
      date: "2022-01-01",
      title: "Test",
      body: "lorem ipsum dolor sit amet",
      image: ["https://picsum.photos/200"],
    },
    {
      date: "2022-01-01",
      title: "Test",
      body: "Test",
      image: ["https://picsum.photos/200"],
    },
    {
      date: "2022-01-01",
      title: "Test",
      body: "lorem ipsum dolor sit amet",
      image: ["https://picsum.photos/200", "https://picsum.photos/500"],
    },
    {
      date: "2022-01-01",
      title: "Test",
      body: "Change",
      image: ["https://picsum.photos/200"],
    },
  ];

  return json({
    data: dummyValue,
  });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="w-[60%] m-auto my-20">
      {data.data.map((item, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <NewsComponent key={index} {...item} />
      ))}
    </div>
  );
}
