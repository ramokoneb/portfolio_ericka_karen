
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ResponsiveImage from "@/components/common/ResponsiveImage";

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
    <Card className="card-base overflow-hidden h-full">
      <div className="h-48 overflow-hidden">
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
        <p className="text-base mb-4 text-[#6CADDF] opacity-90 leading-relaxed">{item.description}</p>
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

export default PortfolioCard;
