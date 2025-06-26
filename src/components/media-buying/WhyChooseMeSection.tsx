
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
  if (benefits && benefits.length > 0) {
    return (
      <section className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center p-8 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#34AEEF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#34AEEF]/20 transition-colors duration-300">
                <div className="w-8 h-8 bg-[#34AEEF] rounded-lg"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {benefit.highlight}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  return (
    <section className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items?.map((item, index) => (
          <div key={index} className="group text-center p-8 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#34AEEF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#34AEEF]/20 transition-colors duration-300">
              <item.icon className="h-8 w-8 text-[#34AEEF]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
