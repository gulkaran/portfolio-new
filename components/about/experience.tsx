import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ExperienceProps {
  company: string;
  jobTitle: string;
  date: string;
  img: StaticImageData;
  color?: string;
  url: string;
}

export default function Experience({
  company,
  jobTitle,
  date,
  img,
  color = "bg-white/10",
  url,
}: ExperienceProps) {
  return (
    <Link
      href={url}
      className="group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="flex-1 bg-transparent border-none shadow-none py-2">
        <CardHeader className="flex flex-row items-center gap-6 px-2">
          <div className="relative group flex items-center justify-center">
            <div
              className={`absolute w-12 h-12 rounded-md ${color} opacity-10 group-hover:opacity-20 transition-opacity`}
            ></div>
            <Image
              src={img}
              alt={`${company} Logo`}
              className="relative w-8 h-6 object-contain"
              width={32}
              height={32}
            />
          </div>
          <div className="flex flex-col">
            <CardTitle className="text-lg mb-0.5 font-normal">
              {company}
            </CardTitle>
            <CardDescription className="text-muted-foreground font-light">
              {jobTitle} ({date})
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
