
import React from "react";

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  title, 
  testimonials 
}) => {
  return (
    <div className="mb-16 lg:mb-20 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#f5f7fa] rounded-lg p-5 shadow-sm">
            <div className="flex items-center mb-3">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="italic text-[#1c3454] mb-4">
              "{testimonial.text}"
            </p>
            <p className="text-[#6caddf] font-medium">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
