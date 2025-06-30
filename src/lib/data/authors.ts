export interface Author {
  name: string;
  isTeam?: boolean;
  avatar?: string;
}

// We'll only define the Auriel Team, which will be used as fallback
export const aurielTeam: Author = {
  name: "Auriel Team",
  isTeam: true
};

export const authors: Record<string, Author> = {
  "Jack Dolby": {
    name: "Jack Dolby",
    avatar: "https://pbs.twimg.com/profile_images/1912133011941793792/ybEO9Y8V_400x400.jpg"
  }
}; 