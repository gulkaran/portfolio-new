"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProblemData {
  link_lc: { S: string };
  pattern: { S: string };
  date_updated: { S: string };
  link_s3: { S: string };
  difficulty: { S: string };
  date_created: { S: string };
  id: { S: string };
  name: { S: string };
}

interface CategoryData {
  Easy?: ProblemData[];
  Medium?: ProblemData[];
  Hard?: ProblemData[];
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: CategoryData;
  category: string;
}
export function AppSidebar({ data, category }: AppSidebarProps) {
  const pathname = usePathname();
  if (!data) return null;

  const difficultyOrder = ["Easy", "Medium", "Hard"];

  // sort difficulties according to predefined order
  const difficulties = Object.entries(data).sort(([a], [b]) => {
    return difficultyOrder.indexOf(a) - difficultyOrder.indexOf(b);
  });

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu className="w-full">
          {difficulties.map(([difficulty, problems]) => (
            <SidebarMenuItem key={difficulty} className="mb-2">
              <h2 className="font-medium text-lg mb-2">{difficulty}</h2>
              {problems?.length ? (
                <SidebarMenuSub>
                  {problems.map((problem: ProblemData) => {
                    const itemPath = `/leetcode/${category}/${problem.id.S}`;
                    const isActive = pathname === itemPath;

                    return (
                      <SidebarMenuSubItem key={problem.id.S}>
                        <SidebarMenuSubButton
                          asChild
                          className={`w-full ${
                            isActive ? "bg-accent text-accent-foreground" : ""
                          }`}
                        >
                          <Link href={itemPath}>
                            <p>{problem.name.S}</p>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              ) : null}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}
