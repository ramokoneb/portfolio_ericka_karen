
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioItem } from "@/types/automation";
import ResponsiveImage from "@/components/common/ResponsiveImage";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full">
      <div className="h-48 md:h-56 overflow-hidden bg-[#F7FAFC]">
        <ResponsiveImage 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105" 
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="px-6 pt-6 pb-4">
        <CardTitle className="text-xl text-[#1A202C] font-semibold leading-tight">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <p className="text-base mb-6 text-[#4A5568] leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="px-3 py-2 bg-[#F7FAFC] border border-[#E2E8F0] rounded-lg text-sm font-medium text-[#4A5568]">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
