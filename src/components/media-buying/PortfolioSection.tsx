
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface PortfolioSectionProps {
  items: PortfolioItem[];
}

export const PortfolioSection = ({ items }: PortfolioSectionProps) => {
  return (
    <div className="glass-card p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-8 cult-heading">📁 Strategic Case Studies</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Card key={index} className="card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-white">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-nerd-accent/10 text-white rounded-full text-xs font-medium nerd-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
