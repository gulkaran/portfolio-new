import { getProblem } from "@/app/leetcode/lib";
import ProblemPage from "@/components/leetcode/markdown";

export default async function Problem({
  params,
}: {
  params: { problem: string };
}) {
  const { problem } = await params;
  const problemData = await getProblem(problem);

  return <ProblemPage markdown={problemData} problemId={problem} />;
}
