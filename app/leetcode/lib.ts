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

export async function getLeetCodeData(): Promise<GroupedProblems> {
  const TOKEN_ENDPOINT =
    "https://iucujk439g.execute-api.us-east-1.amazonaws.com/default/readTable?TableName=Leetcode";

  if (!process.env.NEXT_PUBLIC_AWS_API_KEY) {
    throw new Error("AWS API Key is not defined");
  }

  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_AWS_API_KEY,
    } as const,
  };
  try {
    const res = await fetch(TOKEN_ENDPOINT, {
      method: options.method,
      headers: options.headers,
      cache: "force-cache" as RequestCache,
    });
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch LeetCode data:", error);
    return {};
  }
}

export async function getProblem(id: string): Promise<string> {
  const TOKEN_ENDPOINT = `https://gulkaran-portfolio.s3.amazonaws.com/leetcode/${id}.md`;

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "GET",
    cache: "force-cache" as RequestCache,
  });
  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }
  const data = await res.text();

  // Remove LeetCode logo image
  const logoRegex = /<img[^>]*LeetCode_Logo[^>]*>/;
  const dataWithoutLogo = data.replace(logoRegex, "");

  return dataWithoutLogo;
}

export function getCountForPattern(problems: ProblemsByDifficulty): number {
  return (
    (problems.Easy?.length || 0) +
    (problems.Medium?.length || 0) +
    (problems.Hard?.length || 0)
  );
}

export async function getTotalQuestions(
  data?: GroupedProblems
): Promise<number> {
  const problemsData = data || (await getLeetCodeData());
  return Object.values(problemsData).reduce(
    (total, problems) => total + getCountForPattern(problems),
    0
  );
}

export async function getQuestionsForPattern(
  pattern: string,
  data?: GroupedProblems
): Promise<number> {
  const problemsData = data || (await getLeetCodeData());
  return getCountForPattern(problemsData[pattern] || {});
}
