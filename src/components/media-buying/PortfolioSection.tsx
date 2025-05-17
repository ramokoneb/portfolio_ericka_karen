
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
  return <div className="glass-card p-8 rounded-lg shadow-sm bg-gray-50">
      <h2 className="section-title">📁 Strategic Case Studies</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => <Card key={index} className="card-base overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
            </div>
            <CardHeader>
              <CardTitle className="text-primary-darker">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary-dark/80 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => <span key={tag} className="px-2 py-1 bg-primary-light/10 text-primary-dark rounded-full text-xs font-medium border border-primary-light/20">
                    {tag}
                  </span>)}
              </div>
            </CardContent>
          </Card>)}
      </div>
    </div>;
};
