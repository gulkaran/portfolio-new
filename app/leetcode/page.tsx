import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getCountForPattern, getLeetCodeData, getTotalQuestions } from "./lib";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowLeft } from "lucide-react";
import arraysHashing from "@/public/images/leetcode/arrays-&-hashing.svg";
import backtracking from "@/public/images/leetcode/backtracking.svg";
import binarySearch from "@/public/images/leetcode/binary-search.svg";
import dynamicProgramming from "@/public/images/leetcode/dynamic-programming.svg";
import graphs from "@/public/images/leetcode/graphs.svg";
import heaps from "@/public/images/leetcode/heaps.svg";
import interval from "@/public/images/leetcode/interval.svg";
import linkedList from "@/public/images/leetcode/linked-list.svg";
import slidingWindow from "@/public/images/leetcode/sliding-window.svg";
import stacks from "@/public/images/leetcode/stacks.svg";
import tree from "@/public/images/leetcode/tree.svg";
import twoPointer from "@/public/images/leetcode/two-pointer.svg";

export const metadata: Metadata = {
  title: "Gulkaran Singh | LeetCode",
  description: "LeetCode Questions I've completed.",
};

export default async function LeetCode() {
  const data = await getLeetCodeData();

  const patternToImage = {
    "array-&-hashing": arraysHashing,
    backtracking: backtracking,
    "binary-search": binarySearch,
    "dynamic-programming": dynamicProgramming,
    graphs: graphs,
    heaps: heaps,
    intervals: interval,
    "linked-list": linkedList,
    "sliding-window": slidingWindow,
    stacks: stacks,
    trees: tree,
    "two-pointer": twoPointer,
  };

  const items = Object.entries(data)
    .map(([pattern, problems]) => {
      const formattedPattern = pattern.replace(/-/g, " ");
      const totalProblems = getCountForPattern(problems);

      return {
        title: formattedPattern,
        description: "",
        header: (
          <Image
            src={
              patternToImage[
                pattern.toLowerCase() as keyof typeof patternToImage
              ] || ""
            }
            alt={`${formattedPattern} Illustration`}
            className="w-full h-full rounded-xl"
          />
        ),
        icon: `${totalProblems} Problems Completed`,
        url: `/${pattern.toLowerCase()}`,
        problemCount: totalProblems,
      };
    })
    .sort((a, b) => b.problemCount - a.problemCount);

  const totalQuestions = await getTotalQuestions(data);

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
