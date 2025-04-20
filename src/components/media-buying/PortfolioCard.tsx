
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PortfolioCardProps {
  item: {
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
}

export const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <Card className="card-base overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-[#1c3454]">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#6CADDF] mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-[#6CADDF]/10 text-[#1c3454] rounded-full text-xs font-medium border border-[#6CADDF]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
