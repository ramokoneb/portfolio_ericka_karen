
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
    <Card className="overflow-hidden h-full">
      <div className="h-48 overflow-hidden">
        <ResponsiveImage
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base mb-4 leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
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
  );
};

export default PortfolioCard;
