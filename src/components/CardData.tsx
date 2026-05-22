import type { IconType } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { BsFillSuitcaseLgFill } from "react-icons/bs";

import { BsDiscord } from "react-icons/bs";
import { BsDpadFill } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BsTicketDetailedFill } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";

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
export type Mode = "professional" | "personal";

// to have more dropdown cards
export const Modes: Mode[] = ["professional", "personal"];

export const professionalCards: CardData[] = [
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
    link: "https://discord.com/",
    description: "totally real server",
    icon: BsDiscord,
  },
  {
    title: "Steam",
    link: "https://store.steampowered.com/",
    description: "game time",
    icon: BsDpadFill,
  },
  {
    title: "Spotify",
    link: "https://open.spotify.com/user/ooooooof?si=6d373ecbbab14b5a",
    description: "taylor swift enthusiast",
    icon: BsSpotify,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/",
    description: ":D",
    icon: BsCameraFill,
  },
  {
    title: "Letterboxd",
    link: "https://boxd.it/NGmH",
    description: "trying to watch every movie ever",
    icon: BsTicketDetailedFill,
  },
];

export const dynamicCards: Record<Mode, CardData[]> = {
  professional: professionalCards,
  personal: personalCards,
};
