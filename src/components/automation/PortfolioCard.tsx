
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioItem } from "@/types/automation";
import ResponsiveImage from "@/components/common/ResponsiveImage";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white h-full">
      <div className="h-40 md:h-48 overflow-hidden">
        <ResponsiveImage 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105" 
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="px-4 pt-4 pb-2 md:px-6 md:pt-5 md:pb-3">
        <CardTitle className="text-lg text-[#1c3454]">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-5 md:px-6 md:pb-6">
        <p className="text-base mb-4 text-[#1c3454] opacity-80 leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-[#6CAAD9]/10 rounded-full text-xs font-medium text-[#1c3454]">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
