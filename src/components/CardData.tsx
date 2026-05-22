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

// can add more 'modes'
// if adding a new "profile" type needs to be added to
// both Mode and the array of Modes (Modes)
// redundant but should work
export type Mode = "business" | "personal";

// to have more dropdown cards
export const Modes: Mode[] = ["business", "personal"];

// need to rename
export const businessCards: CardData[] = [
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

export const personalCards: CardData[] = [
  {
    title: "Server",
    link: "discord.com",
    description: "totally real server",
    // icon: BsFillSuitcaseLgFill, // only pass in the name
  },
  {
    title: "Steam",
    link: "https://steamcommunity.com/id/sheybay101/",
    description: "add me :)",
    // icon: BsLinkedin,
  },
  {
    title: "Spotify",
    link: "https://open.spotify.com/user/ooooooof?si=6d373ecbbab14b5a",
    description: "taylor swift enthusiast",
    // icon: BsFileEarmarkTextFill,
  },
  {
    title: "Instagram",
    link: "instagram.com",
    // description: "github.com/ashley-perez",
    // icon: BsGithub,
  },
  {
    title: "Letterboxd",
    link: "https://boxd.it/NGmH",
    // description: "",
    // icon: BsGithub,
  },
];

export const dynamicCards: Record<Mode, CardData[]> = {
  business: businessCards,
  personal: personalCards,
};
