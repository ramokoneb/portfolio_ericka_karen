
import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WhyChooseMeItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhyChooseMeSectionProps {
  title: string;
  items: WhyChooseMeItem[];
}

export const WhyChooseMeSection: React.FC<WhyChooseMeSectionProps> = ({ 
  title, 
  items 
}) => {
  return (
    <div className="mb-16 lg:mb-20 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
        <span className="text-[#6caddf] mr-2">🎯</span> {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {items.map((item, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-2">
              <div className="h-10 w-10 rounded-full bg-[#6caddf]/10 flex items-center justify-center mb-2">
                <item.icon className="h-5 w-5 text-[#6caddf]" />
              </div>
              <CardTitle className="text-lg text-[#1c3454]">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-[#1c3454]/80">{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
