
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

export const PortfolioSection = ({
  items
}: PortfolioSectionProps) => {
  return (
    <div className="mb-16">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105" 
              />
            </div>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-2 bg-primary/5 border-2 border-primary/20 rounded-full text-sm font-medium"
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
