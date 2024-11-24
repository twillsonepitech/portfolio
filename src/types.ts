export interface Diploma {
  school: string;
  degree: string;
  period: string;
  status: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Hackathon {
  name: string;
  date: string;
  description: string;
  achievement: string;
  tags: string[];
}

export interface Experience {
  company: string;
  href: string;
  role: string;
  period: string;
  tags: string[];
  description: string;
}

export interface LocalizedContent {
  diplomas: Diploma[];
  hackathons: Hackathon[];
  experiences: Experience[];
}

export interface Content {
  en: LocalizedContent;
  fr: LocalizedContent;
}
