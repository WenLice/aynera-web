export type TasteArea = {
  id: string;
  name: string;
  description: string;
};

export const tasteAreas: TasteArea[] = [
  {
    id: "hobbies",
    name: "Hobbies",
    description: "Reading, writing, photography, creative interests and hands-on hobbies.",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    description: "How you spend everyday life and what you make room for.",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    description: "Music, movies, comedy, games and culture.",
  },
  {
    id: "food-drinks",
    name: "Food & Drinks",
    description: "From chai and coffee to food walks and trying new places.",
  },
  {
    id: "movement",
    name: "Movement",
    description: "Gym, running, walking, sport, yoga, outdoors.",
  },
  {
    id: "social-rhythm",
    name: "Social Rhythm",
    description: "Small groups vs crowds, planned vs spontaneous, quiet vs high-energy.",
  },
  {
    id: "growth-mind",
    name: "Growth & Mind",
    description: "Learning, ambition, curiosity and how you think about personal growth.",
  },
  {
    id: "city-life",
    name: "City Life",
    description: "How you actually like to experience the city around you.",
  },
];
