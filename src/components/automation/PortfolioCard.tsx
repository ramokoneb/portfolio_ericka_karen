
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioItem } from "@/types/automation";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-2xl hover:shadow-2xl transition-all bg-white">
      <div className="h-40 md:h-48 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
      </div>
      <CardHeader>
        <CardTitle className="text-base md:text-lg text-[#1c3454]">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm md:text-base mb-4 text-[#1c3454]">{item.description}</p>
        <div className="flex flex-wrap gap-1 md:gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-[#1c3454]">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
