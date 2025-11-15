import {
  CodeOutlined,
  BlockOutlined,
  GatewayOutlined,
  NodeExpandOutlined,
  BgColorsOutlined,
  Html5Outlined,
  HighlightOutlined,
  ApiOutlined,
  GithubOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";

import R1 from "../Asset/Pets/Rottweiler_1.png";
import R2 from "../Asset/Pets/Rottweiler_2.png";
import B1 from "../Asset/Pets/Bulldog_1.png";
import B2 from "../Asset/Pets/Bulldog_2.png";
import P1 from "../Asset/Pets/puppy_1.png";
import P2 from "../Asset/Pets/puppy_2.png";
import P3 from "../Asset/Pets/puppy_3.png";

/* Timeline Items */
export const TIMELINE = [
  {
    year: "2025 — Promotion Platform",
    desc: "Built multi-level promo workflows using GraphQL & Tailwind.",
  },
  {
    year: "2024 — Offer Management System",
    desc: "Developed UI with Angular & Playwright.",
  },
  {
    year: "2023 — Pet Service Booking",
    desc: "Created booking UI using React.",
  },
  {
    year: "2023 — Download Delight",
    desc: "Developed UI using Angular + Material.",
  },
];

/* Tech Stack */
export const TECH_STACK = [
  { icon: <CodeSandboxOutlined />, name: "React" },
  { icon: <ApiOutlined />, name: "Angular" },
  { icon: <CodeOutlined />, name: "TypeScript" },
  { icon: <CodeOutlined />, name: "JavaScript" },
  { icon: <BlockOutlined />, name: "Redux Toolkit" },
  { icon: <GatewayOutlined />, name: "GraphQL" },
  { icon: <NodeExpandOutlined />, name: "Node Basics" },
  { icon: <BgColorsOutlined />, name: "Tailwind" },
  { icon: <Html5Outlined />, name: "HTML" },
  { icon: <HighlightOutlined />, name: "CSS" },
  { icon: <GithubOutlined />, name: "GitHub" },
];

/* Dog Images */
export const DOG_IMAGES = [P3, P2, P1, R1, R2, B1, B2];
