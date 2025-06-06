
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  testimonial: {
    quote: string;
    author: string;
    rating: number;
  };
}

export const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  const { quote, author, rating } = testimonial;
  
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <blockquote className="text-[#1c3454]/80 italic mb-4">"{quote}"</blockquote>
        <p className="text-right font-medium text-[#1c3454]">— {author}</p>
      </CardContent>
    </Card>
  );
};
