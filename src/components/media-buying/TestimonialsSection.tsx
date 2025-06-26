
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
    <section className="max-w-4xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="group p-8 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
              "{testimonial.text}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#34AEEF]/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-[#34AEEF] font-medium text-sm">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <p className="text-gray-900 font-medium">
                {testimonial.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
