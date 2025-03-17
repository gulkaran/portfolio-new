import data from "./data.json";

export interface LeetCodeProblem {
  date_created: { S: string };
  date_updated: { S: string };
  difficulty: { S: "Easy" | "Medium" | "Hard" };
  id: { S: string };
  link_lc: { S: string };
  link_s3: { S: string };
  name: { S: string };
  pattern: { S: string };
}

export interface ProblemsByDifficulty {
  Easy?: LeetCodeProblem[];
  Medium?: LeetCodeProblem[];
  Hard?: LeetCodeProblem[];
}

export interface GroupedProblems {
  [pattern: string]: ProblemsByDifficulty;
}

export function getCountForPattern(problems: ProblemsByDifficulty): number {
  return (
    (problems.Easy?.length || 0) +
    (problems.Medium?.length || 0) +
    (problems.Hard?.length || 0)
  );
}

export function getTotalQuestions(): number {
  return Object.values(data).reduce(
    (total, problems) => total + getCountForPattern(problems),
    0
  );
}

export function getQuestionsForPattern(pattern: string): number {
  return getCountForPattern(data[pattern] || {});
}
