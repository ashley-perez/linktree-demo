import type { IconType } from "react-icons";

import { BsLinkedin } from "react-icons/bs";

export type CardData = {
  title: string;
  link: string;
  description?: string;
  icon?: IconType;
};

export const cards: CardData[] = [
  {
    title: "Portfolio",
    link: "https://ashley-perez.pages.dev/",
    description: "ashley-perez.pages.dev",
    icon: <BsLinkedin />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/ashley-perezzz/",
    description: "linked.com/in/ashley-perezzz",
    // icon:
  },
  {
    title: "Resume",
    link: "https://docs.google.com/document/d/1iK4ZV_fwZgwS4v7jV6YLXGVcKkeNJxXC/preview",
    // description: "",
    // icon:
  },
  {
    title: "Github",
    link: "https://github.com/ashley-perez",
    description: "github.com/ashley-perez",
    // icon:
  },
];
