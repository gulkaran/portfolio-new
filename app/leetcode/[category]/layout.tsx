import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getQuestionsForPattern } from "../lib";

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
}) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category); // & edgecase in array-&-hashing
  const formattedCategory = decodedCategory
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");

  const categoryQuestions = getQuestionsForPattern(formattedCategory);

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
                    / {formattedCategory.split("-").join(" ")}
                  </p>
                </span>
              </h1>
              <p className="text-muted-foreground">
                {categoryQuestions} Questions Completed
              </p>
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
