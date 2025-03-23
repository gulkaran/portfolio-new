import { getProblem } from "@/app/leetcode/lib";
import ProblemPage from "@/components/leetcode/markdown";

export default async function Category() {
  const problemData = await getProblem("home");
  return <ProblemPage markdown={problemData} problemId={"home"} />;
}
