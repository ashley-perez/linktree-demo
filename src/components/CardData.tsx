import type { IconType } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { BsFillSuitcaseLgFill } from "react-icons/bs";

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
    icon: BsFillSuitcaseLgFill, // only pass in the name
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/ashley-perezzz/",
    description: "linkedin.com/in/ashley-perezzz",
    icon: BsLinkedin,
  },
  {
    title: "Resume",
    link: "https://docs.google.com/document/d/1iK4ZV_fwZgwS4v7jV6YLXGVcKkeNJxXC/preview",
    description: "my_experience.txt",
    icon: BsFileEarmarkTextFill,
  },
  {
    title: "Github",
    link: "https://github.com/ashley-perez",
    description: "github.com/ashley-perez",
    icon: BsGithub,
  },
];
