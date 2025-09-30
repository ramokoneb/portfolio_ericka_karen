
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
      <section className="max-w-5xl mx-auto mb-16">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-darker mb-8 text-center">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {benefit.highlight}
                </h3>
                <p className="text-primary-darker text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-darker mb-8 text-center">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items?.map((item, index) => (
          <div key={index} className="glass-card p-6 md:p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <item.icon className="h-8 w-8 text-primary-dark" />
            </div>
            <h3 className="text-lg font-bold text-primary-darker mb-3">
              {item.title}
            </h3>
            <p className="text-primary-darker leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
