
import React from "react";
import { LucideIcon } from "lucide-react";

interface WhyChooseMeItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhyChooseMeBenefit {
  highlight: string;
  description: string;
}

interface WhyChooseMeSectionProps {
  title: string;
  items?: WhyChooseMeItem[];
  benefits?: WhyChooseMeBenefit[];
}

export const WhyChooseMeSection: React.FC<WhyChooseMeSectionProps> = ({ 
  title, 
  items,
  benefits
}) => {
  // Use either items or benefits based on what's provided
  if (benefits && benefits.length > 0) {
    return (
      <section className="mb-16 bg-[#6caddf]/10 rounded-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1c3454]">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-[#6caddf] text-lg">{benefit.highlight}</p>
              <p className="text-[#1c3454]/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  // Fall back to original card style if benefits aren't provided
  return (
    <div className="mb-16 lg:mb-20 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {items?.map((item, index) => (
          <div key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50 rounded-lg p-4">
            <div className="pb-2">
              <div className="h-10 w-10 rounded-full bg-[#6caddf]/10 flex items-center justify-center mb-2">
                <item.icon className="h-5 w-5 text-[#6caddf]" />
              </div>
              <h3 className="text-lg text-[#1c3454]">{item.title}</h3>
            </div>
            <div>
              <p className="text-sm text-[#1c3454]/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
