import Link from "next/link";
import data from "./data.json";
import { getCountForPattern, GroupedProblems, getTotalQuestions } from "./lib";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowLeft } from "lucide-react";
// import { QueryClient, QueryClientProvider } from "react-query";

async function getLeetCodeData(): Promise<GroupedProblems> {
  const TOKEN_ENDPOINT =
    "https://iucujk439g.execute-api.us-east-1.amazonaws.com/default/readTable?TableName=Leetcode";
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_AWS_API_KEY,
    },
  };

  const res = await fetch(TOKEN_ENDPOINT, options);
  const data = await res.json();

  return data;
}

export default async function LeetCode() {
  // const data = await getLeetCodeData();

  const items = Object.entries(data)
    .map(([pattern, problems]) => {
      const formattedPattern = pattern.replace(/-/g, " ");
      const totalProblems = getCountForPattern(problems);

      return {
        title: formattedPattern,
        description: "",
        header: <Skeleton />,
        icon: `${totalProblems} Problems Completed`,
        url: `/${pattern.toLowerCase()}`,
        problemCount: totalProblems,
      };
    })
    .sort((a, b) => b.problemCount - a.problemCount);

  const totalQuestions = getTotalQuestions();
  return (
    <div className="min-h-screen p-6 my-15">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <div className="w-fit">
            <Link href="/">
              <ArrowLeft className="h-6 w-6 mb-8 text-muted-foreground hover:text-white transition-colors" />
            </Link>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-5xl font-bold mb-3">LeetCode</h1>
              <p className="text-muted-foreground">
                {totalQuestions} Questions Completed
              </p>
            </div>
          </div>
        </header>
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              href={`/leetcode${item.url}`}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
