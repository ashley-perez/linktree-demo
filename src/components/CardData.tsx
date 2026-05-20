import { IconType } from 'react-icons';

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
    // icon:
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/ashley-perezzz/",
    description: "linked.com/in/ashley-perezzz",
    // icon:
  },
  {
    title: "Resume",
    link: "placeholder",
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
