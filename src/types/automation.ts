
export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  tech: string;
  goal: string;
  highlight: string;
}

export interface Technology {
  category: string;
  tools: string[];
  icon: React.ReactNode;
}

export interface MainService {
  icon: React.ReactNode;
  title: string;
  description: string;
}
