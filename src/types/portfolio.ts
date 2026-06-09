export interface PortfolioProject {
  id?: string | number;
  title: string;
  category: string;
  type: string;
  features: string[];
  timeline: string;
  tech: string;
  image: string;
  isLive?: boolean;
  liveUrl?: string;
}
