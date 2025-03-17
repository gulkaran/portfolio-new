import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowLeft, Search } from "lucide-react";

export default function LeetCode() {
  return (
    <div className="min-h-screen p-6 my-15">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <Link href="/">
            <ArrowLeft className="h-6 w-6 mr-4 mb-8" />
          </Link>
          <div className="flex items-center mb-2">
            <h1 className="text-5xl font-bold">LeetCode</h1>
          </div>
          <p className="text-muted-foreground">120 Questions Completed</p>

          {/* <div className="flex justify-end mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#1e1e1e] rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
          </div> */}
        </header>

        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={
                <Link
                  href={`/leetcode/${item.url}`}
                  key={i}
                  className="my-auto"
                >
                  {item.header}
                </Link>
              }
              icon={item.icon}
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

const items = [
  {
    title: "Graphs",
    description:
      "Learn about connected components, shortest paths, and cycle detection.",
    header: <Skeleton />,
    icon: "18 Problems Completed",
    url: "/graphs",
  },
  {
    title: "Dynamic Programming",
    description:
      "Break problems down into subproblems and optimize recursive solutions.",
    header: <Skeleton />,
    icon: "25 Problems Completed",
    url: "/dynamic-programming",
  },
  {
    title: "Binary Trees",
    description: "Each node got up to two children.",
    header: <Skeleton />,
    icon: "22 Problems Completed",
    url: "/binary-trees",
  },
  {
    title: "Sliding Window",
    description:
      "The sliding window technique handles contiguous subarray problems.",
    header: <Skeleton />,
    icon: "12 Problems Completed",
    url: "/sliding-window",
  },
  {
    title: "Two Pointers",
    description:
      "Master problems involving sorted arrays, linked lists, and palindrome checks.",
    header: <Skeleton />,
    icon: "20 Problems Completed",
    url: "/two-pointers",
  },
  {
    title: "Backtracking",
    description: "Explore constraint satisfaction problems.",
    header: <Skeleton />,
    icon: "17 Problems Completed",
    url: "/backtracking",
  },
];
