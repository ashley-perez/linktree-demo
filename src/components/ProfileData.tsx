import type { Mode } from "./CardData";

import edelgard from "/edelgard.png"; // have to import since base changed
import triforce from "/triforce.webp";
import star from "/mario_star.webp";

export type ProfileData = {
  name: string;
  bio: string;
  little_bio: string;
  pfp: string;
};

export const allProfiles: Record<Mode, ProfileData> = {
  professional: {
    name: "Ashley Perez",
    bio: "SWE, Gamer, Educator",
    little_bio: "I like to make things :)",
    pfp: edelgard,
  },
  personal: {
    name: "ashley :)",
    bio: "Probably watching a movie",
    little_bio: "horror enthusiast",
    pfp: triforce,
  },
  GDC: {
    name: "Ashley Perez",
    bio: "Gameplay and Level Designer",
    little_bio: "TIMESKIP out soon...",
    pfp: star,
  },
};
