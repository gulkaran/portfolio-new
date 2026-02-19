import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getLeetCodeData, getQuestionsForPattern } from "../lib";
import { AppSidebar } from "@/components/leetcode/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gulkaran Singh | LeetCode",
  description: "LeetCode Questions I've completed.",
};

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category); // & edgecase in array-&-hashing
  const formattedCategory = decodedCategory
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");

  const data = await getLeetCodeData();
  const categoryData = data[formattedCategory];
  const categoryQuestions = getQuestionsForPattern(formattedCategory, data);

  return (
    <div className="min-h-screen p-6 my-15">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <div className="w-fit">
            <Link href="/leetcode">
              <ArrowLeft className="h-6 w-6 mb-8 text-muted-foreground hover:text-white transition-colors" />
            </Link>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-5xl font-bold mb-3 flex gap-2">
                <span className="flex items-end gap-2">
                  LeetCode
                  <p className="text-xl text-muted-foreground">
                    / {formattedCategory.split("-").join(" ").toLowerCase()}
                  </p>
                </span>
              </h1>
              <p className="text-muted-foreground">
                {categoryQuestions} Questions Completed
              </p>
            </div>
          </div>
        </header>
        <SidebarProvider>
          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-80 lg:flex-shrink-0">
              <AppSidebar data={categoryData} category={category} />
            </div>
            <Separator
              orientation="vertical"
              className="h-full hidden lg:block"
            />
            <div className="flex-1 min-w-0 ml-8">
              <SidebarInset>{children}</SidebarInset>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
