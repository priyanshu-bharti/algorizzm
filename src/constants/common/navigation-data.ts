import {
  AppWindowMac,
  Asterisk,
  AsteriskSquare,
  Atom,
  BoxIcon,
  ChartNetworkIcon,
  ChartNoAxesCombined,
  Code,
  Code2,
  CodeSquare,
  CodeSquareIcon,
  Crown,
  Database,
  DatabaseZap,
  Dices,
  FileBadge2,
  FileEditIcon,
  Ghost,
  Headset,
  Hexagon,
  Leaf,
  LucideGanttChartSquare,
  LucideProps,
  MonitorCog,
  NetworkIcon,
  RedoDot,
  SendToBackIcon,
  ShieldCheck,
  SquareAsterisk,
  Workflow,
  Zap,
} from "lucide-react";
import { ForwardRefExoticComponent } from "react";

interface NavigationDataItem {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "">>;
}

const PREFIXES = {
  INTERVIEW: "prepare",
  TOOLS: "tools",
};

export const resourcesNavigationData: NavigationDataItem[] = [
  {
    title: "System Design Blogs",
    url: "https://dev.to/karanpratapsingh/system-design-the-complete-course-10fo",
    icon: MonitorCog,
  },
  {
    title: "System Design Primer",
    url: "https://github.com/donnemartin/system-design-primer",
    icon: SendToBackIcon,
  },
  {
    title: "Neetcode Practice",
    url: "https://neetcode.io/practice",
    icon: FileBadge2,
  },
  {
    title: "Striver A2Z Sheet",
    url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
    icon: ChartNetworkIcon,
  },
  {
    title: "Build your own X",
    url: "https://github.com/codecrafters-io/build-your-own-x",
    icon: BoxIcon,
  },
  {
    title: "Clean Code Playlist",
    url: "https://www.youtube.com/playlist?list=PLmmYSbUCWJ4x1GO839azG_BBw8rkh-zOj",
    icon: CodeSquareIcon,
  },
  {
    title: "DataLemur Practice",
    url: "https://datalemur.com/questions?category=SQL",
    icon: DatabaseZap,
  },
  {
    title: "StrataScratch Practice",
    url: "https://platform.stratascratch.com/coding?code_type=1&page_size=100&is_freemium=1",
    icon: LucideGanttChartSquare,
  },
  {
    title: "Low Level Design",
    url: "https://www.youtube.com/playlist?list=PL564gOx0bCLqTolRIHIsR2JPv11w8LESW",
    icon: Workflow,
  },
  {
    title: "Javascript Info",
    url: "https://javascript.info/",
    icon: Code,
  },
  {
    title: "Learn Typescipt",
    url: "https://www.typescript-training.com/",
    icon: Code2,
  },
  {
    title: "Patterns.dev",
    url: "https://www.patterns.dev/",
    icon: Asterisk,
  },
  {
    title: "X in Y Minutes",
    url: "https://learnxinyminutes.com/",
    icon: AsteriskSquare,
  },
  {
    title: "Animations.dev",
    url: "https://animations.dev/",
    icon: Crown,
  },
];

export const toolsNavigationData: NavigationDataItem[] = [
  {
    title: "Language Playground",
    url: `/${PREFIXES.TOOLS}/playground`,
    icon: CodeSquare,
  },
  {
    title: "Progress Tracker",
    url: `/${PREFIXES.TOOLS}/progress`,
    icon: ChartNoAxesCombined,
  },
  {
    title: "Mock Interview Simulator",
    url: `/${PREFIXES.TOOLS}/mock-interview`,
    icon: Headset,
  },
  {
    title: "Resume Maker",
    url: `/${PREFIXES.TOOLS}/resume-maker`,
    icon: FileEditIcon,
  },
  {
    title: "Flashcards",
    url: `/${PREFIXES.TOOLS}/flashcards`,
    icon: Zap,
  },
];

export const interviewNavigationData: NavigationDataItem[] = [
  {
    title: "Algo & Data Structures",
    url: `/${PREFIXES.INTERVIEW}/data-structures-algorithms`,
    icon: RedoDot,
  },
  {
    title: "System Design",
    url: `/${PREFIXES.INTERVIEW}/system-design-concepts`,
    icon: MonitorCog,
  },
  {
    title: "Javascript Concepts",
    url: `/${PREFIXES.INTERVIEW}/js-concepts`,
    icon: Code,
  },
  {
    title: "Typescript Concepts",
    url: `/${PREFIXES.INTERVIEW}/typescript-concepts`,
    icon: Code2,
  },
  {
    title: "Node.js Concepts",
    url: `/${PREFIXES.INTERVIEW}/node-js-concepts`,
    icon: Hexagon,
  },
  {
    title: "Database Concepts",
    url: `/${PREFIXES.INTERVIEW}/db-concepts`,
    icon: Database,
  },
  {
    title: "React.js Concepts",
    url: `/${PREFIXES.INTERVIEW}/react-concepts`,
    icon: Atom,
  },
  {
    title: "Java Fundamentals",
    url: `/${PREFIXES.INTERVIEW}/java-fundamentals`,
    icon: CodeSquare,
  },
  {
    title: "Spring & Spring Boot",
    url: `/${PREFIXES.INTERVIEW}/spring-boot`,
    icon: Leaf,
  },
  {
    title: "GoLang Fundamentals",
    url: `/${PREFIXES.INTERVIEW}/go-lang`,
    icon: Ghost,
  },
  {
    title: "Design Patterns",
    url: `/${PREFIXES.INTERVIEW}/design-patterns`,
    icon: SquareAsterisk,
  },
  {
    title: "Networking Concepts",
    url: `/${PREFIXES.INTERVIEW}/networking-concepts`,
    icon: NetworkIcon,
  },
  {
    title: "Testing and Security",
    url: `/${PREFIXES.INTERVIEW}/testing-security`,
    icon: ShieldCheck,
  },
  {
    title: "UNIX/Linux and CLI",
    url: `/${PREFIXES.INTERVIEW}/linux-unix-cli`,
    icon: AppWindowMac,
  },
  {
    title: "Other Technologies",
    url: `/${PREFIXES.INTERVIEW}/other-technologies`,
    icon: Dices,
  },
];
